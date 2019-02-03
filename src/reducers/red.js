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
        { name: "Санкт-Петербург", zip: "198099" },
        { name: "Москва", zip: "125009" },
        { name: "Волгоград", zip: "400006" },
        { name: "Смоленск", zip: "214000" },
        { name: "Томск", zip: "634003" },
        { name: "Владимир", zip: "600017" },
        { name: "Омск", zip: "644047" },
        { name: "Новосибирск", zip: "630005" },
        { name: "Екатеринбург", zip: "620027" },
        { name: "Казань", zip: "420054" },
        { name: "Великий Новгород", zip: "173000" },
        { name: "Воронеж", zip: "394038" }
    ]
