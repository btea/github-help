export function getToken() {
    const key = 'github_token'
    let v = ''
    try {
        v = window.localStorage.getItem(key)
    } catch (error) {
        
    }
    return v
}
