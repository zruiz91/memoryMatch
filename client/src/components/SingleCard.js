import "./SingleCard.css";

function SingleCard({card}) {

    return (
        <div className="card" >
            <div>
                <img className="front" src={card.src} alt="card front" height="250" />
                <img className="back" src="/img/cover.png" alt="card back" height="250" />
            </div>
        </div>
    );
}

export default SingleCard;