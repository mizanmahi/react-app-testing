import './App.css';
import Counter from './components/Counter/Counter';
// import FormComponent from './components/Form/Form';
// import FormComponent from './components/Form/Form';
// import FruitList from './components/FruitList/FruitList';
// import PrimaryButton from './components/PrimaryButton';
import Users from './components/Users/User';
// import UserTable from './components/UsersTable/UsersTable';
// import UserEvent from './components/UserEvent/UserEvent';

// const fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];

function App() {
   return (
      <div>
         <h1 className='text-center text-blue-500 text-2xl my-5'>
            Testing React App
         </h1>
         {/* <PrimaryButton /> */}
         {/* <PrimaryButton actionType='Delete' /> */}
         <Users />
         {/* <FruitList fruits={fruits} /> */}
         {/* <UserTable  users={users} /> */}
         {/* <UserEvent /> */}
         {/* <FormComponent
            onSubmit={(data) => {
               console.log(data);
            }}
         /> */}
         <Counter />
      </div>
   );
}

export default App;
