import http from "./httpService";

export function addToCartApi(productId) {
    return http.post(`/cart/add`, productId).then(({ data }) => data.data)
}

export function removefromCartApi(productId) {
    return http.post(`/cart/remove`, productId).then(({ data }) => data.data)
}

export function paymentCartApi() {
    return http.post(`/payment/create`).then(({ data }) => data.data)
}