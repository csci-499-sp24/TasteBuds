/* API with placeholder data */

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = [] //as an empty array

searchInput.addEventListener("input", (e) =>
{
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || 
        user.email.toLowerCase().includes(value) //searchs api for name and email as string
        user.element.classList.toggle("hide", !isVisible) // if user is visible, then add hide class if not in string
    })
})

fetch("https://jsonplaceholder.typicode.com/users").then(res =>
res.json())
.then(data => {
        users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0] 
        // get card inside template, clone a node of it and pass true
        //gets everything inside card
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email
        console.log(user) 
        userCardContainer.append(card)
        return {name: user.name, email:user.email, element:card}
    })
})