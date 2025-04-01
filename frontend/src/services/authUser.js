import http from "./httpService";

export async function getOTPApi(data) {
    return await http.post(`/user/get-otp`, data).then(({ data }) => data.data)
}

export async function checkOTPApi(data) {
    return await http.post(`/user/check-otp`, data).then(({ data }) => data.data)
}


export async function completeProfileApi(data) {
    return await http.post(`/user/complete-profile`, data).then(({ data }) => data.data)
}

export async function getUserProfileApi() {
    return await http.get(`/user/profile`).then(({ data }) => data.data)
}

export async function updateUserProfileApi(data) {
    return await http.patch(`/user/update`, data).then(({ data }) => data.data)
}

export async function logoutUser() {
    return await http.post(`/user/logout`).then(({ data }) => data.data)
}