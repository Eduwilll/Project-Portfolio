import * as React from "react";
import AnimatedImageGrid from "./AnimatedImageTooltip";


const icons = [
    { src: "/images/icons/c/c-plain.svg", alt: "C", tooltip: "C" },
    { src: "/images/icons/cplusplus/cplusplus-plain.svg", alt: "C++", tooltip: "C++" },
    { src: "/images/icons/html5/html5-plain.svg", alt: "HTML5", tooltip: "HTML5" },
    { src: "/images/icons/css3/css3-plain.svg", alt: "css3", tooltip: "css3" },
    { src: "/images/icons/java/java-plain.svg", alt: "Java", tooltip: "Java" },
    { src: "/images/icons/python/python-plain.svg", alt: "Python", tooltip: "Python" },
    { src: "/images/icons/flask/flask-original.svg", alt: "flask", tooltip: "flask" },
    { src: "/images/icons/javascript/javascript-plain.svg", alt: "JavaScript", tooltip: "JavaScript" },
    { src: "/images/icons/nodejs/nodejs-plain.svg", alt: "Node.js", tooltip: "Node JS" },
    { src: "/images/icons/typescript/typescript-plain.svg", alt: "TypeScript", tooltip: "TypeScript" },
    { src: "/images/icons/nextjs/nextjs-original.svg", alt: "Next.js", tooltip: "Next JS" },
    { src: "/images/icons/php/php-plain.svg", alt: "PHP", tooltip: "PHP" },
    { src: "/images/icons/figma/figma-original.svg", alt: "figma", tooltip: "figma" },
    { src: "/images/icons/git/git-plain.svg", alt: "Git", tooltip: "Git" },
    { src: "/images/icons/github/github-original.svg", alt: "github", tooltip: "github" },
    { src: "/images/icons/docker/docker-plain.svg", alt: "docker", tooltip: "docker" },
    { src: "/images/icons/mysql/mysql-plain-wordmark.svg", alt: "MySql", tooltip: "MySql" },
    { src: "/images/icons/mongodb/mongodb-plain-wordmark.svg", alt: "mongodb", tooltip: "MongoDB" },
    { src: "/images/icons/linux/linux-original.svg", alt: "Linux", tooltip: "Linux" },
    { src: "/images/icons/windows8/windows8-original.svg", alt: "Windows", tooltip: "Windows" },
    { src: "/images/icons/android/android-plain-wordmark.svg", alt: "Android", tooltip: "Android" },
    { src: "/images/icons/firebase/firebase-plain-wordmark.svg", alt: "firebase", tooltip: "firebase" },
    { src: "/images/icons/salesforce/salesforce-plain.svg", alt: "salesforce", tooltip: "Salesforce" },
  ];

const Devicon = () => {
    return (
        <AnimatedImageGrid icons={icons} />
    )
};

export default Devicon;