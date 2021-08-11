import React, {useState, useEffect} from 'react'

const UsuarioContext = React.createContext()

export function UsuarioProvider() {

    const [usersData, setUsersData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(res => res.results)
            .then(initialResults => {
                setUsersData(initialResults)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
        
    },[]);

    const value = {usersData, loading}
    console.log(value); 

    return <UsuarioContext.Provider value={value} />
}

export function useUsuario() {
    const context = React.useContext(UsuarioContext)
    console.log(context);
    return context;
}

