import { useEffect, useState } from 'react'
import React from 'react'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html"
import Word from './Word'
import parseNotes from '../Proccessing/parseNotes'

const Ditto = () => {
    const [dittoHtml, setDittoHtml] = useState("farting")
    const [dittoWords, setDittoWords] = useState([])
    const [dittoParsed, setDittoParsed] = useState([])

    const onChange = (e) => {
        setDittoHtml(sanitizeHtml(
        e.currentTarget.innerHTML
        ))   
    }

    useEffect(() => {
        setDittoWords(dittoHtml.split(" "))
    }, [dittoHtml])
    return (
        <div className='Ditto'>
            <ContentEditable
            className="ditto-box"
            html={dittoHtml} // innerHTML of the editable div
            disabled={false}
            onChange={onChange} // handle innerHTML change
            onBlur={onChange}
            spellCheck={false}
            onKeyDownCapture={(e) => {
                if (e.key == "Enter") {
                    e.preventDefault()
                    console.log(parseNotes(dittoWords))
                    setDittoWords([])
                    setDittoHtml("")
                }
            }}
            />

            <div className='ditto-output'>
                {dittoParsed.map((p, i) => {
                    
                })}
            </div>
      </div>
  )
}

export default Ditto