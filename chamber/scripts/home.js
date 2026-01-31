document.addEventListener("DOMContentLoaded", () => {
    /*Weather*/
    const weatherSection = document.querySelector(".weather");

    const apiKey = "f7386fe8c8729c4029353465ac65e2a8";
    const city = "Bogota,CO";
    const units = "metric";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

    async function loadWeather() {
        try {
            const response = await fetch(weatherUrl);
            const data = await response.json();

            const current = data.list[0];
            const tempC = Math.round(current.main.temp);
            const description = current.weather[0].description;

            weatherSection.innerHTML = `
                <h2>Weather</h2>
                <p class="temperature">🌤 ${tempC}°C</p>
                <p class="condition">${description}</p>
                <p class="location">Bogotá, Colombia</p>
                <h3>3-Day Forecast</h3>
                <ul class="forecast-list"></ul>
            `;

            const forecastList = weatherSection.querySelector(".forecast-list");

            const forecastDays = [];
            const addedDates = new Set();

            for (let item of data.list) {
                const date = new Date(item.dt * 1000);
                const dayStr = date.toLocaleDateString("en-US"); // unique date
                if (!addedDates.has(dayStr) && forecastDays.length < 3) {
                    addedDates.add(dayStr);
                    forecastDays.push(item);
                }
            }

            forecastDays.forEach(day => {
                const date = new Date(day.dt * 1000);
                const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
                const temp = Math.round(day.main.temp);
                const desc = day.weather[0].description;

                const li = document.createElement("li");
                li.textContent = `${dayName}: ${temp}°C, ${desc}`;
                forecastList.appendChild(li);
            });

        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherSection.innerHTML = `<p>Unable to load weather data.</p>`;
        }
    }
    loadWeather();


    /*Spotlight*/
    const spotlightContainer = document.querySelector(".spotlight-container");

    async function loadSpotlights() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();

            const goldSilverMembers = data.members.filter(
                member => member.membershipLevel === 3 || member.membershipLevel === 2
            );

            goldSilverMembers.sort(() => 0.5 - Math.random());

            const spotlightMembers = goldSilverMembers.slice(0, 3);

            spotlightContainer.innerHTML = "";
            spotlightMembers.forEach(member => {
                const card = document.createElement("article");
                card.classList.add("spotlight");

                card.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="images/${member.image}" alt="${member.name} logo" style="max-width:150px;">
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                `;

                spotlightContainer.appendChild(card);
            });

        } catch (error) {
            console.error("Error loading spotlight members:", error);
            spotlightContainer.innerHTML = `<p>Unable to load spotlight members.</p>`;
        }
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 3: return "Gold Member";
            case 2: return "Silver Member";
            default: return "Member";
        }
    }

    loadSpotlights();
});
