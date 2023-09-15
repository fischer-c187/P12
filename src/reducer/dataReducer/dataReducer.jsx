import { ActionTypes } from './actionTypes';

function dataReducer(data, action) {
  switch (action.type) {
  case ActionTypes.FETCH_DATA_START:
    return {
      ...data,
      isLoading: true,
      isError: false,
    };
  case ActionTypes.FETCH_DATA_SUCCESS:
    return {
      ...data,
      isLoading: false,
      data: action.payload.data,
      isError: false,
    };
  case ActionTypes.FETCH_DATA_ERROR:
    return {
      ...data,
      isLoading: false,
      isError: action.payload.message,
    };
  default:
    console.error(`Unknown action: ${action.type}`);
  }
}

export default dataReducer;