import http from "./httpService";

export function getAllUserApi(qs,strCookies) {
    return http.get(`/admin/user/list?${qs}`,{ headers: { cookie: strCookies } }).then(({ data }) => data.data)
}

export function creatCategoryApi(data) {
    return http.post(`admin/category/add`, data).then(({ data }) => data.data)
}


export function deleteCategoryApi(id) {
    return http.delete(`/admin/category/remove/${id}`).then(({ data }) => data.data)
}

export function getPaymentListApi(strCookies) {
    return http.get(`/admin/payment/list`,{ headers: { cookie: strCookies } }).then(({ data }) => data.data)
}

export function getcouponsApi() {
    return http.get(`/admin/coupon/list`).then(({ data }) => data.data)
}

export function addNewCouponApi(data) {
    return http.post(`admin/coupon/add`, data).then(({ data }) => data.data)
}

export function deleteCouponApi(id) {
    return http.delete(`admin/coupon/remove/${id}`).then(({ data }) => data.data)
}

