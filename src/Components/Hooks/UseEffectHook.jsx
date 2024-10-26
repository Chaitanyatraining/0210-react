import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        // mounting
        // similar to componentDidMount
        getUserData()
    }, [])

    const getUserData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUserData(data)
    }

    return (
        <div>
            <h2>UseEffectHook</h2>
            <table>
                <thead>
                    <td>sno</td>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Email</td>
                </thead>
                {
                    userData && userData.length > 0 && userData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default UseEffectHook