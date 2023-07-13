import React, { useState, useEffect } from 'react';

import styles from "@/styles/home/TopPage.module.scss";
import PercentageCircle from '@/component/PercentageCircle';
import LineChart from '@/component/LineChart';
import { Cup, Knife } from '@/component/Icon';
import * as TopPageApi from "@/api/topPageApi";

export default function TopPage() {
    const [chartData, setChartData] = useState();
    const [mealHistory, setMealHistory] = useState([]);

    useEffect(() => {
        TopPageApi.getChartData().then(body => setChartData(body));
        TopPageApi.getMealHistory().then(body => setMealHistory(body));
    }, []);

    function onFilter(type) {
        TopPageApi.getMealHistory(type).then(body => setMealHistory(body));
    }

    const MEAL_TITLE = ["Morning", "Lunch", "Dinner", "Snack"];

    return (
        <div className={styles.wrapper}>
            <div className={styles.row_1}>
                <div className={styles.col_1}>
                    <img className={styles.main_photo} src="/main_photo.png" alt="" />
                    <div className={styles.percentage_circle}>
                        <PercentageCircle percent={75} text="05/21"/>
                    </div>
                </div>
                <div className={styles.col_2}>
                    <LineChart 
                        height={300} width={800}
                        data={chartData} 
                    />
                </div>
            </div>
            <div className={styles.row_2}>
                <div className={styles.hexagon_button} onClick={() => onFilter("morning")}>
                    <div className={styles.hexagon} />
                    <div className={styles.button_icon}><Knife /></div>
                    <div className={styles.button_title}>Morning</div>
                </div>
                <div className={styles.hexagon_button} onClick={() => onFilter("Lunch")}>
                    <div className={styles.hexagon} />
                    <div className={styles.button_icon}><Knife /></div>
                    <div className={styles.button_title}>Lunch</div>
                </div>
                <div className={styles.hexagon_button} onClick={() => onFilter("Dinner")}>
                    <div className={styles.hexagon} />
                    <div className={styles.button_icon}><Knife /></div>
                    <div className={styles.button_title}>Dinner</div>
                </div>
                <div className={styles.hexagon_button} onClick={() => onFilter("Snack")}>
                    <div className={styles.hexagon} />
                    <div className={styles.button_icon}><Cup /></div>
                    <div className={styles.button_title}>Snack</div>
                </div>
            </div>
            <div className={styles.row_3}>
                <div className={styles.meal_history_wrapper}>
                    {mealHistory.map(historyInfo => {
                        return (
                            <div key={historyInfo.day} className={styles.day_history}>
                                {historyInfo.images.map((mealImage, index) => {
                                    return (
                                        <div key={`${historyInfo.day}-${index}`} className={styles.meal_history}>
                                            <img className={styles.meal_image} src={mealImage} alt="" />
                                            <div key={index} className={styles.meal_title}>
                                                {`${historyInfo.day}.${MEAL_TITLE[index]}`}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <button type="button" className={styles.button_load_more} onClick={() => setMealHistory([...mealHistory, {...mealHistory[0]}])}>
                    記録をもっと見る
                </button>
            </div>
        </div>
    )
}

