import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ground(){

    const navigate=useNavigate();

    const getApiCall=useQuery(
        {
            queryKey:["GROUD_GET_ALL_API"],
            queryFn(){
                return axios.get("http://localhost:8080/futsal/list")
            }
        }
    )

    const deleteApi=useMutation({
        mutationKey:["DELETE_GROUND_API"],
        mutationFn(id:number){
            return axios.delete("http://localhost:8080/futsal/delete/"+id);
        },onSuccess(){
            getApiCall.refetch();
        }
    })

    return (<>
    this is ground list page
    <button onClick={()=>navigate("/admin/ground/add")}>Add Ground</button>

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
                    <button onClick={()=>navigate("/admin/ground/edit/"+i?.id)}>Edit</button> | 
                    <button onClick={()=>deleteApi.mutate(i?.id)}>Delete</button>
                </td>
            </tr>
             ))}
        </tbody>
       
    </table>

    </>)
}

export default Ground;