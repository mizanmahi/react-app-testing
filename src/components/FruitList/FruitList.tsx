import { useEffect, useState } from 'react';

const FruitList = ({ fruits }: { fruits: string[] }) => {
   return (
      <div>
         <p>Fruit List</p>
         <ul>
            {fruits.map((fruit, i) => (
               <li key={i}> {fruit}</li>
            ))}
         </ul>
      </div>
   );
};

export default FruitList;
