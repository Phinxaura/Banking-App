import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withdraw } from '../features/bank/bankSlice';
import { RootState, AppDispatch } from '../app/store';

const WithdrawForm = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const dispatch = useDispatch<AppDispatch>();
  const balance = useSelector((state: RootState) => state.bank.balance);

  const handleWithdraw = () => {
    if (typeof amount === 'number' && amount > 0 && amount <= balance) {
      const rounded = parseFloat(amount.toFixed(2));
      dispatch(withdraw(rounded));
      setAmount('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') return setAmount('');
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && /^\d+(\.\d{0,2})?$/.test(val)) {
      setAmount(parsed);
    }
  };

  return (
    <div className="flex flex-col w-48">
      <input
        type="number"
        placeholder="Withdraw Amount"
        value={amount}
        onChange={handleChange}
        className="border border-red-400 focus:border-red-600 focus:ring-2 focus:ring-red-300 rounded-full px-4 py-2 mb-3 text-gray-700 placeholder-red-400 transition duration-200 outline-none"
        min={0}
        step="0.01"
        max={balance}
      />
      <button
        onClick={handleWithdraw}
        disabled={!(typeof amount === 'number' && amount > 0 && amount <= balance)}
        className="bg-red-600 hover:bg-red-700 active:bg-red-800 transition duration-200 text-white font-semibold py-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Withdraw
      </button>
    </div>
  );
};

export default WithdrawForm;
