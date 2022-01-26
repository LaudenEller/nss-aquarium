import { getFish, getMartinsTips, getHolyFish, getSoldierFish, getRegularFish, getLocation, } from './databse.js'

// Import the FishList function from the correct module
import { holyFishList, soldierFishList, regularFishList, locationList, martinsTipsList } from './FishList.js'

// const getFishVar = getFish()
// const holyFish = getHolyFish(getFishVar)

//     console.log(holyFish)

// const soldierFish = getSoldierFish(getFishVar)

//     console.log(soldierFish)

// const regularFish = getRegularFish(getFishVar)

//     console.log(regularFish)


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const holyFishParentHTMLElement = document.querySelector(".holy-fish-container")

holyFishParentHTMLElement.innerHTML = holyFishList()

const soldierFishParentHTMLElement = document.querySelector(".soldier-fish-container")


soldierFishParentHTMLElement.innerHTML = soldierFishList()

const regularFishParentHTMLElement = document.querySelector(".regular-fish-container")

regularFishParentHTMLElement.innerHTML = regularFishList()


// print locations to location column
const allLocations = getLocation()

for (const location of allLocations) {
    console.log(location)
}

const locationParentHTMLElement = document.querySelector(".location-column")


locationParentHTMLElement.innerHTML = locationList()



// print martins tips to maintenance column
const allMartinsTips = getMartinsTips()

for (const martinsTips of allMartinsTips) {
    console.log(martinsTips)
}

const maintenanceParentHTMLElement = document.querySelector(".maintenance-column")


maintenanceParentHTMLElement.innerHTML = martinsTipsList()