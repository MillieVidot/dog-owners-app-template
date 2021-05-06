// We create individual components here

// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

let dogButtonsListEl = document.querySelector(".dogs-list")
let mainEl = document.querySelector(".main")
let dogSectionEl = document.querySelector(".main__dog-section")



function renderCard(dog){

const dogHeadingEl = document.createElement('h2')
dogHeadingEl.innerText = dog.name
dogSectionEl.append(dogHeadingEl)

const dogPhotoEl = document.createElement('img')
dogPhotoEl.setAttribute("src" , dog.image)
dogPhotoEl.setAttribute("width", "400");
dogPhotoEl.setAttribute("height", "300");
dogSectionEl.append(dogPhotoEl)

const bioSectionEl = document.createElement('div')
bioSectionEl.setAttribute("class" , "main__dog-section__desc")
dogSectionEl.append(bioSectionEl)

   const bioTitle = document.createElement('h3')
   bioTitle.innerText = "Bio"
   bioSectionEl.append(bioTitle)

   const bioText = document.createElement('p')
   bioText.innerText = dog.bio
   bioSectionEl.append(bioText)

const cardFooter = document.createElement('div')
cardFooter.setAttribute("class" , "main__dog-section__btn")
dogSectionEl.append(cardFooter)

   const naughtyText = document.createElement('p')
   naughtyText.innerText = (`Is it naughty? ${dog.isGoodDog}`)
   cardFooter.append(naughtyText)

   const footerButton = document.createElement('button')
   footerButton.innerText = dog.isGoodDog
   cardFooter.append(footerButton)
   
}

function renderNavButton(dog){
   const dogNavEl = document.createElement("li")
   dogNavEl.innerText = dog.name
   dogNavEl.setAttribute("class", "dogs-list__button")
   dogButtonsListEl.append(dogNavEl)
   }

for (const dog of data) {
   for (let i = 0; i < 7; i++) {
   renderNavButton(data[i])
   renderCard(data[i])
}
}

