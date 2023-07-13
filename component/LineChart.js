import React from "react";

import styles from "@/styles/component/LineChat.module.scss";

export default function LineChart(props) {
    const { height, width, data } = props;
 
    function getMinY() {
        let min = -1;
        for (let i = 0; i < data.datasets.length; i++) {
            const listValue = data.datasets[i].data;
            for (let j = 0; j < listValue.length; j++) {
                if (min == -1 || min > listValue[j]) {
                    min = listValue[j]
                }
            }
        }
        return min;
    }

    function getMaxY() {
        let max = 0;
        for (let i = 0; i < data.datasets.length; i++) {
            const listValue = data.datasets[i].data;
            for (let j = 0; j < listValue.length; j++) {
                if (max < listValue[j]) {
                    max = listValue[j]
                }
            }
        }
        return max;
    }

    function getSvgX(x) {
        return x == 0 ? 0 : (x / (data.labels.length - 1) * width);
    }
    function getSvgY(y) {
        return y == 0 ? height : (height - (y / getMaxY() * height));
    }
  
    function renderLine(dataset, key) {
        let pathD = "M " + getSvgX(0) + " " + (getSvgY(dataset.data[0])) + " ";
        pathD += dataset.data.map((point, i) => {
            return "L " + getSvgX(i) + " " + (getSvgY(point)) + " ";
        });
        return (
            <path key={key} className={styles.linechart_path} d={pathD} style={{ stroke: dataset.color }} />
        );
    }

    function renderPoint(dataset, key) {
        return (
            <g key={key} className={styles.linechart_point}>
                {dataset.data.map((elm, index) => {
                    return (
                        <ellipse key={index} cx={getSvgX(index)} cy={getSvgY(elm)} style={{ stroke: dataset.color }} rx="5" ry="5" fill={dataset.color} />
                    )
                })}
            </g>
        );
    }
  
    function renderAxis() {
        const minY = getMinY(), maxY = getMaxY();
        return (
            <g className={styles.linechart_axis}>
                {data.labels.map((elm, index) => {
                    return (
                        <g key={index}>
                            <line key={index} x1={getSvgX(index)} y1={getSvgY(minY)} x2={getSvgX(index)} y2={getSvgY(maxY)} style={{ stroke: "#777777" }}  />
                            <text x={getSvgX(index) - 7} y={height + 20} className={styles.label}>{elm}</text>
                        </g>
                    )
                })}
            </g>
        );
    }

    return (
        <svg viewBox={`0 -10 ${width} ${height + 30}`} width={width} height={height} className={styles.wrapper} style={{ background: props.background }}>
            {renderAxis()}
            {data.datasets.map((elm, index) => {
                return renderLine(elm, index);
            })}
            {data.datasets.map((elm, index) => {
                return renderPoint(elm, index);
            })}
        </svg>
    )
}

LineChart.defaultProps = {
    data: {
        labels: ["7", "8", "9", "10", "11", "12"],
        datasets: [
            { color: "#8FE9D0", data: [0, 345, 435, 12, 65, 100] },
            { color: "#FFCC21", data: [65, 22, 53, 30, 544, 116] }
        ]
    },
    height: 312,
    width: 700,
    background: "#2E2E2E"
}
