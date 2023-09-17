import { setCookie, getCookie, deleteCookie } from "~/cookie"
import { name, setName } from "./components/Log";


export const GetUserName = async () =>{
    const token: string | undefined = getCookie("token")
    if (token != undefined){
        const res = await fetch(`http://176.53.163.97:8000//graphql?query={account{id,username}}&token=${token}`)
        if (res.ok){
            let result = await res.json()
            if ("errors" in result){
                deleteCookie("token")
            }
            const username = result["data"]["account"].username
            if (username != ""){
                setName(result["data"]["account"].username)
            }
        }
    }
}

export const LogoutUser = async () =>{
    deleteCookie("token")
    setName("Login")

}

