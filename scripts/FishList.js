// Import the function that returns a copy of the fish array
import { getFish, getHolyFish, getRegularFish, getSoldierFish, getMaintenanceInstructions, getLocation, getMartinsTips } from './databse.js'

const fishData = getFish()
export const holyFishList = () => {
    // Invoke the function that you imported from the database module
    const holyFish = getHolyFish(fishData)
    
    // Start building a string filled with HTML syntax
    let holyFishListHTMLString = '<article class="holyFishList">'
    
    // Create HTML representations of each fish here
    for (const fish of holyFish) {
        
        // Why is there a backtick used for this string?
        holyFishListHTMLString += `<section class="fish__card">
        <div><img  class="image__card" src="${fish.image}" /></div>
        <div class="holy__fish__name">${fish.name}</div>
        <div class="holy__fish__species">${fish.species}</div>
        <div class="holy__fish__length">${fish.length}</div>
        <div class="holy__fish__location">${fish.origin}</div>
        <div class="holy__fish__diet">${fish.food}</div>
        </section>
        `
    }
    holyFishListHTMLString += `</article>`
    
    return holyFishListHTMLString
}

export const soldierFishList = () => {
    // Invoke the function that you imported from the database module
    const soldierFish = getSoldierFish(fishData)

    // Start building a string filled with HTML syntax
    let soldierFishHTMLString = '<article class="soldierfishList">'

    // Create HTML representations of each fish here
    for (const fish of soldierFish) {

        // Why is there a backtick used for this string?
        soldierFishHTMLString += `<section class="fish__card">
            <div><img  class="image__card" src="${fish.image}" /></div>
            <div class="soldier__fish__name">${fish.name}</div>
            <div class="soldier__fish__species">${fish.species}</div>
            <div class="soldier__fish__length">${fish.length}</div>
            <div class="soldier__fish__location">${fish.origin}</div>
            <div class="soldier__fish__diet">${fish.food}</div>
        </section>
`
    }
    soldierFishHTMLString += `</article>`

    return soldierFishHTMLString
}

// Invoke the function that you imported from the database module
export const regularFishList = () => {
    
    const regularFish = getRegularFish(fishData)
    // Start building a string filled with HTML syntax
    let regularFishHTMLString = '<article class="regularfishList">'

    // Create HTML representations of each fish here
    for (const fish of regularFish) {

        // Why is there a backtick used for this string?
        regularFishHTMLString += `<section class="fish__card">
            <div><img  class="image__card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.origin}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    regularFishHTMLString += `</article>`

    return regularFishHTMLString
}


export const locationList = () => {
    const locations = getLocation()

    let locaionHTMLString = '<article class="locationList">'

    for (const location of locations) {
        locaionHTMLString += `<section class="location__card">
            <div><img class="image__card" src"${location.image}" /></div>
            <div class="location__name">${location.name}</div>
            <div class="location__scuba">${location.scuba}</div>
            <div class="location__harvest">${location.harvest}</div>
            <div class="location__tip">${location.tip}</div>
        </section>
`
    }
    locaionHTMLString += `</article>`

    return locaionHTMLString
}


export const martinsTipsList = () => {
    // Invoke the function that you imported from the database module
    const martinsTips = getMartinsTips()

    // Start building a string filled with HTML syntax
    let tipsHTMLString = '<article class="tipsList">'

    // Create HTNL representations of each fish here
    for (const tip of martinsTips) {

        // Why is there a backtick used for this string?
        tipsHTMLString += `<section class="tips__card">
            <div class="tips__tip1">${tip.tip}</div>
        </section>
`
    }
    tipsHTMLString += `</article>`

    return tipsHTMLString
}


export const maintenanceInstructionsList = () => {
    // Invoke the function that you imported from the database module
    const maintenanceInstructions = getMaintenanceInstructions()

    // Start building a string filled with HTML syntax
    let instructionsHTMLString = '<article class="tank-maintenance-info"><h3>Instructions</h3>'

    // Create HTNL representations of each fish here
    for (const instruction of maintenanceInstructions) {

        // Why is there a backtick used for this string?
        instructionsHTMLString += `<section class="instructions__card">
            <div class="instructions__salinity">${instruction.salinity}</div>
            <div class="instructions__temperature">${instruction.temperature}</div>
        </section>
`
    }
    instructionsHTMLString += `</article>`

    return instructionsHTMLString
}