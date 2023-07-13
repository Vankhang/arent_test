import React from "react";

import styles from "@/styles/component/PercentageCircle.module.scss";

export default function PercentageCircle(props) {
    return (
        <div className={styles.flex_wrapper}>
            <div className={styles.single_chart}>
                <svg viewBox="0 0 36 36" className={styles.circular_chart}>
                    <path className={styles.circle} strokeDasharray={`${props.percent}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="8" y="20.35" className={styles.text}>{props.text}</text>
                    <text x="19" y="20.35" className={styles.percentage}>{`${props.percent}%`}</text>
                </svg>
            </div>
        </div>
    )
}

PercentageCircle.defaultProps = {
    percent: 75,
    text: "05/21"
}

