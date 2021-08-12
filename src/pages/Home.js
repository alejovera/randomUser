import React from 'react';
import Loader from '../components/Loader.js';
import ListOfUsers from '../components/ListOfUsers.js';
import '../App.css';
import { useUsuario } from '../context/userContext';

function Home() {

    const { usersData, loading } = useUsuario() 
    const userParsed = Object.values(usersData)

    
    return (    
        <div>
            <h1 className="AppTitle">Users:</h1>
            {loading ? (
                <Loader />
            ): (
                <ListOfUsers data={userParsed} />
            )}
            
           
        </div>
    )
}

export default Home
