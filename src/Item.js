function Item(props) {
    return (
    <>
    <li>{props.marca}</li>
    <p>Meu carro é {props.marca}</p>
    </>    
);
}

export default Item;