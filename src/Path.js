

export default function Path(props){

    function handleMouseClick(){
        console.log("test")
    }

    return(
        <div className="path-card" onClick={handleMouseClick}>
            <h4>{props.title}</h4>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
        </div>
        
    )
}