export const registerSuccessfulLogin = (username, password) => {

    sessionStorage.setItem('authenticatedUser', username);
}

export const logout = () => {

    sessionStorage.removeItem('authenticatedUser');
}
export const isUserLoggedIn = () => {

    let user = sessionStorage.getItem('authenticatedUser')
    if (user === null) return false
    return true
}
export const getLoggedInUserName = () => {

    let user = sessionStorage.getItem('authenticatedUser')
    if (user === null) return ''
    return user;
}