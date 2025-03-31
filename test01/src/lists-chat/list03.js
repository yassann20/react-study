const numbers = [1, 2, 3, 4, 5];

export default function Console() { 
    numbers.forEach((num) => {
        console.log(num);
    });

    return (<p>コンソールを確認してください</p>);
}