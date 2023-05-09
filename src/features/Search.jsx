import React from 'react'

const Search = () => {


    return (
        <aside className='container-fluid mt-2'>
            <form className='w-25'>
                <div className='input-group'>
                    <input type='text' className='form-control'></input>
                    <button className='btn btn-secondary'>Search</button>
                </div>
            </form>
        </aside>
    )
}

export default Search