import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const ApiKey = process.env.OpenWeather_API_KEY;
const APIURL = "https://api.openweathermap.org";

app.get("/", (req, res) => {
    res.render("index.ejs", { bgtype: "Default"});
});

app.post("/", async (req, res) => {
    try {
        const cityValue = req.body.city;
        const weatherType = req.body.weatherType;
        if (weatherType === "current") {
            const result = await axios.get(APIURL + "/data/2.5/weather" + `?q=${cityValue}&appid=${ApiKey}&units=metric`);
            res.render("index.ejs", {
                city: cityValue,
                weather: result.data.weather[0].main,
                temp: result.data.main.temp,
                bgtype: result.data.weather[0].main,
            });
        } else if (weatherType === "tomorrow") {
            const result = await axios.get(APIURL + "/data/2.5/forecast" + `?q=${cityValue}&appid=${ApiKey}&units=metric`);
            const forecastList = result.data.list;

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowDate = tomorrow.toISOString().split("T")[0];

            const tomorrowAtNoon = forecastList.find(item =>
                item.dt_txt.startsWith(tomorrowDate) &&
                item.dt_txt.includes("12:00:00")
            );

            if (!tomorrowAtNoon) {
                return res.render("index.ejs", {
                    error: "Tomorrow's weather data not available yet."
                });
            }

            res.render("index.ejs", {
                city: cityValue,
                weather: tomorrowAtNoon.weather[0].main,
                temp: tomorrowAtNoon.main.temp,
                bgtype: tomorrowAtNoon.weather[0].main,
            });
        } else {
            alert("Invalid weather type selected");
        }
    } catch (error) {
        console.log(error.response.data);
        res.render("index.ejs", {
            error: "City not found. Please choose a valid city."
        });
    }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});