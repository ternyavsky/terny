import { Router, Routes, Route } from "@solidjs/router"
import Index from "../pages/index"
import Login from "../pages/login"
import Registration from "../pages/registration"


export default function Root(){
  return (
      <Routes>
        <Route path="/" component={Index}/>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Routes>
  )
  }