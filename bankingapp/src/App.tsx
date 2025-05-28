// src/App.tsx
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import BalanceDisplay from './components/BalanceDisplay';
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 drop-shadow-md">
        Banking App
      </h1>

      <div className="flex gap-10 bg-white p-8 rounded-2xl shadow-xl">
        <DepositForm />
        <WithdrawForm />
      </div>

      <BalanceDisplay />
      <UserList />
    </div>
  );
}

export default App;
