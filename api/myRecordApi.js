import callApi from "@/util/callApi";

export function getExerciseList() {
    const endPoint = `http://localhost:3000/api/chartdata`;
    const options = {
        method: 'GET'
    };
    return callApi(endPoint, options).then(body => {
        return createFakeExerciseList();
    });
}

export function getDiaryList() {
    const endPoint = `http://localhost:3000/api/chartdata`;
    const options = {
        method: 'GET'
    };
    return callApi(endPoint, options).then(body => {
        return createFakeDiaryList();
    });
}

function createFakeExerciseList() {
    const fakeData = [];
    for (let index = 0; index < 12; index++) {
        fakeData.push({ content: "家事全般（立位・軽い", time: 10, kcal: 26 })
    }
    return fakeData;
}

function createFakeDiaryList() {
    const fakeData = [];
    for (let index = 0; index < 12; index++) {
        fakeData.push({ time: "2021.05.21 23:25", content: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…" })
    }
    return fakeData;
}