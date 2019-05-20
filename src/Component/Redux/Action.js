
import axios from "axios";

export const fetchImages = () => {
    return (dispatch) => {
        axios
            .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=0b3e87958d0b4e71a9e2ed3eea69237a")
            .then(response => {
                setTimeout(() => {
                    dispatch(getNews(response.data.articles))
                }, 2000);
            });
    }
}

export const getNews = (valueData) => ({
    type: 'GET_NEWS',
    data: valueData
})

export const updateUsername = (dataUser) => ({
    type: 'USERNAME_UPDATE',
    username: dataUser
})

export const updatePassword = (dataPassword) => ({
    type: 'PASSWORD_UPDATE',
    password: dataPassword
})

export const loginAuth = () => ({
    type: 'LOGIN_AUTH'
})