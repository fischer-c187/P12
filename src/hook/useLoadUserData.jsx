import { useContext, useEffect } from 'react';
import { DataDispatchContext } from '../context/dataContext';
import { fetchAllData } from '../services/data/api';
import { ActionTypes } from '../reducer/dataReducer/actionTypes';

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
