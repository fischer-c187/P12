import { useReducer } from 'react';
import { DataContext, DataDispatchContext } from '../../context/dataContext';
import dataReducer from '../../reducer/dataReducer/dataReducer';

/**
 * DataProvider component that sets up the data context and dispatch context for children components.
 * This component uses the `dataReducer` to manage its state.
 * It provides an easy way for children components to consume both state and dispatch function without prop drilling.
 * 
 * @function
 * @param {ReactNode} props.children - Child components to be wrapped by the data and dispatch context providers.
 * @returns {ReactElement} Returns the DataContext and DataDispatchContext providers wrapping the child components.
 */
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