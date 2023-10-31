export default function Portfolio({title, description, image, link, github}) {
    return (
        <li>
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <p>{description}</p>
            <a href={link}>Link</a>
            <a href={github}>Github</a>
        </li>


    )
}