// import React from 'react';
// import axios from 'axios';

// function CreateUser() {
//     let [user, setUser] = React.useState({ firstName: "", lastName: "" });

//     function handleSubmit() {
//         axios.post('http://localhost:9000/users/create', user)
//             .then(function (response) {
//                 console.log(response.data);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });


//console.log(user);
//request to localhost:9000/users/create
//to make a request on our api server to save user
//     }
//     return (
//         <div>
//             <input type="text" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
//             <input type="text" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
//             <button onClick={handleSubmit}>Save user</button>
//         </div>
//     )
// }

// export default CreateUser;




// create user for facebook  suggestion:-
import { faker } from '@faker-js/faker';

export default function CreateUser() {
    const avatar = "http://picsum.photos/200"
    const fullName = faker.person.fullName()
    const mutualFriend = faker.airline.flightNumber({length:{min:1,max:2}})
    return {
        avatar,
        fullName,
        mutualFriend
    }
}

export function getUsers(limit) {
    const users = [];
    for (let i = 0; i < limit; i++) {
        users.push(CreateUser())
    }
    return users;
}
