const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" }
];

export default function FruitList() {
    return (
        <ul>
            {fruits.map(fruit => 
                <li key={fruit.id}>{fruit.name}</li>
            )}
        </ul>
    )
}