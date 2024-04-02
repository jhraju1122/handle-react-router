import { useLoaderData } from "react-router-dom";

 

const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h3>Details about user: {name}</h3>
        </div>
    );
};

export default UserDetails;