import React from 'react';
import s from './style.module.scss'
import Button from "../Button/Button";
import redBall from "../../assets/img/redBall.svg"
import purpleBall from "../../assets/img/purpleBall.svg"

const MainContent = () => {
    return (
        <div className={s.mainContent}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.contentWrapper}>
                        <div className={s.firstContent}>
                            <h1 className={s.title}>
                                Зарабатывайте
                                больше
                                <div className={s.gradient}>с WELBEX</div>
                            </h1>
                            <div className={s.firstContentText}>Развиваем и контролируем продажи за вас</div>
                        </div>
                        <div className={s.secondContent}>
                            <h2 className={s.secondContentTitle}>
                                <div>Вместе с <span className={s.gradient}>бесплатной</span></div>
                                <div><span className={s.gradient}>консультацией</span> мы дарим:</div>
                            </h2>
                            <ul className={s.shortList}>
                                <li>Skype аудит</li>
                                <li>30 виджетов</li>
                                <li>Dashboard</li>
                                <li>Месяц аmoCRM</li>
                            </ul>
                            <ul className={s.fullList}>
                                <li>
                                    <div className={s.fullListTitle}>Виджеты</div>
                                    <div className={s.fullListText}>30 готовых решений</div>
                                </li>
                                <li>
                                    <div className={s.fullListTitle}>Dashboard</div>
                                    <div className={s.fullListText}>с показателями
                                        вашего бизнеса
                                    </div>
                                </li>
                                <li>
                                    <div className={s.fullListTitle}>Skype Аудит</div>
                                    <div className={s.fullListText}>отдела продаж и CRM системы</div>
                                </li>
                                <li>
                                    <div className={s.fullListTitle}>35 дней</div>
                                    <div className={s.fullListText}>использования CRM</div>
                                </li>
                            </ul>
                            <div className={s.btn}>
                                <Button text="Получить консультацию"/>
                            </div>
                        </div>
                    </div>
                    <div className={s.purpleLight}></div>
                    <div className={s.redLight}></div>
                    <div className={s.yellowLight}></div>
                    <div className={s.glass}></div>
                    <div className={s.redBall}>
                        <img src={redBall} alt=""/>
                    </div>
                    <div className={s.purpleBall}>
                        <img src={purpleBall} alt=""/>
                    </div>
                    <div className={s.bigBall}>
                        <img src={redBall} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainContent;