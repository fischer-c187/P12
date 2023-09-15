import { useState } from 'react';
import useLoadUserData from '../../hook/useLoadUserData';

function SelectUser({ className }) {
  const [id, setId] = useState(12);

  const handleChange = (event) => {
    setId(event.target.value);
  };
  
  useLoadUserData(id);

  return (
    <select className={`${className}__select`} onChange={handleChange} defaultValue={12}>
      <option value='12'>Karl</option>
      <option value='18'>Cecilia</option>
    </select>
  );
}

export default SelectUser;