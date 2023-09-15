import { A } from "@solidjs/router"
import "./Reg.css"


export default function Login(){
    return(
       <>
       <div class="main_con">
        <h3 class="login_title">Registration</h3>
        <form action="" class="reg_form">
           <div class="login_container">

        <input type="text" placeholder="Username"class="reg_text"/>
        <input type="password" placeholder="Password" class="login_password"/>
        <input type="password" placeholder="Password again" class="login_password" />
        <A href="/login" class="login_link"><p class="login_link_text">Login</p></A>
        <button type="submit" class="login_button">Registration</button>
    </div>
      </form>
      </div>

      </>
    )
}