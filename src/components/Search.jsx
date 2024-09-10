import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [query, setQuery] = useState('')

    const navigate = useNavigate()


    const handelSearch = () => {
        if (query.length > 0) {
            navigate(`/Result/${query}`)
            setQuery('')
        } else{
            alert('please enter note')
        }

    }
    const handleKey = (e) => {
        if (e.key === "Enter") {
            handelSearch()
        }
    }

    return (
        <div className='search_box'>
            <input
                value={query}
                onInput={(e) => setQuery(e.target.value)}
                onKeyDown={handleKey}
                className='w-full border-gray-600 border-[1.5px] rounded-full py-[0.34rem] px-6 indent-4 outline-none'
                type="text" placeholder='search'
            />
            <div
                onClick={handelSearch}
                className='absolute left-[10px] top-[5px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#3333"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
            </div>


        </div>
    )
}

export default Search