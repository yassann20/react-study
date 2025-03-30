const fruits = ["Apple", "Banana", "Cherry"];

export default function FruitList() {
    const fruititem = fruits.map(name => 
        <li>{name}</li>  
    );
    return (
        <ul>
            {fruititem}
        </ul>
    )
}