export default function Item(items) {
    
    return (
        <ul>
            {items
                .filter(item => item.isVisible)
                .map(item => <li key={item.id}>{ item.name}</li>)
            }
        </ul>
    );
}
