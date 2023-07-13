import React, { useState, useEffect, useRef } from 'react';

import styles from "@/styles/home/MyRecord.module.scss";
import LineChart from '@/component/LineChart';

import * as TopPageApi from "@/api/topPageApi";
import * as MyRecordApi from "@/api/myRecordApi";

export default function MyRecord() {
    const recordRef = useRef(null);
    const exerciseRef = useRef(null);
    const diaryRef = useRef(null);
 
    const [timeType, setTimeType] = useState("year");
    const [exerciseList, setExerciseList] = useState([]);
    const [diaryList, setDiaryList] = useState([]);
    const [chartData, setChartData] = useState();

    useEffect(() => {
        TopPageApi.getChartData().then(body => setChartData(body));
        MyRecordApi.getExerciseList().then(body => setExerciseList(body));
        MyRecordApi.getDiaryList().then(body => setDiaryList(body));
    }, []);

    const FILTER_OPION = [
        { id: "day", title: "日" },
        { id: "week", title: "週" },
        { id: "month", title: "月" },
        { id: "year", title: "年" }
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.row_1}>
                <div className={styles.col}>
                    <div className={styles.image} onClick={() => recordRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <div className={styles.title}>BODY RECORD</div>
                        <div className={styles.content}>自分のカラダの記録</div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.image} onClick={() => exerciseRef.current.scrollIntoView({ behavior: 'smooth' })} >
                        <div className={styles.title}>MY EXERCISE</div>
                        <div className={styles.content}>自分の運動の記録</div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.image} onClick={() => diaryRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <div className={styles.title}>MY DIARY</div>
                        <div className={styles.content}>自分の日記</div>
                    </div>
                </div>
            </div>
            <div className={styles.row_2} ref={recordRef}>
                <div className={styles.row_header}>
                    <div className={styles.title}>BODY RECORD</div>
                    <div className={styles.time}>2021.05.21</div>
                </div>
                <LineChart
                    height={250} width={960}
                    data={chartData} 
                    background="#414141"
                />
                <div className={styles.chart_filter}>
                    {FILTER_OPION.map(option => {
                        return (
                            <div key={option.id} onClick={() => setTimeType(option.id)}
                                className={`${styles.filter_option} ${timeType == option.id ? styles.selected : ""}`}
                            >
                                {option.title}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.row_3} ref={exerciseRef}>
                <div className={styles.row_header}>
                    <div className={styles.title}>MY EXERCISE</div>
                    <div className={styles.time}>2021.05.21</div>
                </div>
                <div className={styles.exercise_list}>
                    {exerciseList.map((exercise, index) => {
                        return (
                            <div key={index} className={styles.exercise_elm}>
                                <div className={styles.dot} />
                                <div className={styles.exercise_content}>
                                    <div className={styles.exercise_content_text}>{exercise.content}</div>
                                    <div className={styles.exercise_content_kcal}>{`${exercise.kcal} kcal`}</div>
                                </div>
                                <div className={styles.exercise_time}>{`${exercise.time} min`}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.row_4} ref={diaryRef}>
                <div className={styles.diary_title}>MY DIARY</div>
                <div className={styles.diary_list}>
                    {diaryList.map((diary, index) => {
                        return (
                            <div key={index} className={styles.diary_elm}>
                                <div className={styles.diary_time}>{diary.time}</div>
                                <div className={styles.diary_content}>{diary.content}</div>
                            </div>
                        )
                    })}
                </div>
                <button type="button" className={styles.button_load_more} onClick={() => setDiaryList([...diaryList, {...diaryList[0]}])}>
                    記録をもっと見る
                </button>
            </div>
        </div>
    )
}

