export const AUTHED_USER = 'AUTHED_USER'

export function authedUser(id){
    return {
        type: AUTHED_USER,
        id
    }
}
