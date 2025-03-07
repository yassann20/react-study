export default function Item(items) {
    
    return (
        <p>
            {items
                .filter(item => item.isVisible)
                .map(item => <li key={item.id}>{ item.name}</li>)
            }
        </p>
    );
}
