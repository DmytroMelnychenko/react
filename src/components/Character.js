function Character(props) {
    console.log(props);
    let {name,id,status,special,gender,picture} = props;
    return (
        <div>

            <div>



            </div>

            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h3>{special}</h3>
            <h3>{gender}</h3>
            <img src={picture} alt=''/>
        </div>
    )

}
export default Character;