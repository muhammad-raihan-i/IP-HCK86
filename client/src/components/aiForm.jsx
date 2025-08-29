import {useState,useEffect} from "react"
import swal from "sweetalert2"
import http from "../helpers/index.js"
export default function AiForm(){
    const [prompt,setPrompt]=useState("")
    async function fetchData(){
        try{
            let data=await http.post("/gemini",{prompt})
        }catch(error){
            swal.fire({
                title:"Error",
                text:"Error",
                timer:1000
            })
        }
    }
    function onChange(e){
        e.preventDefault()
        setPrompt(e.target.value)
    }
    return(
        <>
        <h2>AI recommendations</h2>
        <form onSubmit={fetchData}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Prompt
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={onChange}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
        </>
    )
}