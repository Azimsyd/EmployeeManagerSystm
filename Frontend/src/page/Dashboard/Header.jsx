import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1 className='font-bold text-3xl'>Employee Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button bg-blue-900 text-white px-4 py-2'>Add Employee</button>
            </div>
        </header>
    )
}

export default Header