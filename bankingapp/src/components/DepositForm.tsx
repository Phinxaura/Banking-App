import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit } from '../features/bank/bankSlice';
import { AppDispatch } from '../app/store';

const DepositForm = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleDeposit = () => {
    if (typeof amount === 'number' && amount > 0) {
      const rounded = parseFloat(amount.toFixed(2));
      dispatch(deposit(rounded));
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
    <div className="flex flex-col mr-6 w-48">
      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={handleChange}
        className="border border-green-400 focus:border-green-600 focus:ring-2 focus:ring-green-300 rounded-full px-4 py-2 mb-3 text-gray-700 placeholder-green-400 transition duration-200 outline-none"
        min={0}
        step="0.01"
      />
      <button
        onClick={handleDeposit}
        className="bg-green-600 hover:bg-green-700 active:bg-green-800 transition duration-200 text-white font-semibold py-2 rounded-full shadow-md"
        disabled={!(typeof amount === 'number' && amount > 0)}
      >
        Deposit
      </button>
    </div>
  );
};

export default DepositForm;
