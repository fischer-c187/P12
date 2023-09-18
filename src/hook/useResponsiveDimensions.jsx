import { useLayoutEffect, useState } from 'react';
import { mergeChartDimensions } from '../utils/mergeChartDimensions';

/**
 * Hook to dynamically determine the dimensions of a referenced DOM element.
 *
 * It either returns the passed dimensions or calculates them using ResizeObserver based on
 * the actual size of the component in the DOM.
 *
 * @param {Object} passedSettings - Passed dimension settings.
 * @param {Object} ref - React ref pointing to the DOM element.
 * @returns {Object} The computed settings including width and height.
 *
 */
export const useResponsiveDimensions = (passedSettings, ref) => {
  const dimensions = mergeChartDimensions(passedSettings);
  const wrapperElement = ref;

  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    if (wrapperElement.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }

        const entry = entries[0];

        if (
          size.width !== entry.contentRect.width ||
          size.height !== entry.contentRect.height
        ) {
          setSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
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
