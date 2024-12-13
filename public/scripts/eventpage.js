(async () => {

    const eventName = document.getElementById("eventName")
    const eventLocation = document.getElementById("eventLocation")
    const eventDate = document.getElementById("eventDate")
    const eventTime = document.getElementById("eventTime")

    const { pathname } = window.location
    const [,,id] = pathname.split('/')

    const result = await fetch(`/api/v1/events/${id}`)
    const { name, location, date, time } = await result.json()

    eventName.textContent = name;
    eventLocation.textContent = `Location: ${location}`;
    eventDate.textContent = `Date: ${date}`;
    eventTime.textContent = `Time: ${time}`;
})()