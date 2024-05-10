import { Link } from "react-router-dom";


export const Dashboard = () => {
    return (
        <div>
        <p>Dashboard</p>
        <p>
            <Link to="/entrar" relative="path"> Login </Link>
        </p>
        </div>
    );
}
