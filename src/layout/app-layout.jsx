import Header from "@/components/header"
import { Outlet } from "react-router-dom"



function AppLayout() {
 

    return (
      <>
       <div>
        <main  className="min-h-screen container">
            <Header/>
            <Outlet/>
        </main>
        {/* <footer>

        </footer> */}
       </div>
      </>
    )
  }
  
  export default AppLayout