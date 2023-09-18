/**
 * @typedef {Object} Performance
 * @property {string} kind - Category name.
 * @property {number} value - Value corresponding to the category.
 */

/**
 * Transforms raw data into an array of formatted data.
 * Example of formatted data:
 * [
 *  {kind: 'category', value: 50},
 *  ...
 * ]
 * @param {Object} data - Raw data.
 * @returns {Performance[]} - An array containing data for each category.
 */
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

/**
 * @typedef {Object} Activity
 * @property {Date} day - Date of the measurement.
 * @property {number} kilogram - Weight measurement for the day in kilograms.
 * @property {number} calories - Calories burned on that day.
 */

/**
 * Transforms raw data into an array of formatted data.
 * Example of formatted data:
 * [
 *  { day: "2020-07-01T00:00:00.000Z", kilogram: 80, calories: 240 },
 *  ...
 * ]
 * @param {Object} data - Raw data.
 * @returns {Activity[]} - Array containing measurements of calories burned and weight for multiple days.
 */
export function formatActivityData(data) {
  return data.data.sessions.map((activity) => ({
    ...activity,
    day: new Date(activity.day),
  }));
}

/**
 * @typedef {Object} AverageSessions
 * @property {number} day - Day of the week (e.g., 1 for Monday, 2 for Tuesday, etc.).
 * @property {number} sessionLength - Duration of the session in minutes (or the appropriate unit).
 */

/**
 * Transforms raw data into an array of formatted data.
 * Example of formatted data:
 * [
 *  { day: 1, sessionLength: 72 },
 *  ...
 * ]
 * @param {Object} data - Raw data.
 * @returns {AverageSessions[]} - Array containing session durations for each day of the week.
 */
export function formatAverageSessionsData(data) {
  return data.data.sessions;
}

/**
 * @typedef {Object} UserInfos
 * @property {string} firstName - User's first name.
 * @property {string} lastName - User's last name.
 * @property {number} age - User's age.
 * @property {number} score - Completion percentage of the day's objective.
 * @property {Object} macronutriment - Contains information about calorie, protein, lipid, and carbohydrate intake for the day.
 * @property {Object} macronutriment.calorie - Calories consumed.
 * @property {number} macronutriment.calorie.value - Calorie count.
 * @property {string} macronutriment.calorie.unit - Unit for calorie count (e.g., 'KCal').
 * @property {Object} macronutriment.protein - Protein consumed.
 * @property {number} macronutriment.protein.value - Protein count.
 * @property {string} macronutriment.protein.unit - Unit for protein count (e.g., 'g').
 * @property {Object} macronutriment.lipid - Lipids consumed.
 * @property {number} macronutriment.lipid.value - Lipid count.
 * @property {string} macronutriment.lipid.unit - Unit for lipid count (e.g., 'g').
 * @property {Object} macronutriment.carbonhydrate - Carbohydrates consumed.
 * @property {number} macronutriment.carbonhydrate.value - Carbohydrate count.
 * @property {string} macronutriment.carbonhydrate.unit - Unit for carbohydrate count (e.g., 'g').
 */

/**
 * Transforms raw data into a formatted user information object.
 * Example of formatted data:
 * {
 *  age: 31,
 *  firstName: "Karl",
 *  lastName: "Dovineau",
 *  macronutriment: {
 *    calorie: { value: 300, unit: 'KCal' },
 *    protein: { value: 50, unit: 'g' },
 *    lipid: { value: 20, unit: 'g' },
 *    carbonhydrate: { value: 100, unit: 'g' }
 *  }
 * }
 * @param {Object} data - Raw data.
 * @returns {UserInfos} - Contains all information for the user.
 */
export function formatUserInfosData(data) {
  const dataObject = data.data;

  return {
    ...dataObject.userInfos,
    score: dataObject.todayScore ?? dataObject.score,
    macronutrients: {
      calorie: dataObject.keyData.calorieCount,
      protein: dataObject.keyData.proteinCount,
      carbohydrate: dataObject.keyData.carbohydrateCount,
      lipid: dataObject.keyData.lipidCount
    },
  };
} 
