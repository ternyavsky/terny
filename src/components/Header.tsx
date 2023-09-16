import { createEffect, createSignal, onMount } from "solid-js"
import "./Header.css"
import { deleteCookie, getCookie } from "~/cookie";
import { Scripts } from "solid-start";
import { A } from "@solidjs/router";

export default function Header(){
    const [username, setUsername] = createSignal<string>("Login")
    onMount( async () => {
        const token: string | undefined = getCookie("token")
        if (token != undefined){
            const res = await fetch(`http://localhost:8000/graphql?query={account{id,username}}&token=${token}`)
            if (res.ok){
                let result = await res.json()
                if ("errors" in result){
                    deleteCookie("token")
                }
                setUsername(result["data"]["account"].username)
            }
        }
        

        
    })
    
    return(
        <>
        <div class="header_container">
            <div class="header_item">
            <a href="#work">
                <h4 class="header_item_text">
                    Work
                </h4>
                </a>
            </div>
            <div class="header_item">
            <a href="#about">
                <h4 class="header_item_text">
                    About
                </h4>
                </a>
            </div>
            <div class="header_item">
            <a href="#blog">
                <h4 class="header_item_text">
                    Blog
                </h4>
                </a>
            </div>
            <div class="header_item">
                <a href="#contact">
                <h4 class="header_item_text">
                    Contact
                </h4>
                </a>
            </div>
            <div class="header_item">
                <A href="/login">
                    <h4 class="header_item_text">
                        {username()}
                    </h4>
                
                       

              
                </A>
            </div>

            </div>
</>            
    

    )
    
}
