document.addEventListener('DOMContentLoaded', function () {
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const country = document.getElementById('country')
    const worldtime = document.getElementById('worldtime')
    const result = document.getElementById('result')


    const apiKey = "EwhaAHEQzJS5kjWtrDpfxg==BSlj6jXTbGpvD3vc"
    const apiUrl = "https://api.api-ninjas.com/v1/worldtime?city="

    worldtime.addEventListener('click', () => {
        const cityValue = city.value;
        const stateValue = state.value;
        const countryValue = country.value;
        const worldtimeValue = worldtime.value;
        const url = apiUrl + cityValue

        fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
            .then(response => response.json())
            .then(data => {
                const timezone = data.timezone;
                const datetime = data.datetime;
                const date = data.date;
                const year = data.year;
                const month = data.month;
                const day = data.day;
                const hour = data.hour;
                const minute = data.minute;
                const second = data.second;
                const day_of_week = data.day_of_week;
                result.innerHTML = `<strong>Timezone:</strong> ${timezone}  <br /> 
                                    <strong>Date & Time:</strong> ${datetime}`;
            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = 'An error occurred please try again later.'
            })
    })
})