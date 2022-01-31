// Create fish database
const database = {
    fish: [
        {
            image: "https://stylesatlife.com/wp-content/uploads/2019/10/Types-of-Fish-Species-In-World-and-Their-Facts.jpg",
            name: "Bart",
            species: "Goldfish",
            length: 2,
            origin: "Aruba",
            food: "Crustaceans",
        },
        {
            image: "https://stylesatlife.com/wp-content/uploads/2019/10/Types-of-Fish-Species-In-World-and-Their-Facts.jpg",
            name: "Bart",
            species: "Goldfish",
            length: 6,
            origin: "Aruba",
            food: "Crustaceans",
        },
        {
            image: "https://stylesatlife.com/wp-content/uploads/2019/10/Types-of-Fish-Species-In-World-and-Their-Facts.jpg",
            name: "Bart",
            species: "Goldfish",
            length: 15,
            origin: "Aruba",
            food: "Crustaceans",
        }
    ],
    instructions: [
        {
            salinity: "Salinity: 125PPM",
            temperature: "Temperature: 38F - 45F",
        }
    ],
    location: [
        {
            image: "https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg",
            name: "Hawaii",
            scuba: "Excellent Scuba",
            harvest: "Lots of Goldfish",
            tip: "The weather is wretched May-March"
        },
        {
            image: "https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg",
            name: "Hawaii",
            scuba: "Excellent Scuba",
            harvest: "Lots of Goldfish",
            tip: "The weather is wretched May-March"
        },
        {
            image: "https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg",
            name: "Hawaii",
            scuba: "Excellent Scuba",
            harvest: "Lots of Goldfish",
            tip: "The weather is wretched May-March"
        },
        {
            image: "https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg",
            name: "Hawaii",
            scuba: "Excellent Scuba",
            harvest: "Lots of Goldfish",
            tip: "The weather is wretched May-March"
        }
    ],
    tips: [
        {
            tip: "Darbie can't be alone"
        },
        {
            tip: "Billy can only be with smaller fish"
        },
        {
            tip: "Felicity is mean, watchout!"
        },
        {
            tip: "Don't eat yellow snow."
        },
        {
            tip: "Invest in friendships"
        }
    ]
}

// export instructions
export const getMaintenanceInstructions = () => {
    return database.instructions.map(instruction => ({ ...instruction}))
}

// export fish database
export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

// export location database
export const getLocation = () => {
    return database.location.map(location => ({ ...location }))
}


export const getMartinsTips = () => {
    return database.tips.map(tips => ({ ...tips }))
}

// export function that accepts database as argument
export const getHolyFish = (fishDatabaseArray) => {
    // declare empty array
    const holyFish = []

    // iterate through database
    for (const fish of fishDatabaseArray) {
        // check if fish.length derives from 3
        if (fish.length % 3 === 0) {
            // push derivitives of 3 to holyFish array
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const getSoldierFish = (fishDatabaseArray) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []

    for (const fish of fishDatabaseArray) {
        if (fish.length % 5 === 0) {
            soldierFish.push(fish)
        }
    }

    return soldierFish
}

export const getRegularFish = (fishDatabaseArray) => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishDatabaseArray) {
        if (fish.length % 3 === 0 && fish.length % 5 === 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}