export const User = (props) => {
    return (
        <div>
            {props.age>10  ? <h1> {props.name} {props.age} </h1> : null}
        </div>
    )
}