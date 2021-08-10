import React, {useState, useEffect} from 'react'
import User from './User';

function ListOfUsers({data}) {

    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const usuarios = data.map((item) => (
            {
                name: item.name.first,
                lastName: item.name.last,
                city: item.location.city,
                country: item.location.country,
                picture: item.picture.thumbnail,
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
                <p>Cargando...</p>
            ) : (
                <User data={users} />
            )
            }
            
        </div>
    )
}

export default ListOfUsers
