import { createEffect, createSignal } from "solid-js"
import "./Header.css"
import { Scripts } from "solid-start";
import { Script } from "vm";
import { A } from "@solidjs/router";

export default function Header(){
    const [sum, setSum] = createSignal(0);
    console.log(sum())
    
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
                    Login
                </h4>
                </A>
            </div>

            </div>
</>            
    

    )
    
}
