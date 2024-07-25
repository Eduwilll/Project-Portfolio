import * as React from "react";
import AnimatedImageGrid from "./AnimatedImageTooltip";


const icons = [
    { src: "/images/icons/c/c-plain.svg", alt: "C", tooltip: "C" },
    { src: "/images/icons/cplusplus/cplusplus-plain.svg", alt: "C++", tooltip: "C++" },
    { src: "/images/icons/git/git-plain.svg", alt: "Git", tooltip: "Git" },
    { src: "/images/icons/html5/html5-plain.svg", alt: "HTML5", tooltip: "HTML5" },
    { src: "/images/icons/java/java-plain.svg", alt: "Java", tooltip: "Java" },
    { src: "/images/icons/python/python-plain.svg", alt: "Python", tooltip: "Python" },
    { src: "/images/icons/javascript/javascript-plain.svg", alt: "JavaScript", tooltip: "JavaScript" },
    { src: "/images/icons/nodejs/nodejs-plain.svg", alt: "Node.js", tooltip: "Node JS" },
    { src: "/images/icons/nextjs/nextjs-original.svg", alt: "Next.js", tooltip: "Next JS" },
    { src: "/images/icons/php/php-plain.svg", alt: "PHP", tooltip: "PHP" },
    { src: "/images/icons/typescript/typescript-plain.svg", alt: "TypeScript", tooltip: "TypeScript" },
    { src: "/images/icons/linux/linux-original.svg", alt: "Linux", tooltip: "Linux" },
    { src: "/images/icons/windows8/windows8-original.svg", alt: "Windows", tooltip: "Windows" },
  ];

const Devicon = () => {
    return (
        <AnimatedImageGrid icons={icons} />
    )
};

export default Devicon;