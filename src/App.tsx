import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Ground from "./admin/ground";
import GroundForm from "./admin/ground/form";
import Book from "./admin/Book";
import UserForm from "./admin/user/form";
import User from "./admin/user";
import Login from "./public/login";
import Register from "./public/register";
import Index from "./admin";

const queryClient= new QueryClient();
function App() {

  const privateRouter=[
    {path:"/admin",element:<Index />,
      children:[
        {path:"/admin/ground",element:<Ground/>},
        {path:"/admin/ground/add",element:<GroundForm/>},
        {path:"/admin/ground/edit/:id",element:<GroundForm/>},
        {path:"/admin/book",element:<Book/>},
        {path:"/admin/user",element:<User/>},
        {path:"/admin/user/add",element:<UserForm/>},]
    }

  ]

  const publicRoute=[
    {path:"",element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"*",element:<>unauthorized</>}
  ]

  // TODO check accessToken then return true or false
  const isLoggedIn=false;

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
