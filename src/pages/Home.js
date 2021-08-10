import React, {useEffect, useState} from 'react';
import ListOfUsers from '../components/ListOfUsers.js';
function Home() {

    const [usersData, setUsersData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(res => res.results)
            .then(initialResults => {
                setUsersData(initialResults)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
        
    },[]);

    // console.log(usersData.results);

    
    
    
    return (    
        <div>
            <h1>Users:</h1>
            {loading ? (
                <p>Cargando</p>
            ): (
                <ListOfUsers data={usersData} />
            )}
            
           
        </div>
    )
}

export default Home
