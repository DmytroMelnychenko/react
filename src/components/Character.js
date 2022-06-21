function SimpsFamily(props) {
    console.log(props);
let {name,age,lorem,picture} = props;
    return (
        <div>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <p>{lorem}</p>
            <img src={picture} alt=''/>
       </div>
    )
    
}
export default SimpsFamily ;