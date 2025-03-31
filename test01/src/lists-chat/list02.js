const numbers = [1, 2, 3, 4, 5];

export default function Even() {
    const even = numbers.filter((number) => number % 2 == 0);
    return (
        <p>{even.join(", ")}</p>
    );
}