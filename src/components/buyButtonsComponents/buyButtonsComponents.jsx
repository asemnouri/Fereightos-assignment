import React from "react"
import styles from '../styles.css'

function BuyButtonsComponents({ handleBuyClick, inputChange, onChange }) {

    return (
        <div>
            <button style={{ margin: '10px 0' }} onClick={(e) => { e.preventDefault(); handleBuyClick('credit') }}> buy by credit card</button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input type="number" name="amount" value={inputChange} onChange={onChange} min="0" />
                <button onClick={(e) => { e.preventDefault(); handleBuyClick('cash') }}>buy cash</button>
            </div>

        </div>
    )

}
export default BuyButtonsComponents