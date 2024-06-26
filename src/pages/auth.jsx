import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from "react-router-dom"


function Auth(){
  const searchParam= useSearchParams()
    return(
    <>
      <div className="mt-36 flex flex-col items-center gap-10">  
          <h1 className="text-5xl font-extrabold">{searchParam.get("createNew") ? "Hold up! Let's login first..": "Login / SignUp"}</h1>
          <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signup">Sign-Up</TabsTrigger>
  </TabsList>
  <TabsContent value="login">Make changes to your account here.</TabsContent>
  <TabsContent value="signup">Change your password here.</TabsContent>
</Tabs>

      </div>
    </>

    )
}

export default Auth