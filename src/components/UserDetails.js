import React from 'react';
import { useParams } from 'react-router-dom';
import { useUsuario } from '../context/userContext'

function UserDetails() {

    let params = useParams()
    const { usersData } = useUsuario()
    
    const paramParsed = Object.values(params)

    const userParsed = Object.values(usersData)


    const usuarios = userParsed.map((item) => (
        {
            name: item.name.first,
            lastName: item.name.last,
            username: item.login.username,
            cell: item.cell,
            picture: item.picture.large,
            mail: item.email,
        }
    ))
        

    const tryingFind = usuarios.find(item => {
        JSON.stringify(item.mail);
        let paramString = paramParsed[0];
        return item.mail == paramString;
    })
    console.log(tryingFind);

        
    return (
        <div>
            <h1>{tryingFind.name} {tryingFind.lastName}</h1>
            <p>{tryingFind.username}</p>
            <p>{tryingFind.cell}</p>
            <p>{tryingFind.mail}</p>
        </div>
    )
}

export default UserDetails
