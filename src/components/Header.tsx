import { createEffect, createSignal, onMount } from "solid-js"
import "./Header.css"
import { deleteCookie, getCookie } from "~/cookie";
import { Scripts } from "solid-start";
import { A } from "@solidjs/router";
import { name, setName } from "./Log";
import {GetUserName} from "~/utils";

export default function Header(){
    onMount(() => {
        GetUserName()
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
                {
                name() == "Login" || "" ? (
                    <A href="/login">
                    <h4 class="header_item_text">
                        {name()}
                    </h4>
                </A>
                ) : (
                    <A href="/user">
                    <h4 class="header_item_text">
                        {name()}
                    </h4>
                </A>
                )
                }
            </div>

            </div>
</>            
    

    )
    
}
