import React, {useState, useEffect} from 'react'

const UsuarioContext = React.createContext()

export function UsuarioProvider({children}) {

    const [usersData, setUsersData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50&seed=abc')
            .then(response => response.json())
            .then(res => res.results)
            .then(initialResults => {
                setUsersData(initialResults)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
        
    },[]);

    const value = {usersData}
    // console.log(value); 

    return <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>
}

export function useUsuario() {
    const context = React.useContext(UsuarioContext)
    // console.log(context);
    if (Object.keys(context) > 1) {
        return context
    } else if (Object.keys(context) === 0) {
        console.log('Object keys === 0');
    }
    return context
}

