import React from 'react'

const Footer = () => {
    return ( 
        <div className='flex w-full h-20 bg-gray-700 items-center justify-center'>
        <p>&copy; Website created by: <a href="https://haksiu.pages.dev" target="_blank">Haksiu</a> 2022 - {new Date().getFullYear()} {/* PLEASE DON'T CHANGE */}</p>
        </div>
    )

}

export default Footer