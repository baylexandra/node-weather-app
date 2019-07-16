console.log('Client-side js file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const forecastMessage = document.querySelector('#forecast')
const locationMessage = document.querySelector('#location')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    forecastMessage.textContent = ''
    locationMessage.textContent = 'Loading...'

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationMessage.textContent = data.error
            } else {
                locationMessage.textContent = data.location
                forecastMessage.textContent = data.forecast
            }
        })
    })
})