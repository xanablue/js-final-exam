(async () => {
const eventDiv = document.getElementById('events')
const menuDiv = document.getElementById('menu')

const menuItems = await (await fetch('/api/v1/menu')).json();
for(const menuItem of menuItems)
{ 
    const item = document.createElement('span')
    item.className = "menuitem"

    const itemImage = document.createElement('img')
    itemImage.src = menuItem.image
    itemImage.className = "menuimg"
    itemImage.alt = menuItem.name

    const itemName = document.createElement('h3')
    itemName.textContent = menuItem.name

    const itemDescription = document.createElement('p')
    itemDescription.textContent = menuItem.description

    const itemPrice = document.createElement('p')
    itemPrice.textContent = menuItem.price
   
    item.appendChild(itemImage)
    item.appendChild(itemName)
    item.appendChild(itemDescription)
    item.appendChild(itemPrice)

    menuDiv.appendChild(item)
}

const eventItems = await (await fetch('/api/v1/events')).json();
for(const event of eventItems)
{ 
    const item = document.createElement('span')
    item.className = "event"

    const itemName = document.createElement('h3')
    itemName.textContent = event.name

    const itemDate = document.createElement('p')
    itemDate.textContent = event.date

    const eventLink = document.createElement('a')
    eventLink.href = "/event/" + event._id
    eventLink.textContent = "Details"

    item.appendChild(itemName)
    item.appendChild(itemDate)
    item.appendChild(eventLink)

    eventDiv.appendChild(item)
}
})()