import { useRef, useEffect, useState } from "react";
export default function ProjectCard({ title, desc }) {
    const ref = useRef();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            className={"card " + (visible ? "fade-in" : "hidden")}
            tabIndex={0}
        >
            {" "}
            <h3>{title}</h3> <p>{desc}</p>{" "}
        </div>
    );
}
