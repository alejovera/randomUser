import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useUsuario } from '../context/userContext';
import './styles/UserDetails.css';

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
        return item.mail === paramString;
    })
    console.log(tryingFind);

        
    return (
        <div>
            <div className="buttonContainer">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button
                        className="userButton"
                        style={{backgroundColor: 'rgba(0, 122, 201, 1)',
                        }}
                        variant="contained"
                        startIcon={<ArrowBackIcon />}
                    >
                        See Users
                    </Button>
                </Link>
            </div>
        <div className="userContainer">
            
            <div className="userGrid">
                <div className="avatarContainer">
                    <Avatar className="userAvatar" style={{width: "150px", height: "150px"}} src={tryingFind.picture} />
                </div>
                <h1 className="userTitle">{tryingFind.name} {tryingFind.lastName}</h1>
                <p className="userInfo userInfo_user">{tryingFind.username}</p>
                <p className="userInfo userInfo_cell">{tryingFind.cell}</p>
                <p className="userInfo userInfo_mail">{tryingFind.mail}</p>
            </div>
        </div>
        </div>
    )
}

export default UserDetails
