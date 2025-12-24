# 🌦️ Weather Finder Web App

A dynamic **Weather Finder & Prediction** web application built using **Node.js, Express, Axios, EJS**, and the **OpenWeather API**.
The application allows users to select a city and view **current weather** or **tomorrow’s weather forecast**, with a **dynamic background that changes based on weather conditions**.

---

## 🚀 Features

* 🌍 Select a city (Tamil Nadu cities supported)
* ☀️ View **current weather**
* 🌤️ View **tomorrow’s weather (forecast at 12:00 PM)**
* 🎨 **Dynamic background images** based on weather conditions (Clear, Clouds, Rain, Snow, Fog, etc.)
* 🌡️ Temperature displayed in **°C**
* ⚠️ User-friendly error handling
* 🔐 Secure API key handling using **dotenv**

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **Axios**
* **EJS (Embedded JavaScript Templates)**
* **CSS**
* **OpenWeather API**
* **dotenv**
* **Git & GitHub**

---

## 📁 Project Structure

```
Capstone Project/
│
├── public/
│   ├── images/
│   │   ├── Clear.png
│   │   ├── Clouds.png
│   │   ├── Rain.png
│   │   ├── Snow.png
│   │   ├── Fog.png
│   │   └── Default.png
│   └── css/
│       └── main.css
│
├── views/
│   └── index.ejs
│
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
OpenWeather_API_KEY=your_api_key_here
```

⚠️ **Never commit `.env` to GitHub**

---

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/weather-finder.git
```

2. Navigate to the project folder

```bash
cd weather-finder
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
nodemon index.js
```

5. Open browser and visit:

```
http://localhost:3000
```

---

## 🌦️ Weather Conditions Supported

* Clear
* Clouds
* Rain
* Drizzle
* Thunderstorm
* Snow
* Fog
* Mist
* Haze
* Smoke

Each condition dynamically changes the background image.

---

## 📌 Learning Outcomes

* Working with **public APIs**
* Server-side rendering with **EJS**
* Handling **GET & POST requests**
* Secure API key usage with **dotenv**
* Real-world **error handling**
* Dynamic UI based on backend data

---

## 📸 Screenshots

*(Add screenshots here if you want)*

---

## 📜 Disclaimer

This project uses the **OpenWeather API** for educational purposes only.
Weather data accuracy depends on the API response.

---

## 🙌 Acknowledgements

* OpenWeather API
* Express.js Documentation
* Axios Documentation

---

## ✨ Author

**Gurumoorthi N**
Aspiring Full Stack Developer 🌱

---

⭐ If you like this project, feel free to star the repository!
