
export default function Detail(props){
    const {imageUrl,id,name,address,available}=props
    return(
        <>
            <img src={imageUrl} />
            <h1>Details</h1>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>Available: {available}</p>
        </>
    )
}