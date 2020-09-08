import React from 'react';
import './App.css';
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import Header from "./Components/Header/Header";
import Circuit from "./Components/Circuit/Circuit";

function App() {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];


    return (
    <div className="wrapper">
        <Header />
        <LeftSidebar />
        <Circuit />
    </div>
  );
}

export default App;
