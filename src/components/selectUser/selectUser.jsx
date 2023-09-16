import { useState } from 'react';
import useLoadUserData from '../../hook/useLoadUserData';

/**
 * A select component to choose a user. 
 * It triggers the data fetching for the chosen user on change.
 * 
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.className - Base CSS class for the component's elements.
 * @param {number} [props.defaultUserId=12] - The default selected user's ID.
 * @returns {JSX.Element} Returns the select component for choosing a user.
 */
function SelectUser({ className, defaultUserId=12 }) {
  const [id, setId] = useState(defaultUserId);

  const handleChange = (event) => {
    setId(event.target.value);
  };
  
  // Update data context
  useLoadUserData(id);

  return (
    <select className={`${className}__select`} onChange={handleChange} defaultValue={defaultUserId}>
      <option value='12'>Karl</option>
      <option value='18'>Cecilia</option>
    </select>
  );
}

export default SelectUser;