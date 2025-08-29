import LoginForm from "../components/loginForm.jsx"
import {Navigate,useNavigate} from "react-router"
export default function LoginPage(){
    return(
        <>
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h1>Kontrakin</h1>
    {/* 'no-gutters' removes default column padding */}
    <div className="col-md-6 mygold m-2 p-2">
        
      <LoginForm/>

    </div>
</div>

        
        </>
    )
}