import React from 'react'

const CSRF : React.FC = () => {

    const csrf_token = document.querySelector('meta[name="csrf_token"]')?.getAttribute('content')

    return (
        <> {csrf_token != null && 
            <input type="hidden" name="_token" value={csrf_token}/>
        } </>
    )

}

export default CSRF