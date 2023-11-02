export default function Footer() {
    return(
        <footer className="medgrey-background py-5 lg:fixed lg:bottom-0 w-full">
        <h5 className="text-3xl header-text underline text-center mb-4">Contact Me</h5>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around">
            <a className="footer-link text-xl m-1 px-2 rounded-lg " href="https://github.com/KDonnelly33" target="_blank">GitHub:Kdonnelly33</a>
            <a className="footer-link text-xl m-1 px-2 rounded-lg "  href="mailto:kevin.donnelly3@gmail.com">Email: Kevin.donnelly3@gmail.com</a>
            <a className="footer-link text-xl m-1 px-2 rounded-lg "  href="tel:3146192266">Phone: 314-619-2266</a>
            <a className="footer-link text-xl m-1 px-2 rounded-lg "  href="https://www.linkedin.com/in/kevin-donnelly-5a015a295/" target="_blank">Linkedin</a>
        </div>

</footer>
    )
};