import React from 'react'
import axios from 'axios'

export default function ListUsers() {
    let [usersList, setUsersList] = React.useState([]);

    function refreshList() {
        axios.get("http://localhost:9000/users").then((response) => {
            setUsersList(response.data);
        })
    }
    return (
        <div>
            <button onClick={refreshList}>Refresh List</button>
            <ul>
                {
                    usersList.map((user) => <li>{user.firstName} {user.lastName}</li>)
                }
            </ul>
        </div>
    )
}