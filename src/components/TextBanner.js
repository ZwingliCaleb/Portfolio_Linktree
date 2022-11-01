import React from 'react'

const TextBanner=props=>{
    const{
      title,
      text   
    }=props

    const myStyles = ({
        title: {
            fontStyle: "normal",
            weight: 700,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#101828"
        }
    })

    return(
        <div>
            <h2 style={myStyles.title}>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default TextBanner