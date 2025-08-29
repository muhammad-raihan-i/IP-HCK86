import Mbutton from "./button"
export default function Card(props){
    const {imageUrl,cardTitle,cardText,onClick}=props
    return(
        <>
            <div className="card" style={{ width: "18rem" }}>
  <img src={imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{cardTitle}</h5>
    <p className="card-text">
      {cardText}
    </p>
    <Mbutton type="button" className="primary" onClick={onClick} text="Detail" />
  </div>
</div>

        </>
    )
}