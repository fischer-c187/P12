import { useMemo } from 'react';

export function useComputeTicks(scale, ticksValue) {
  const range = scale.range();
  
  // utilisation de useMemo pour eviter des calcul inutile. Par exemple si
  // les data changent le scale ne change pas forcement et donc recalculer les
  // axes est inutile
  return useMemo(() => {
    // on peut passer un tableau de valeur de ticks que l'on souhaite afficher
    // ou alors la distance en px entre les ticks
    if (Array.isArray(ticksValue)) {
      return ticksValue.map((value) => ({
        value,
        offset: scale(value),
      }));
    }
    // largeur du groupe principal
    const height = Math.abs(range[1] - range[0]);
    const numberOfTicksTarget = Math.floor(height / ticksValue);

    return scale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      offset: scale(value),
    }));
  }, [scale, range, ticksValue]);
}