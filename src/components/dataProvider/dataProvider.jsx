import { useReducer } from 'react';
import { DataContext, DataDispatchContext } from '../../context/dataContext';
import dataReducer from '../../reducer/dataReducer/dataReducer';

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    isError: false,
    isLoading: true,
  });

  return (
    <DataContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}

export default DataProvider;