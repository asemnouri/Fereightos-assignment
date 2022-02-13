import React from "react"
import styles from '../styles.css'

function Card({ price, code, img, disabled, quantity }) {

    return (
        <div className={`card ${disabled ? 'disabled' : ''}`} >
            <img src={img} />
            <div >
                <p>price : {price}</p>
                <p>quantity : {quantity}</p>
            </div>
            <p>code : {code}</p>
        </div>
    )

}
export default Card