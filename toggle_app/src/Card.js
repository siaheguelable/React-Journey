function Card(props) {
    return (
        <div className="card" >
            <h1>This card's value is {props.num}</h1>
            <p>This card is: {props.num > 50 ? "High" : "Low"}</p>
        </div>
    );
};

export default Card;
// This is a simple Card component that takes in props for color, title, and content.