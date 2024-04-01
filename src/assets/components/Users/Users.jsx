//  state--> data
// state--> loader
// useEffect
// fetch ---> state set-->set state 

import { useLoaderData } from "react-router-dom";

const Users = () => {
    
const users = useLoaderData();
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
        </div>
    );
};

export default Users;