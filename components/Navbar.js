import { useState } from "react";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="nav">
            {" "}
            <div className="brand">ZikNext</div>{" "}
            <button
                className="hamburger"
                onClick={() => setOpen(!open)}
                aria-label="menu"
            >
                ☰
            </button>{" "}
            <ul className={open ? "nav-links open" : "nav-links"}>
                {" "}
                <li>
                    <a href="#about">About</a>
                </li>{" "}
                <li>
                    <a href="#projects">Projects</a>
                </li>{" "}
                <li>
                    <a href="#contact">Contact</a>
                </li>{" "}
            </ul>{" "}
        </nav>
    );
}
