export function formatPerformanceData(data) {
  const { kind, data: performanceData } = data.data;
  const lookup = Object.fromEntries(
    performanceData.map((item) => [item.kind, item.value])
  );
  return Object.entries(kind).map(([key, value]) => ({
    kind: value,
    value: lookup[Number(key)],
  }));
}

export function formatActivityData(data) {
  return data.data.sessions.map((activity) => ({
    ...activity,
    day: new Date(activity.day),
  }));
}

export function formatAverageSessionsData(data) {
  return data.data.sessions;
}

export function formatUserInfosData(data) {
  const dataObject = data.data;

  return {
    ...dataObject.userInfos,
    score: dataObject.todayScore ?? dataObject.score,
    macronutriment: {
      calorie: {
        value: dataObject.keyData.calorieCount,
        unit: 'KCal',
      },
      protein: {
        value: dataObject.keyData.proteinCount,
        unit: 'g',
      },
      carbonhydrate: {
        value: dataObject.keyData.carbonhydrateCount,
        unit: 'g',
      },
      lipid: {
        value: dataObject.keyData.lipidCount,
        unit: 'g',
      }
    }
  };
}
