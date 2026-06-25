
import { useAuth } from "../context/AuthContext";

function Dashboard(){
    const user = useAuth();

    console.log(user);
    return (
      <div style={{fontSize: '25px'}}>
        <h1>Welcome</h1>
        <p> Email : <b> {user?.user?.email} </b> </p>
        <p> role: : <b> {user?.user?.role} </b> </p>
      </div>
    )
}

export default Dashboard;