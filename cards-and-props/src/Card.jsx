
function Card(props) {

    return(
        <div className="card">
            <img className="card-img" src={props.img} alt=""></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.text}</p>
        </div>
    );
}

export default Card;