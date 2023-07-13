import React, { useState, useEffect } from 'react';

import styles from "@/styles/home/ColumnPage.module.scss";

import * as ColumnPageApi from "@/api/columnPageApi";

export default function ColumnPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        ColumnPageApi.getColumnPageData().then(body => setData(body));
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.recommended_wrapper}>
                <div className={styles.recommended_elm}>
                    <div className={styles.recommended_title}>RECOMMENDED COLUMN</div>
                    <div className={styles.line} />
                    <div className={styles.recommended_content}>オススメ</div>
                </div>
                <div className={styles.recommended_elm}>
                    <div className={styles.recommended_title}>RECOMMENDED DIET</div>
                    <div className={styles.line} />
                    <div className={styles.recommended_content}>ダイエット</div>
                </div>
                <div className={styles.recommended_elm}>
                    <div className={styles.recommended_title}>RECOMMENDED BEAUTY</div>
                    <div className={styles.line} />
                    <div className={styles.recommended_content}>美容</div>
                </div>
                <div className={styles.recommended_elm}>
                    <div className={styles.recommended_title}>RECOMMENDED HEALTH</div>
                    <div className={styles.line} />
                    <div className={styles.recommended_content}>健康</div>
                </div>
            </div>
            <div className={styles.information_wrapper}>
                {data.map((dataElm, index) => {
                    return (
                        <div key={index} className={styles.meal_history}>
                            <div className={styles.meal_image_wrapper}>
                                <img className={styles.meal_image} src={dataElm.image} alt="" />
                                <div className={styles.meal_time}>{dataElm.time}</div>
                            </div>
                            <div className={styles.meal_content}>{dataElm.content}</div>
                            <div className={styles.meal_title}>{dataElm.title}</div>
                        </div>
                    )
                })}
            </div>
            <button type="button" className={styles.button_load_more} onClick={() => setData([...data, {...data[0]}])}>
                記録をもっと見る
            </button>
        </div>
    )
}

