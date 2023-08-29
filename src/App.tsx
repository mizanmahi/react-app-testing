import './App.css';
import FormComponent from './components/Form/Form';
// import FormComponent from './components/Form/Form';
// import FruitList from './components/FruitList/FruitList';
// import PrimaryButton from './components/PrimaryButton';
// import Users from './components/Users/User';
// import UserTable from './components/UsersTable/UsersTable';
// import UserEvent from './components/UserEvent/UserEvent';

// const fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
export const users = [
   { id: 1, name: 'John', age: 32 },
   { id: 2, name: 'Jane', age: 25 },
   { id: 3, name: 'Bob', age: 43 },
];

function App() {
   return (
      <div>
         <h1>Hello World</h1>
         {/* <PrimaryButton /> */}
         {/* <PrimaryButton actionType='Delete' /> */}
         {/* <Users /> */}
         {/* <FruitList fruits={fruits} /> */}
         {/* <UserTable  users={users} /> */}
         {/* <UserEvent /> */}
         <FormComponent
            onSubmit={(data) => {
               console.log(data);
            }}
         />
      </div>
   );
}

export default App;
