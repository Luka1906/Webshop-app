
const Card = (props) => {
    return (
        <div className="bg-gray-100  rounded-md p-6 shadow-card-shadow">{props.children}</div>
    )
}

export default Card