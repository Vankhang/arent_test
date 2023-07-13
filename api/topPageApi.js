import callApi from "@/util/callApi";

export function getChartData() {
    const endPoint = `http://localhost:3000/api/chartdata`;
    const options = {
        method: 'GET'
    };
    return callApi(endPoint, options).then(body => {
        return createFakeChartData();
    });
}

export function getMealHistory(type = "all") {
    const endPoint = `http://localhost:3000/api/chartdata?type=${type}`;
    const options = {
        method: 'GET'
    };
    return callApi(endPoint, options).then(body => {
        return createFakeMealHistory();
    });
}

function createFakeChartData() {
    const labels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"];
    const listValue1 = [];
    const listValue2 = [];
    for (let x = 0; x < labels.length; x++) {
        listValue1.push(Math.random() * 1000);
        listValue2.push(Math.random() * 1000);
    }
    const data = {
        labels,
        datasets: [
            { color: "#8FE9D0", data: listValue1 },
            { color: "#FFCC21", data: listValue2 }
        ]
    }
    return data;
}

function createFakeMealHistory() {
    return [
        {
            day: "05/21",
            images: ["/main_photo.png","/main_photo.png", "/main_photo.png", "/main_photo.png"]
        },
        {
            day: "05/20",
            images: ["/main_photo.png","/main_photo.png", "/main_photo.png", "/main_photo.png"]
        },
        {
            day: "05/19",
            images: ["/main_photo.png","/main_photo.png", "/main_photo.png", "/main_photo.png"]
        },
    ];
}