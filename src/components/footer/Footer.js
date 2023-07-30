import React from 'react';
import s from './style.module.scss'
import telegram from '../../assets/img/telegram.svg'
import viber from '../../assets/img/viber.svg'
import whatsapp from '../../assets/img/whatsapp.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <div className={s.aboutCompany}>
                            <div className={s.title}>О компании</div>
                            <ul>
                                <li><a href="#">Партнёрская программа</a></li>
                                <li><a href="#">Вакансии</a></li>
                            </ul>
                        </div>
                        <div className={s.menu}>
                            <div className={s.title}>Меню</div>
                            <ul>
                                <li><a href="#">Расчёт стоимости</a></li>
                                <li><a href="#">Благодарность клиентов</a></li>
                                <li><a href="#">Услуги</a></li>
                                <li><a href="#">Кейсы</a></li>
                                <li><a href="#">Виджеты</a></li>
                                <li><a href="#">Сертификаты</a></li>
                                <li><a href="#">Интеграции</a></li>
                                <li><a href="#">Блог на Youtube</a></li>
                                <li><a href="#">Наши клиенты</a></li>
                                <li><a href="#">Вопрос / Ответ</a></li>
                            </ul>
                        </div>
                        <div className={s.contacts}>
                            <div className={s.title}>Контакты</div>
                            <a className={s.phone} href="tel:+75555555555">
                                +7 555 555-55-55
                            </a>
                            <ul>
                                <li><a href="#"><img src={telegram} alt=""/></a></li>
                                <li><a href="#"><img src={viber} alt=""/></a></li>
                                <li><a href="#"><img src={whatsapp} alt=""/></a></li>
                            </ul>
                            <a className={s.address} href="https://yandex.ru/maps/-/CTTKVdq" target="_blank">Москва,
                                Путевой проезд 3с1, к 902</a>
                        </div>
                    </div>
                    <div className={s.copyrights}>
                        <div>©WELBEX 2022. Все права защищены.</div>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;