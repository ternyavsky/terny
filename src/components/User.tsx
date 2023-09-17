import { A } from "@solidjs/router"
import "./User.css"
import { useNavigate } from "solid-start"
import { GetUserName, LogoutUser } from "~/utils";
import { name, setName } from "./Log";
import { Component, onMount } from "solid-js";


export default function User(){
    const navigate = useNavigate();
    onMount( () => {
        GetUserName()
    })
    return(
        <>
        <h3 class="login_title" style={"margin-top: 50px"}>Hello, {name()}</h3>
    
        <button type="button" class="logout_button" onClick={
            () => {
                LogoutUser()
                navigate("/")
            }
        }>Logout</button>
        <button type="button" class="logout_button" onClick={
            () => {
                navigate("/")
            }
        }>Home</button>
       </>
    )
}