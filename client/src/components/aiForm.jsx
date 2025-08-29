export default function AiForm(){
    
    return(
        <>
        <h2>AI recommendations</h2>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Prompt
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
        </>
    )
}