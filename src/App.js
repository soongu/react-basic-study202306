import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (newUser) => {
    const addUserObject = {
      id: Math.random().toString(),
      name: newUser.username,
      age: +newUser.age
    };
    setUserList(prev => [...prev, addUserObject]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
