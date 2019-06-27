const baseURL = 'localhost:3000'

export const loginUser = (loginData) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch (`${baseURL}/auth/login`, opts)
        .then(resp => resp.json())
}

export const registerUser = (registerData) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify({user: registerData}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch (`${baseURL}/users`, opts)
        .then(resp => resp.json())
}

const createVideo = (data) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify({video: data}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch (`${baseURL}/videos`, opts)
        .then(resp => resp.json())
}

const readAllVideos = () => {
    return fetch(`${baseURL}/videos`)
        .then(resp => resp.json())
}

const updateUser = (id, data) => {
    const opts = {
        method: 'PUT',
        body: JSON.stringify({user: data}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/users/${id}`, opts)
        .then(resp => resp.json())
}

const readUser = (id) => {
    return fetch(`${baseUrl}/users/${id}`)
        .then(resp => resp.json())
}

const destroyUser = (id) => {
    const opts = {
        method: 'DELETE'
    }
    return fetch(`${baseURL}/users/${id}`, opts)
}

const readAllArticles = () => {
    return fetch(`${baseURL}/articles`)
        .then(resp => resp.json())
}

const readOneArticle = (id) => {
    return fetch(`${baseURL}/users/${id}`)
        .then(resp => resp.json())
}

const createArticle = (data) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify({article: data}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/articles`, opts)
        .then(resp => resp.json())
}

const updateArticle = (id, data) => {
    const opts = {
        method: 'PUT',
        body: JSON.stringify({article: data}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/articles/${id}`, opts)
        .then(resp => resp.json())
}

const destroyArticle = (id) => {
    const opts = {
        method: 'DELETE'
    }
    return fetch(`${baseURL}/articles`, opts)
}

export {
    createVideo,
    readAllVideos,
    readUser,
    destroyUser,
    updateUser,
    readAllArticles,
    readOneArticle,
    createArticle,
    updateArticle,
    destroyArticle
}