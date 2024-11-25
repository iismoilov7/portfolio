import { i18 } from "@src/hooks/languages";
import React, { useEffect, useState } from "react";

interface MeProps {}

const description = i18.t("about.me.description", { returnObjects: true }) as string[];

const images = [
    "assets/img/about/me2.jpg",
    "assets/img/about/me3.jpg"
];

const Me: React.FC<MeProps> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Убираем класс fade перед сменой изображения
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
                setFade(true); // Добавляем класс fade после смены изображения
            }, 100); // Небольшая задержка для плавного перехода
        }, 5000); // Смена изображения каждые 5 секунд

        return () => clearInterval(interval); // Очистка интервала при размонтировании
    }, []); // Пустой массив зависимостей, чтобы эффект сработал только один раз

    return (
        <section className="me flex">
            <div className="me__description flex-col">
                {description.map((value, index) => (
                    <p key={index}>{value}</p>
                ))}
            </div>
            <div className="me__images">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`me__images-img ${fade ? 'fade-in' : ''}`}
                />
            </div>
        </section>
    );
};

export default Me;
