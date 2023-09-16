import { createContext } from 'react';

/**
 * The data context provides access to the application data for all child components.
 * 
 * @type {React.Context<null>}
 */
export const DataContext = createContext(null);

/**
 * The data dispatch context provides a dispatch function to update the application data for all child components.
 * 
 * @type {React.Context<null>}
 */
export const DataDispatchContext = createContext(null);
