import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import WELCOME_MESSAGE from '../../constants/userPresentation';

/**
 * UserPresentation - A component to present a greeting message to the user.
 *
 * Fetches the user's first name from the DataContext and displays a greeting message along with a congratulatory note.
 * 
 */
function UserPresentation() {
  const dataState = useContext(DataContext);

  if (!dataState.data) {
    return null;
  }

  const { user } = dataState.data;

  return (
    <header className='user-presentation'>
      <h1 className='user-presentation__title'>
        Bonjour <span className='user-presentation__name-user'>{user.firstName}</span>
      </h1>
      <p className='user-presentation__message-incentive'>{WELCOME_MESSAGE.INCENTIVE}</p>
    </header>
  );
}

export default UserPresentation;
