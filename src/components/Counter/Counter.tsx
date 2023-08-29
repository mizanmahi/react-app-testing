import { useState } from 'react';

import {
   decrement,
   increment,
   incrementByAmount,
} from '../../redux/slices/counter.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

const Counter = () => {
   const counter = useAppSelector((state) => state.counter);
   const dispatch = useAppDispatch();

   const [customAmount, setCustomAmount] = useState(0);

   return (
      <div className='flex flex-col items-center space-y-4'>
         <h1 className='text-3xl font-bold'>Counter App</h1>
         <div className='flex items-center space-x-4'>
            <button
               className='px-4 py-2 bg-blue-500 text-white rounded'
               onClick={() => dispatch(increment())}
            >
               Increment
            </button>
            <span className='text-xl'>{counter.value}</span>
            <button
               className='px-4 py-2 bg-red-500 text-white rounded'
               onClick={() => dispatch(decrement())}
            >
               Decrement
            </button>
         </div>
         <div className='flex items-center space-x-4'>
            <input
               type='number'
               className='px-2 py-1 border rounded'
               placeholder='Amount'
               onChange={(e) => setCustomAmount(+e.target.value)}
            />
            <button
               className='px-4 py-2 bg-green-500 text-white rounded'
               onClick={() => dispatch(incrementByAmount(customAmount))}
            >
               Increment by Amount
            </button>
         </div>
      </div>
   );
};

export default Counter;
