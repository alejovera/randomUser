import React, {useState, useEffect} from 'react'
import User from './User';
import Loader from '../components/Loader';
import './styles/ListOfUsers.css'

function ListOfUsers({data}) {

    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)

    console.log(data);

    useEffect(() => {
        const usuarios = data.map((item) => (
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
        // console.log(usuarios);

    }, [data])
    
    // console.log(users);

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
