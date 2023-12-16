import React from 'react';
import './header.css'

const Header = ({id, setInput}) => {

    return(
        <header className={`header--container ${id && 'width-50'}`}>
            <div className='header--sub-container'>
            <div>
                <strong>Filter by Title / Order ID</strong>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Start typing to search'
                    className='header--input'
                    onChange={(e)=> setInput(e.target.value)}
                />
            </div>
            </div>
        </header>
    )

}

export default Header;