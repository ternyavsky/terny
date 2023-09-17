import { A } from "@solidjs/router"
import "./Reg.css"
import { useNavigate } from "solid-start"
import { createEffect, createSignal } from "solid-js"


const CreateUser = async (username: string, password: string) => {
  const res = await fetch("https://ternyavsky.ru/reg",{
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  if (res.ok){
      let result = await res.json()
      console.log(result)
      alert("created")

  }

}

export default function Reg(){
    const [username, setUsername] = createSignal<string>("")
    const [password, setPassword] = createSignal<string>("")
    const [password2, setPassword2] = createSignal<string>("")
    const navigate = useNavigate();
    return(
       <>
       <div class="main_con">
        <h3 class="login_title">Registration</h3>
        <form action="" class="reg_form">
           <div class="login_container">

        <input type="text" placeholder="Username" value={username()} onChange={(e) => setUsername(e.currentTarget.value)} class="reg_text"/>
        <input type="password" placeholder="Password" value={password()} onChange={(e) => setPassword(e.currentTarget.value)} class="login_password"/>
        <input type="password" placeholder="Password again" value={password2()} onChange={(e) => setPassword2(e.currentTarget.value)} class="login_password" />
        <A href="/login" class="login_link"><p class="login_link_text">Login</p></A>
        <button type="submit" class="login_button" onClick={
          () => {
            if(password() != password2()){
              alert("password mismatch")
            } else{
            CreateUser(username(), password())
            navigate("/login")
            }
          }
        }>Registration</button>
    </div>
      </form>
      </div>

      </>
    )
}