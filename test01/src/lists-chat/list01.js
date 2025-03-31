const numbers = [1, 2, 3, 4, 5];

export default function Add() {
    const add = numbers.map(num => 
     num*2
    )
    return (
        <p>{add.join(", ")}</p>
    )
}