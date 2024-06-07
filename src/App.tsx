import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home"
import Index from "./ground"
import Form from "./ground/form"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient= new QueryClient();
function App() {

  return (
   <>
   <QueryClientProvider client={queryClient}>
        <RouterProvider router={
          createBrowserRouter([
          {path:"",element:<Home/>},
          {path:"/ground",element:<Index/>},
          {path:"/ground/add",element:<Form/>},
          {path:"/ground/edit/:id",element:<Form/>},

          ])
        }>

        </RouterProvider>
        </QueryClientProvider>
   </>
  )
}

export default App
