
import Search from "@/ui/Search";
import UsersTable from "./usersTable";
import queryString from "query-string";


function UsersPage({ searchParams }) {
    const qs = queryString.stringify(searchParams)
    return (
        <div>
            <div className="md:flex items-center  mb-4">
                < h1 className='font-bold text-lg mb-8 md:mb-0'>لیست کاربران</h1>
                <Search />
            </div>
            <UsersTable qs={qs}/>
        </div>
    )
}

export default UsersPage
