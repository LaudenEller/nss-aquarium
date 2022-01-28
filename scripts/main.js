import { getFish, getMartinsTips, getHolyFish, getSoldierFish, getRegularFish, getLocation, getMaintenanceInstructions, } from './databse.js'

// Import the FishList function from the correct module
import { holyFishList, soldierFishList, regularFishList, locationList, martinsTipsList, maintenanceInstructionsList } from './FishList.js'

const holyFishParentHTMLElement = document.querySelector(".holy-fish-container")

holyFishParentHTMLElement.innerHTML = holyFishList()


const soldierFishParentHTMLElement = document.querySelector(".soldier-fish-container")

soldierFishParentHTMLElement.innerHTML = soldierFishList()


const regularFishParentHTMLElement = document.querySelector(".regular-fish-container")

regularFishParentHTMLElement.innerHTML = regularFishList()


const locationParentHTMLElement = document.querySelector(".location-container")

locationParentHTMLElement.innerHTML = locationList()


const maintenanceParentHTMLElement = document.querySelector(".tipsList")

maintenanceParentHTMLElement.innerHTML = martinsTipsList()


const instructionsParentHTMLElement = document.querySelector(".tank-maintenance-info")

instructionsParentHTMLElement.innerHTML = maintenanceInstructionsList()