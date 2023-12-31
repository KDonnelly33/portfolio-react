import Me from "../assets/images/profilepic.jpg";

export default function AboutMe() {
  return (
    <section>
      <h2 className="text-3xl header-text text-center my-4 ">About Me</h2>
      <div className="flex flex-col lg:flex-row ">
        <p className=" text-color text-xl pr-3 pl-6">
          Hello, I'm Kevin Donnelly, a former chef who has transitioned into the
          exciting world of web development. My culinary career instilled in me
          a strong work ethic, attention to detail, and the ability to thrive in
          high-pressure environments – qualities that I now apply to my work as
          a web developer. I attended a coding bootcamp to acquire the necessary
          skills, becoming proficient in all the core languages of web
          development. Today, I'm eager to create user-friendly, visually
          appealing websites and web applications, combining my culinary
          principles of artistry and precision with my coding expertise. I'm
          excited to collaborate with forward-thinking professionals and
          organizations that value creativity and continuous learning. If you're
          looking for a passionate and adaptable web developer, let's connect
          and build the digital future together, one line of code at a time.
        </p>
        <img
          className="h-80 w-50 card rounded-3xl m-auto lg:mr-4 shadow-xl"
          src={Me}
          alt="Kevin Donnelly selfie"
        />
      </div>
    </section>
  );
}
