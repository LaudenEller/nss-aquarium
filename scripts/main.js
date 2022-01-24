import { getFish, getLocation, getMartinsTips } from './databse.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { FishList, locationList } from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishParentHTMLElement = document.querySelector(".fish-column")


fishParentHTMLElement.innerHTML = FishList()

// import { getLocation } from './databse.js'

const allLocations = getLocation()

for (const location of allLocations) {
    console.log(location)
}

const locationParentHTMLElement = document.querySelector(".location-column")


locationParentHTMLElement.innerHTML = locationList()



// import { getMartinsTips } from './databse.js'

// const allMartinsTips = getMartinsTips()

// for (const martinsTips of allMartinsTips) {
//     console.log(martinsTips)
// }
// import { martinsTipsList } from './FishList.js'

// const locationParentHTMLElement = document.querySelector(".maintenance-column")


// locationParentHTMLElement.innerHTML = martinsTipsList()





