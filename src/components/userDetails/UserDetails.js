function UserDetails({user}) {
    return (
        <div className={'UserDetails'}>
            <h2>ID: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Phone: {user.phone}</h2>
            <h2>Website: {user.website}</h2>
            <h2>Email: {user.email}</h2>


        </div>
    );
}

export {UserDetails};
