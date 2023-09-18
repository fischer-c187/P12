import { useLayoutEffect, useState } from 'react';
import { mergeChartDimensions } from '../utils/mergeChartDimensions';

export const useResponsiveDimensions = (passedSettings, ref) => {
  const dimensions = mergeChartDimensions(passedSettings);
  const wrapperElement = ref;

  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });
  
  useLayoutEffect(() => {
    if (dimensions.width && dimensions.height) {
      return dimensions;
    }

    if(wrapperElement.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
  
        const entry = entries[0];
  
        if (size.width !== entry.contentRect.width || size.height !== entry.contentRect.height) {
          setSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          });
        }
      });
      
      resizeObserver.observe(wrapperElement.current);

      
      return () => resizeObserver.disconnect();
    }

  }, [size, dimensions, wrapperElement]);
  
  const newSettings = mergeChartDimensions({
    ...dimensions,
    width: dimensions.width || size.width,
    height: dimensions.height || size.height,
  });
  
  return newSettings;
};
