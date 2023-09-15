import { A } from "@solidjs/router"
import "./Log.css"

export default function Login(){
    return(
       <>
       <div class="main_con">
        <h3 class="login_title">Login</h3>
        <form action="" class="login_form">
           <div class="login_container">

        <input type="text" placeholder="Username"class="login_text"/>
        <input type= "password" placeholder="Password" class="login_password"/>
        <A href="/registration" class="login_link"><p class="login_link_text">Registration</p></A>
        <button type="submit" class="login_button">Login</button>
    </div>
      </form>
      </div>

      </>
    )
}