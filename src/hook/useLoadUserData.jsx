import { useContext, useEffect } from 'react';
import { DataDispatchContext } from '../context/dataContext';
import { fetchAllData } from '../services/data/api';
import { ActionTypes } from '../reducer/dataReducer/actionTypes';

/**
 * A custom hook that loads user data based on the provided userId.
 * This hook will initiate a data fetch and dispatch actions to handle 
 * the states of the fetch operation (start, success, error).
 *
 * @function
 * @param {number|string} userId - The ID of the user for which data should be loaded.
 * @returns {void}
 */
function useLoadUserData(userId) {
  const dispatch = useContext(DataDispatchContext);

  useEffect(() => {
    dispatch({ type: ActionTypes.FETCH_DATA_START });
    async function fetchData() {
      try {
        const data = await fetchAllData(userId);
        dispatch({ type: ActionTypes.FETCH_DATA_SUCCESS, payload: {data} });
      } catch (error) {
        dispatch({
          type: ActionTypes.FETCH_DATA_ERROR,
          payload: error.message,
        });
      }
    }

    fetchData();
  }, [userId, dispatch]);

}

export default useLoadUserData;
