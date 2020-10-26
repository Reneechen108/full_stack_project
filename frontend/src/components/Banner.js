import React from 'react'

export default function Banner({children, title, subtitile}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p>{subtitile}</p>
            {children}
        </div>
    )
}
