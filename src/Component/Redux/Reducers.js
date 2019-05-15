
const myData = {
    counter: 0,
    nama: ['Rudi', 'Agung', 'Herman'],
    people: ''
}

const myReducer = (prevState = {...myData}, action) =>  {
    switch (action.type) {
        case 'INCREMENT':
            return ({
                ...prevState,
                counter: prevState.counter+1
            })
        case 'DECREMENT':
            return ({
                ...prevState,
                counter: prevState.counter - 1
            })
        case 'VALUE_DATA':
            return ({
                ...prevState,
                nama: [...prevState.nama, action.data]
            })
        case 'GET_PEOPLE':
            return ({
                ...prevState,
                people: action.data
            })
        case 'PUSH_PEOPLE':
            return ({
                ...prevState,
                people: [...prevState.people, {name: action.data}]
            })
        default:
            return prevState
    }
}

export default myReducer;