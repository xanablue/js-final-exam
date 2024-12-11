const results = document.getElementById('status')

document.getElementById('menuform').addEventListener('submit', async (event) => {
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