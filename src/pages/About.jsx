import reactsvg from "../assets/svg/react.svg";
import vue from "../assets/svg/vue.svg";
import django from "../assets/svg/django.svg";
import express from "../assets/svg/express.svg";
import flask from "../assets/svg/flask.svg";
import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/javascript.svg";
import laravel from "../assets/svg/laravel.svg";
import sass from "../assets/svg/sass.svg";
import typescript from "../assets/svg/typescript.svg";
import mysql from "../assets/svg/mysql.svg";
import { useEffect, useState } from "react";

const About = () => {
    const maxScreenSize = 600;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleSize);
        return () => removeEventListener("resize", handleSize)
    }, [])

    const isMobile = width <= maxScreenSize;


    return (
        <>
            <div className="about-wrapper">
                <h2>O meni</h2>
                <div className={!isMobile ? `about-separator` : 'mobile-separator'}>
                    <div className="svg-icons">
                        {!isMobile && svgIcons.map((s) => (
                            <div className="svg-icon" key={s.id}>
                                <img src={s.icon} alt="Icon" />
                            </div>
                        ))}
                    </div>
                    <div className="about-text-section">
                        <p>
                            Pozdrav! Ja sam Saša Ristić, full stack developer sa
                            akcentom na frontend-u, posebno u React-u, ali
                            takođe radim sa Vue, Next.js, čistim Javascript-om i
                            TypeScript-om.
                        </p>
                        <p>
                            Za backend koristim Laravel, Express, Django i
                            Flask. Imam iskustva sa MySQL i MSSQL bazama
                            podataka.
                        </p>
                        <p>
                            Radije razvijam funkcionalnosti i dizajniram sam,
                            izbegavajući gotove pakete radi bolje kontrole i
                            sigurnosti sadržaja na sajtovima koje kreiram. Uvek
                            sam motivisan za usavršavanje i proširivanje znanja
                            u web developmentu.
                        </p>
                    </div>
                    <div className="svg-wrapper-mobile">
                        <div className="svg-holder">
                            {isMobile && svgIcons.map((s) => (
                                <div className="svg-icons-mobile" key={s.id}><img src={s.icon} alt="icon" /></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

const svgIcons = [
    {
        id: 1,
        icon: html,
    },
    {
        id: 2,
        icon: css,
    },
    {
        id: 3,
        icon: javascript,
    },
    {
        id: 4,
        icon: typescript,
    },
    {
        id: 5,
        icon: reactsvg,
    },
    {
        id: 6,
        icon: sass,
    },
    {
        id: 7,
        icon: express,
    },
    {
        id: 8,
        icon: laravel,
    },
    {
        id: 9,
        icon: django,
    },
    {
        id: 10,
        icon: vue,
    },
    {
        id: 11,
        icon: mysql,
    },
    {
        id: 12,
        icon: flask,
    },
];
