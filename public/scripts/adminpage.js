const results = document.getElementById('status')
const menuForm = document.getElementById('menuform')
const eventForm = document.getElementById('eventform')

menuForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const newItem = {
        name: document.getElementById('menuname').value,
        description: document.getElementById('menudesc').value,
        price: document.getElementById('menuprice').value,
        image: document.getElementById('menuimg').value,
    }

    const response = await fetch('http://localhost:3000/api/v1/menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },    
        body: JSON.stringify(newItem)
    })

    const data = await response.json()
    const { insertedId } = data

    if (insertedId) {
        results.textContent = `Success: Object ID ${data.insertedId.toString()} submitted!`
        menuForm.reset()
    } else {
        results.textContent = "Error: Could not submit data."
    }
})

eventForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const newItem = {
        name: document.getElementById('eventname').value,
        location: document.getElementById('eventloc').value,
        date: document.getElementById('eventdate').value,
        time: document.getElementById('eventtime').value,
    }

    const response = await fetch('http://localhost:3000/api/v1/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },    
        body: JSON.stringify(newItem)
    })

    const data = await response.json()
    const { insertedId } = data

    if (insertedId) {
        results.textContent = `Success: Object ID ${data.insertedId.toString()} submitted!`
        eventForm.reset()
    } else {
        results.textContent = "Error: Could not submit data."
    }
})