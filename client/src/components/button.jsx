export default function Mbutton(props){
    const {type,className,onClick,text}=props
    return(
        <>
            <button type={type} className={"btn btn-"+className} onClick={onClick}>
                {text}
            </button>
        </>
    )
}