import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import reactlogo from "../assets/react.svg"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link2Icon, LogOutIcon } from "lucide-react"




function Header() {

    const navigate = useNavigate()
    const user = true;

    return (

        <nav className="py-4 flex justify-between items-center">
            <Link>
                <img src="/vite.svg" alt="_blank" />
            </Link>
            <div>
                {!user ? (<Button onClick={() =>  navigate("/auth") }>Login</Button>) : (<DropdownMenu>
                    <DropdownMenuTrigger>
                    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>AS</AvatarFallback>
</Avatar>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Amit Singh</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link2Icon className="mx-2"></Link2Icon>  My Links</DropdownMenuItem>  
                        <DropdownMenuItem className="text-red-600">
                         <LogOutIcon className="mx-2"></LogOutIcon>  LogOut</DropdownMenuItem>                    
                    </DropdownMenuContent>
                </DropdownMenu>
                )
}
                 
                 
            </div >
            
        </nav >
    )
}
export default Header