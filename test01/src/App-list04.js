const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Mike", age: 35 },
];

export default function UserList() {
    const list = users.map(user => (
        <li key={user.id}>名前:{user.name}年齢:{user.age}</li>
    ));
    return (
        <ul>{list}</ul>
    );
}