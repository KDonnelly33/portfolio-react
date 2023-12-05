export default function Portfolio({ title, description, image, link, github }) {
  return (
    <li className="flex flex-col justify-center items-center card bg-white p-4 m-4 shadow-lg lg:flex-row ">
      <h4 className="text-xl header-text text-center pb-4 lg:w-2/12">{title}</h4>
      <img
        className="smallImg lg:mx-5 shadow-xl pic-border rounded-xl mb-4 lg:mb-0"
        src={image}
        alt={title}
      />
      <div className="flex flex-col item-center justify-center lg: w-7/12">
        <p className=" text-color">{description}</p>
        <div className="flex justify-around ">
          <a
            className="footer-link text-xl m-1 px-2 h-8 w-40 my-5 text-center rounded-lg shadow-xl hover:underline"
            href={link}
            target="_blank"
          >
            Visit Site
          </a>
          <a
            className="footer-link text-xl m-1 px-2 h-8 w-40 my-5 text-center rounded-lg shadow-xl hover:underline"
            href={github}
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </li>
  );
}
