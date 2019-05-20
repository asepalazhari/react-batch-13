
const myData = {
    BaseHeader: {
        index0: "Qtemu",
        index1: "Create Meetup",
        index2: "Explore",
        index3: "Login"
    },
    About: {
        title: "About Meetup",
        desc_1: "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.",
        desc_2: "Twitter: @JakartaJS and we use the hashtag #jakartajs"
    },
    Meetup: {
        title: "Hacktiv8 Meetup",
        location: "Jakarta, Indonesia",
        members: "1,078",
        organizers: "Adhy Wiranata",
    },
    username: '',
    password: '',
    isLogin: false,
    counter: 0,
    nama: ['Rudi', 'Agung', 'Herman'],
    people: '',
    news: '',
    countNews : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    meetups: [
        {
            tanggal: '2019-01-12',
            deskripsi: '#39 JakartaJS April Meetup with Kumparan',
            went: 153
        },
        {
            tanggal: '2019-02-24',
            deskripsi: '#39 JakartaJS April Meetup with Uzone',
            went: 120
        },
        {
            tanggal: '2019-02-28',
            deskripsi: '#39 JakartaJS April Meetup with Detikcom',
            went: 36
        }
    ]
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
        case 'GET_NEWS':
            return ({
                ...prevState,
                news: action.data
            })
        case 'USERNAME_UPDATE':
            return ({
                ...prevState,
                username: action.username
            })
        case 'PASSWORD_UPDATE':
            return ({
                ...prevState,
                password: action.password
            })
        case 'LOGIN_AUTH':
            return ({
                ...prevState,
                isLogin: true
            })
        default:
            return prevState
    }
}

export default myReducer;