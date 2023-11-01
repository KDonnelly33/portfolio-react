export default function Portfolio({title, description, image, link, github}) {
    return (
        <li>
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <p>{description}</p>
            <a href={link} target = "_blank">Link</a>
            <a href={github} target = "_blank">Github</a>
        </li>


    )
}