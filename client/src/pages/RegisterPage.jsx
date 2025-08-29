import RegisterForm from "../components/registerForm.jsx"
export default function RegisterPage(){
    return(
        <>
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h1>Register</h1>
    {/* 'no-gutters' removes default column padding */}
    <div className="col-md-6 mygold m-2 p-2">
        
      <RegisterForm/>
    </div>
</div>

        
        </>
    )
}