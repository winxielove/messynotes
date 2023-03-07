import React, {useState, useRef, useEffect} from 'react'
import sanitize from 'sanitize-html'

const Word = ( { inner } ) => {

    return (
        <div className='ditto-word' dangerouslySetInnerHTML={{ __html: sanitize(inner) }}></div>
    )
}

export default Word