const fruits = ["Apple", "Banana", "Orange", "Grapes"];

export default function FruitList() { 
    const list = fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li> 
    ));
    return (
        <ul>
            {list}
        </ul>
    );
}
