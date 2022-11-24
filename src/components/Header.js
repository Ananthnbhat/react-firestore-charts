import React from 'react'
import { Button } from '@mui/material'
import './Header.scss'

const Header = () => {

    function signOutUser() {
        // sign out
    }

    return (
        <div className='header'>
            <Button
                className='singoutBtn'
                variant='contained'
                color='error'
                onClick={signOutUser}>Sign out</Button>
        </div>
    )
}

export default Header;