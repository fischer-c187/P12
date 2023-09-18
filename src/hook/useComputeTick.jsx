import { useMemo } from 'react';

/**
 * Computes tick values and offsets based on a given scale and tick value.
 * 
 * This hook memoizes its result to avoid unnecessary recalculations. It's designed to
 * accommodate scenarios where data might change, but the scale remains the same.
 * Users can either pass a fixed pixel distance between ticks or an array of desired tick values.
 *
 * @param {Function} scale - The D3 scale function.
 * @param {number[]|number} ticksValue - Desired tick values as an array or the pixel distance between ticks.
 * @returns {Object[]} Array of tick objects with value and offset.
 */
export function useComputeTicks(scale, ticksValue) {
  const range = scale.range();

  // Using useMemo to avoid unnecessary calculations. For example, if
  // the data changes, the scale does not necessarily change and therefore recalculating the
  // axes is unnecessary.
  return useMemo(() => {
    // We can pass an array of tick values we want to display
    // or the distance in px between the ticks.
    if (Array.isArray(ticksValue)) {
      return ticksValue.map((value) => ({
        value,
        offset: scale(value),
      }));
    }
    // width of the main group
    const height = Math.abs(range[1] - range[0]);
    const numberOfTicksTarget = Math.floor(height / ticksValue);

    return scale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      offset: scale(value),
    }));
  }, [scale, range, ticksValue]);
}
