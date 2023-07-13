import callApi from "@/util/callApi";

export function getColumnPageData() {
    const endPoint = `http://localhost:3000/api/chartdata`;
    const options = {
        method: 'GET'
    };
    return callApi(endPoint, options).then(body => {
        return createFakeData();
    });
}

function createFakeData() {
    const fakeData = [];
    for (let index = 0; index < 12; index++) {
        fakeData.push({ time: "2021.05.17   23:25", title: "#魚料理  #和食  #DHA", content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", image: "/main_photo.png" })
    }
    return fakeData;
}