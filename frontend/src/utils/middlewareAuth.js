
export async function middlewareAuth(req) {
    const accessToken = req.cookies.get("accessToken")
    const refreshToken = req.cookies.get("refreshToken")
    const options = {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`
        }
    }

    const res = await fetch(`http://localhost:5000/api/user/profile`, options)
    const { data } = await res.json()
    const { user } = data || {}
    return user;
}


