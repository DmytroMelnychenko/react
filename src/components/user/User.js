
function User({item, userButton}) {
    return (
        <div>
            <h2>{item.id}</h2>
            <h3>{item.name}</h3>
            <button onClick={() => userButton(item)}>User Delails</button>

        </div>
    );
}

export {User};