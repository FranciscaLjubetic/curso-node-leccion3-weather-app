//http://api.weatherstack.com/current?access_key=5661732af624f6f815b0fc0a8b71fa0b&query=-34.86667,-71.18333&units=f



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = `Loading...`
    messageTwo.textContent = ``

    fetch(`/weather?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = `${data.error}`
                messageTwo.textContent = ``
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            
            }
        })
    })
})
