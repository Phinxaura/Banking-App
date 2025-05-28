import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';
import { AppDispatch } from '../app/store';
import {
  selectAllUsers,
  selectUsersLoading,
  selectUsersError,
} from '../features/users/userSelectors';

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectAllUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="mt-6 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6">
  <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Bank Users</h2>

  <button
    onClick={handleFetchUsers}
    className="w-full mb-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition duration-200 text-white font-semibold py-2 px-4 rounded-full shadow-md"
  >
    Fetch Bank Users
  </button>

  {loading && <p className="text-center text-gray-500">Loading users...</p>}
  {error && <p className="text-center text-red-500">Error: {error}</p>}

  <ul className="divide-y divide-gray-200">
    {users.map((user) => (
      <li
        key={user.id}
        className="flex items-center space-x-4 py-4 px-2 hover:bg-gray-50 transition duration-200 rounded-lg"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full font-bold text-sm uppercase">
          {user.name.charAt(0)}
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{user.name}</p>
         
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};

export default UserList;
