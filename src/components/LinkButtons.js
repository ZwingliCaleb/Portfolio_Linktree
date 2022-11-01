import React from 'react'
import {Button} from 'reactstrap'

const LinkButtons=props=>{
    const{
        name,
        title,
        link
    } = props

    const myStyles = ({
        myMargin: {
            marginBottom: "20px"
        },
        btnText: {
            fontFamily: "Monaco",
            margin: "10px",
            fontSize: "15px",
            color: "white",
            // textShadow: "1px 1px 4px #000000"
        },
        btn: {
            padding: "24px, 32px, 24px, 32px",
            width: "1152px",
            height: "76px",
            radius: "8px"
        }
    })

    return(
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <Button style={myStyles.btn} color="danger"class="btn btn-outline-danger"outline href={link}>{name}</Button>
        </div>

    )
}

export default LinkButtons