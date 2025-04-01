import http from "./httpService";

export function getAllProductApi(qs, strCookies) {
    return http.get(`/product/list?${qs}`, { headers: { cookie: strCookies } }).then(({ data }) => data.data)
}

export function getProductBySlugApi(slug) {
    return http.get(`/product/slug/${slug}`).then(({ data }) => data.data)
}

export function getProductByIdApi(id) {
    return http.get(`/product/${id}`).then(({ data }) => data.data)
}

export function likeProductApi(id) {
    return http.post(`/product/like/${id}`).then(({ data }) => data.data)
}

export function creatProductApi(product) {
    return http.post(`/admin/product/add`, product).then(({ data }) => data.data)
}

export function deleteProductApi(id) {
    return http.delete(`/admin/product/remove/${id}`).then(({ data }) => data.data)
}

export function updateProductApi({ id, data }) {
    return http.patch(`/admin/product/update/${id}`, data).then(({ data }) => data.data)
}


