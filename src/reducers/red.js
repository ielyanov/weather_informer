export function weatherData(state = {}, action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.fetchedData;
        default:
            return state;
    }
}

export function activePlace(state = 0, action) {
    switch (action.type) {
        case 'SET_ACTIVE_PLACE':
            return action.placeIndex;
        default:
            return state;
    }
}

export function cities(state = citiesArr, action) {
    switch (action.type) {
        case 'SET_CITIES':
            return action.cities ;

        default:
            return state;
    }
}

var citiesArr = [
        { name: "Sankt-Peterburg", zip: "198099" },
        { name: "Moscow", zip: "125009" },
        { name: "Volgograd", zip: "400006" },
        { name: "Smolensk", zip: "214000" },
        { name: "Tomsk", zip: "634003" },
        { name: "Vladimir", zip: "600017" },
        { name: "Omsk", zip: "644047" },
        { name: "Novosibirsk", zip: "630005" },
        { name: "Yekaterinburg", zip: "620027" },
        { name: "Kazan", zip: "420054" },
        { name: "Velikiy Novgorod", zip: "173000" },
        { name: "Voronezh", zip: "394038" }
    ]
