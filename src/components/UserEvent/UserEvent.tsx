import { useState } from 'react';

const UserEvent = () => {
   const [loveCount, setLoveCount] = useState(0);
   const [userInput, setUserInput] = useState('');

   return (
      <div>
         <div className='flex'>
            <h1>Go ahead and type something:</h1>
            <h2> {userInput}</h2>
         </div>
         <input type='text' onChange={(e) => setUserInput(e.target.value)} />

         <br />
         <br />

         <h3>Your girlfriend loves you {loveCount} times!</h3>
         <button onClick={() => setLoveCount((count) => ++count)}>
            Make her love you more!
         </button>
         <button onClick={() => setLoveCount(0)}>Reset</button>
      </div>
   );
};

export default UserEvent;
