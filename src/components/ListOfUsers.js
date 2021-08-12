import React, {useState, useEffect} from 'react'
import User from './User';
import Loader from '../components/Loader';
import { useUsuario } from '../context/userContext';
import './styles/ListOfUsers.css'

function ListOfUsers({data}) {

    const { usersData } = useUsuario()

    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)

    const userParsed = Object.values(usersData)

    // if (Object.keys(usersData) > 2) {
    //     setLoading(false)
    // } else {
    //     setLoading(true)
    //     console.log('Object keys < 2');
    // }

    // Puedo usar Object values



    useEffect(() => {

        const usuarios = userParsed.map((item) => (
            {
                name: item.name.first,
                lastName: item.name.last,
                city: item.location.city,
                country: item.location.country,
                picture: item.picture.large,
                mail: item.email,
            }
        ))
        setUsers(usuarios)
        setLoading(false)
    }, [data])
    

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <User data={users} />
            )
            }
            
        </div>
    )
}

export default ListOfUsers
