import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home"
import Form from "./admin/ground/form"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Ground from "./admin/ground";
import GroundForm from "./admin/ground/form";
import Book from "./admin/Book";
import UserForm from "./admin/user/form";
import User from "./admin/user";
import Login from "./public/login";
import Register from "./public/register";

const queryClient= new QueryClient();
function App() {

  const privateRouter=[
    {path:"/ground",element:<Ground/>},
    {path:"/ground/add",element:<GroundForm/>},
    {path:"/ground/edit/:id",element:<GroundForm/>},
    {path:"/book",element:<Book/>},
    {path:"/user",element:<User/>},
    {path:"/user/add",element:<UserForm/>},

  ]

  const publicRoute=[
    {path:"",element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"*",element:<>unauthorized</>}
  ]

  // TODO check accessToken then return true or false
  const isLoggedIn=true;

  return (
   <>
   <QueryClientProvider client={queryClient}>
        <RouterProvider router={
          createBrowserRouter(
            isLoggedIn?privateRouter:publicRoute
          )
        }>

        </RouterProvider>
        </QueryClientProvider>
   </>
  )
}

export default App
