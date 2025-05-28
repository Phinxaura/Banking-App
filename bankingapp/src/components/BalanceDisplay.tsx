import { useSelector } from 'react-redux';
import { selectBalance } from '../features/bank/bankSelectors';

const BalanceDisplay = () => {
  const balance = useSelector(selectBalance);

  return (
    <div className="mt-6 max-w-xs mx-auto bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg p-6 flex items-center justify-center">
      <span className="text-lg font-medium tracking-wide mr-2">Total Balance:</span>
      <span className="text-3xl font-extrabold tracking-tight">
        ₹{balance.toFixed(2)}
      </span>
    </div>
  );
};

export default BalanceDisplay;
