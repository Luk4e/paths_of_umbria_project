import home_img from "../img/homeimg.jpg"


export default function Home(){
    return(
        <div className="div--home">
            <img src={home_img}  className="img--home"/>
        </div>
    )
}