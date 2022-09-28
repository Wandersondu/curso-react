import { useState } from "react";

const ListRender = () => {
    const [list] = useState (["Ana", "Maria", "Julia", "Peter", "João"]);

    const[users] = useState([
        {id: 1, name: "Dutra", age: 33},
        {id: 2, name: "Cleide", age: 36},
        {id: 3, name: "Peter", age: 2},
    ]);

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
        </div>
    );  
};

export default ListRender;