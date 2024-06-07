import { useNavigate } from "react-router-dom";

function Home(){

    const navigate= useNavigate()

    return (<>
    this is home page

    <button onClick={()=>navigate("/ground")}>Display list of ground</button>
    </>)
}

export default Home;