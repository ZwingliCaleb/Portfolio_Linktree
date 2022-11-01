import React from 'react'

const DisplayPic=props=>{
    const{
      picture
    }=props

    return(
        <img style={{
            "height":88, 
            "width":88, 
             display: 'flex', 
            "border-radius": 275,
            align: "center"
        }}
            alt=""
            src={picture}
            />
    )
}

export default DisplayPic