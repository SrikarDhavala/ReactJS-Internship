import './SingleCard.css'

function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleTurn = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div  className='card'>
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} className='front' alt='card front' />
                <img src='/img/cover.png' className='back' alt='card back' onClick={handleTurn} />
            </div>
        </div>
    );
}

export default SingleCard