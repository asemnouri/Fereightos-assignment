import './App.css';
import { useState, useRef } from 'react';
import Card from './components/card/card';
import BuyButtonsComponents from './components/buyButtonsComponents/buyButtonsComponents';


import { VendingMachineInstance } from "./data/vendingMachineClass"
import products from "./data/products"

function App() {
  const [itemsObject, setItems] = useState(products.getProducts())
  const [selectedItem, setSelectedItem] = useState("")
  const [inputChange, setInputChange] = useState(0)
  const [returnedCash, setReturnedCash] = useState({})
  const [revenue, setRevenue] = useState(0)

  const moneyInput = useRef(inputChange)

  const handleButtonNumberClick = (number) => {
    if (selectedItem.length < 2) {
      setSelectedItem((prevState) => {
        return prevState + number
      })
    } else {
      alert("not allowed action, fields are being reset")
      setSelectedItem('')
    }
  }
  const handleBuyClick = (type) => {
    if (selectedItem) {
      let returnedData
      if (type === 'cash') {
        returnedData = VendingMachineInstance.buyByCash(inputChange, selectedItem)
      } else {
        returnedData = VendingMachineInstance.buyByCriditCard(selectedItem)
      }
      if (returnedData instanceof Object) {

        setReturnedCash(returnedData)
        setItems(products.getProducts())
        moneyInput.current = inputChange
        setInputChange(0)
      } else {
        alert(returnedData)
        setReturnedCash([])

      }
      setRevenue(VendingMachineInstance.revenue())
      setTimeout(() => {

        setSelectedItem('')
      }, 3000)
    } else {
      alert('please select an item first')
    }
  }
  return (
    <div className="App">
      <div className='card-container'>

        {
          Object.entries(itemsObject).map(([key, value], i) => {
            return (
              <Card key={i} code={key} price={value.price} img={value.img} disabled={!value.quantity} quantity={value.quantity} />

            )
          })
        }
      </div>
      <div className='control-panel'>
        {
          revenue > 0 && (
            <div>your revenue is: {revenue}</div>
          )
        }
        {
          selectedItem.length === 2 && (
            <>
              <h3>selected item is :</h3>
              <Card code={selectedItem} price={itemsObject[selectedItem].price} img={itemsObject[selectedItem].img} disabled={!itemsObject[selectedItem].quantity} quantity={itemsObject[selectedItem].quantity} />
            </>
          )
        }
        {
          [1, 2, 3, 4, 5].map((number, i) => (<button key={i} onClick={() => handleButtonNumberClick(number)} >{number}</button>))
        }
        <BuyButtonsComponents handleBuyClick={handleBuyClick} inputChange={inputChange} onChange={(e) => setInputChange(e.target.value)} />

        {

          Object.keys(returnedCash).length > 0 && (
            <>
              <div>user input cash is :{moneyInput.current}$</div>
              <div>Your returned money is:</div>

            </>

          )
        }
        {
          Object.keys(returnedCash).length > 0 && (
            Object.entries(returnedCash).map(([key, value], i) => {
              return (
                <div key={i}>type:  ({key}) - amount : ({value})</div>
              )
            })
          )
        }
      </div>
    </div>

  );
}

export default App;
