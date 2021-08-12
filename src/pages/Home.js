import React, {useEffect, useState} from 'react';
import Loader from '../components/Loader.js';
import ListOfUsers from '../components/ListOfUsers.js';
import '../App.css';
import { useUsuario } from '../context/userContext';

function Home() {

    const { usersData, loading } = useUsuario() 
    const userParsed = Object.values(usersData)

    // console.log(usersData);

    // const [usuariosDatita, setUsuariosDatita] = useState({})
    const [cargando, setCargando] = useState(true)

    // useEffect(() => {
    //     fetch('https://randomuser.me/api/?results=50&seed=abc')
    //         .then(response => response.json())
    //         .then(res => res.results)
    //         .then(initialResults => {
    //             setUsuariosDatita(initialResults)
    //             setCargando(false)
    //         })
    //         .catch(err => console.log(err.message))
        
    // },[]);

    // console.log(usersData.results);

    
    
    
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
