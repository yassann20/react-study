function UserName({ name }) {
    return (
        <p>名前:{name}</p>
    );
}

function UserAge({ age }) {
    return (
        <p>年齢:{age}</p>
    );
}

function UserHobby({ hobby }) { 
    return (
        <p>趣味: {hobby}</p>
    );
}

export default function UserProfile(name, age, hobby) { 
    return (
        <>
            <UserName name={name} />
            <UserAge age={age} />
            <UserHobby hobby={hobby} />
        </>
    );
}