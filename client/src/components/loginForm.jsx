import {useState,useEffect} from "react"
import {useNavigate,Navigate} from "react-router"
import http from "../helpers/index.js"
import swal from "sweetalert2"
export default function LoginForm(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    console.log(email,password)
    async function handleOnSubmit(event){
        event.preventDefault()
        console.log("submit")
        // let response=""
        try{
            let object={
                
                email,
                password
            }
            console.log(object)
            const response=await http.post("/login",object)
            const token=response.data.token
            console.log(response)
            console.log(response.data)
            console.log(token)
            localStorage.setItem("token", token);
            swal.fire({
                title:"Login Success",
                text:"Login Success",
                icon:"success"
            }).then(navigate("/"))
            // console.log("response.data.data.access_token",response.data.data.access_token)
        }catch(error){
            console.log(error)
            swal.fire({
                title:"Login Failed",
                text:"Error",
                icon:"error"
            })
        }
    }
    function handleOnChangeEmail(event){
        event.preventDefault()
        setEmail(event.target.value)
        console.log(event.target.value)
    }
    function handleOnChangePassword(event){
        event.preventDefault()
        setPassword(event.target.value)
        console.log(event.target.value)
    }
    return(
        <>
            <form onSubmit={handleOnSubmit}>
                {/* {"ini "+myMode+" tolong hapus lagi"} */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleOnChangeEmail}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={handleOnChangePassword}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    )
}