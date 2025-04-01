const { default: http } = require("./httpService");

export function getAllCategoryApi() {
    return http.get(`/category/list`).then(({ data }) => data.data)
}

export  function getCategoryByIdApi(id) {
    return  http.get(`/category/${id}`).then(({ data }) => data.data)
}

export async function editCategoryApi({ id, data }) {
    return await http.patch(`/admin/category/update/${id}`, data).then(({ data }) => data.data)
}

