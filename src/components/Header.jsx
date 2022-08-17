
import React from 'react'

function Header({ text, bgColor, textcolor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textcolor,
    }
    return (
        <header style={headerStyles}>
            <h1>{text}</h1>
        </header>

    )}
    Header.defaultProps = {
        text : 'Feedback UI',
        bgColor : 'rgba(0,0,0,0.5)',
        textcolor : 'red'
}
export default Header;