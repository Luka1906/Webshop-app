
const Card = (props) => {
    return (
        <div className={`bg-white shadow-card-shadow ${props.className}`}>{props.children}</div>
    )
}

export default Card