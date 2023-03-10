import { useEffect, useState, useRef } from 'react'
import React from 'react'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html"
import Word from './Word'
import parseNotes from '../Proccessing/parseNotes'

const Ditto = () => {
    const [dittoHtml, setDittoHtml] = useState("")
    const [dittoOutput, setDittoOutput] = useState([])

    const dittoHtmlRef = useRef(dittoHtml)
    dittoHtmlRef.current = dittoHtml

    const dittoOutputRef = useRef(dittoOutput)
    dittoOutputRef.current = dittoOutput

    const onChange = (e) => {
        setDittoHtml(sanitizeHtml(
            e.currentTarget.innerHTML
        ))
    }
    
    return (
        <div className='Ditto'>
            <ContentEditable
                className="ditto-box"
                html={dittoHtml} // innerHTML of the editable div
                disabled={false}
                onChange={onChange} // handle innerHTML change
                onBlur={onChange}
                spellCheck={false}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        e.preventDefault()

                        setDittoOutput([...dittoOutputRef.current, dittoHtmlRef.current.split(" ")])
                        setDittoHtml("")
                    }
                }}
            />

            <div className='ditto-output'>
                {dittoOutput.map((o, i) => {
                    return (
                        <h1 key={i}>
                            {o}
                        </h1>
                    )
                })}
            </div>
      </div>
  )
}

export default Ditto