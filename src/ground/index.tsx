import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Index(){

    const navigate=useNavigate();

    const getApiCall=useQuery(
        {
            queryKey:["GROUD_GET_ALL_API"],
            queryFn(){
                return axios.get("http://localhost:8080/futsal/list")
            }
        }
    )

    return (<>
    this is ground list page
    <button onClick={()=>navigate("/ground/add")}>Add Ground</button>

    <table>
        <thead>
            <tr>
                <th>Ground Name</th>
                <th>Ground Image</th>
                <th>Action</th>
                </tr>
        </thead>
        
        <tbody>
        {getApiCall?.data?.data?.data?.map(i=>(
            <tr>
                <td>{i?.groundName}</td>
                <td>{i?.image}</td>
                <td>
                    <button onClick={()=>navigate("/ground/edit/"+i?.id)}>Edit</button> | 
                    <button>Delete</button>
                </td>
            </tr>
             ))}
        </tbody>
       
    </table>

    </>)
}

export default Index;