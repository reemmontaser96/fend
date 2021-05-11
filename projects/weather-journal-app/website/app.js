/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
// webside of weather map and my appiKey 
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const appiKey = "c5eb546eb8bf2e311f9411cb5fce8914";

document.getElementById('generate').addEventListener('click', performAction);
// function performaction
function performAction(e) {
    const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    console.log(newDate);
    getData(zipCode)//get data of zipcode
        .then(function (data) {
            //post data of temp 
            postData('/add', { temp: data.main.temp, feel: feeling, date: newDate }).then((hot) => {
                retrieveData()
            })

        })
    }

// const getRoutes data 
const getData = async (zip) => {
    //await fetch to add zip code , country code , API key
    const req = await fetch(baseURL + zip + ",us" + "&appid=" + appiKey + "&units=metric")
    try {
        const data = await req.json();
        return data; //return the data
    } catch (error) {
        console.log("error", error);
    }
}

//const post data to url and data 
const postData = async (baseURL = '', data = {}) => {
    const respones = await fetch(baseURL, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data),//json the data
    });  
    try {
        const newData = await respones.json();//const newdata with respones json
        return newData
    }
    catch (error) {
        console.log("error", error);
    }
}
//retrivedata
const retrieveData = async () => {
    const request = await fetch('/all');//request the await fetch
    try {
        const allData = await request.json();//const all the data to console 
        document.getElementById(`date`).innerHTML = `Date: ${allData.date}`;//console the date of day
        document.getElementById(`temp`).innerHTML = `Temp: ${allData.temp}`+`\xB0C`;//console the temperature of country
        document.getElementById(`content`).innerHTML = `feeling :${allData.feel}`;//how we feeling with the weather
    }
    catch (error) {
        console.log("error", error);
    }
};
