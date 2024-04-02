import { Link } from "react-router-dom";

 

const User = ({user}) => {
    const {id, name, email} = user;
    const userStyle ={
        border: '2px solid red',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h2>{email}</h2>
             <Link to={`/user/${id}`}>Show Details</Link>
             <Link to={`/user/${id}`}>
            <button>click me</button>
             </Link>
        </div>
    );
};

export default User;