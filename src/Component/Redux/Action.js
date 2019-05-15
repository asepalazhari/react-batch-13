
import axios from "axios";

export const fetchUser = () => {
    return (dispatch) => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                dispatch(getPeople(response.data.results))
            });
    }
}

export const incrementAction = () => ({
    type: 'INCREMENT' 
})

export const decrementAction = () => ({
    type: 'DECREMENT' 
})

export const pushArrayAction = (valuePush) => ({
    type: 'VALUE_DATA',
    data: valuePush
})

export const getPeople = (valueData) => ({
    type: 'GET_PEOPLE',
    data: valueData
})

export const pushPeople = (valueData) => ({
    type: 'PUSH_PEOPLE',
    data: valueData
})