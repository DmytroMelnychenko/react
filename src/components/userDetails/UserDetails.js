
function UserDetails({user}) {
    return (
        <div>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.phone}</h2>
            <h2>{user.website}</h2>
            <h2>{user.email}</h2>


        </div>
    );
}

export {UserDetails};