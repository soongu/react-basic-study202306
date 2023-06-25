import React, { useState, Fragment } from 'react';
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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
};

export default App;
