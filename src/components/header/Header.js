import React, {useEffect, useState} from 'react';
import s from './style.module.scss'
import logo from '../../assets/img/logo.svg'
import telegram from '../../assets/img/telegram.svg'
import viber from '../../assets/img/viber.svg'
import whatsapp from '../../assets/img/whatsapp.svg'

const Header = () => {

    const [isScrollHeader, setIsScrollHeader] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                setIsScrollHeader(true)
            } else {
                setIsScrollHeader(false)
            }
        })

    }, []);

    return (
        <header style={{background: isScrollHeader ? "#0E1014" : ""}} className={s.header}>
            <div className="container">
                <div className={s.wrapper}>
                    <a className={s.logo} href="">
                        <img src={logo} alt=""/>
                        <div className={s.logoText}>
                            крупный интегратор CRM в Росcии и ещё 8 странах
                        </div>
                    </a>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <a href="#">Услуги</a>
                        </li>
                        <li className={s.item}>
                            <a href="#">Виджеты</a>
                        </li>
                        <li className={s.item}>
                            <a href="#">Интеграции</a>
                        </li>
                        <li className={s.item}>
                            <a href="#">Кейсы</a>
                        </li>
                        <li className={s.item}>
                            <a href="#">Сертификаты</a>
                        </li>
                    </ul>
                    <a className={s.phone} href="tel:+75555555555">
                        +7 555 555-55-55
                    </a>
                    <ul className={s.socials}>
                        <li>
                            <a href="#">
                                <img src={telegram} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={viber} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={whatsapp} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;