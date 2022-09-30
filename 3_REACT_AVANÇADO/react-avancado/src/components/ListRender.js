import { useState } from "react";

const ListRender = () => {
    const [list] = useState (["Ana", "Maria", "Julia", "Peter", "João"]);

    const[users, setUsers] = useState([
        {id: 1, name: "Dutra", age: 33},
        {id: 2, name: "Cleide", age: 36},
        {id: 3, name: "Peter", age: 2},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return ( 
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    );  
};

export default ListRender;