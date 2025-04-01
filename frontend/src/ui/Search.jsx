"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { HiOutlineSearch } from 'react-icons/hi'

function Search() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const formSubmit = (e) => {
        e.preventDefault()
        const search = e.target.search;
        const searchValue = search.value;
        const newParams = new URLSearchParams(searchParams.toString())
        if (searchValue) {
            newParams.set("search", searchValue)
        } else {
            newParams.delete("search")
        }
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
    }

    return (
           <form onSubmit={formSubmit}
            className='relative w-full md:max-w-sm m-auto'>
            <input
                type="text"
                placeholder='جستجو'
                name='search'
                autoComplete='off'
                className='textField__input py-2 text-sm bg-secondary-0'
            />
            <button
                type='submit'
                className='absolute top-0 left-0 flex items-center h-full ml-2'>
                <HiOutlineSearch className='h-5 text-secondary-500' />
            </button>
        </form>
    )
}

export default Search
