const { default: axios } = require("axios");

const app = axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials: true
})


app.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err)
)

app.interceptors.response.use(
    (res) => res,
    async (err) => {        
        const originalConfig = err.config
        if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true
            try {
                const { data } = await axios.get(`http://localhost:5000/api/user/refresh-token`,
                    {
                        withCredentials: true
                    }
                )
                if (data) return app(originalConfig)
            }
            catch (error) {
                return Promise.reject(error)
            }
        }
        return Promise.reject(err)
    }
)


const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    patch: app.patch,
    delete: app.delete
}

export default http;