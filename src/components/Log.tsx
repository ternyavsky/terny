import { A, Navigate } from "@solidjs/router"
import "./Log.css"
import { createSignal } from "solid-js"
import { setCookie } from "~/cookie"
import { redirect, useNavigate } from "solid-start"




const [username, setUsername] = createSignal<string>("")
const [password, setPassword] = createSignal<string>("")


const PostLogin = async (username:string, password: string) =>{
  
  const res = await fetch(
    "http://localhost:8000/login",{
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      })
    }
  )
  if (res.ok){
    let result = await res.json()
    console.log(result)
    setCookie("token", result["token"])

    
  }
}


export default function Login(){
    const navigate = useNavigate()
    return(
       <>
       <div class="main_con">
        <h3 class="login_title">Login</h3>
        <form action="" class="login_form">
           <div class="login_container">
        <input type="text" id="username" onChange={ (e) => setUsername(e.currentTarget.value)}  value={username()} placeholder="Username" class="login_text" />
        <input type= "password" id="password" onChange={ (e) => setPassword(e.currentTarget.value)} value={password()} placeholder="Password" class="login_password"/>
        <A href="/registration" class="login_link"><p class="login_link_text">Registration</p></A>
        <button type="button" class="login_button" onclick={          
          () => {
            PostLogin(username(), password())
            setUsername("")
            setPassword("")
            navigate("/", {scroll: true})
          }
          }
          
          >Login</button>
    </div>
      </form>
      </div>

      </>
    )
}