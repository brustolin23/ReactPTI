import { useRef } from "react";
import { Link } from "react-router-dom";


export const Dashboard = () => {

    const countRef = useRef({counter: 0});
    return (
        <div>
        <p>Dashboard</p>
        <p>Contador: {countRef.current.counter}</p>
        <button onClick={() => countRef.current.counter++}>Count</button>
        <button onClick={() => console.log(countRef.current.counter)}>Log</button>
        <p>
            <Link to="/entrar" relative="path"> Login </Link>
        </p>
        </div>
    );
}
