import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function GroundForm(){

    
    const{id}=useParams();

    console.log(id);

    const {data:getById}=useQuery({
        queryKey:["GROUND_GET_BY_I"],
        queryFn(){
            return axios.get("http://localhost:8080/futsal/getById/" + id)
        },
        enabled:!!id,
        staleTime:0,
        
    })

    console.log(getById?.data)

    const {register,handleSubmit}=useForm({
        values:id?{...getById?.data,groundImage:getById?.data.image}:{}
    });

    const navigate=useNavigate();

    const apiCall=useMutation({
        mutationKey:["GROUND_SAVE_API"],
        mutationFn(requestBody:any){
            if(requestBody?.id){
                return axios.put("http://localhost:8080/futsal/update",requestBody)
            }
            return axios.post("http://localhost:8080/futsal/save",requestBody)
        },onSuccess(){
            navigate("/ground")
        }
    })


    const submit=(values:any)=>{
        apiCall.mutate(values,{
            onSuccess(res){
               alert(res?.data?.message)
            }
        })
    }

    return (<>
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <label>Ground Name</label>
                            <input type="text" {...register("groundName")} /> 
                        </div>
                        <div>
                            <label>Ground Image</label>
                            <input type="text" {...register("groundImage")}/>
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
    </>)
}
export default GroundForm;