
function Food() {

    const food1 = "Apple";
    const food2 = "Mango";

    return(
        <>
            <h2>Food items</h2>
            <ul>
                <li>Orange</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </>
    );
}

export default Food;