import products from "./products"
import moneyChangeValues from "./MoneyChangeValues"

export const totalVendingCash = (currencyValues, id = 0) => {

    return currencyValues.slice(id, currencyValues.length).reduce((acc, currencyValue) => {
        return acc + (currencyValue.quantity * currencyValue.value)
    }, 0)
}

function strip(number) {
    return (parseFloat(number).toPrecision(2));
}


export class VendingMachine {
    constructor(currenceyChange) {
        this.total = totalVendingCash(moneyChangeValues, 0)
        this.initialTotal = totalVendingCash(moneyChangeValues, 0)
        this.currenceyChange = currenceyChange
        this.products = products
    }

    moneyChange(amount, returnedMoney, id, price) {

        let returnedCashChanges = {}
        let currencyChnageClone = this.currenceyChange.map(item => { return { ...item } })
        for (let i = 0; i < currencyChnageClone.length;) {
            if (currencyChnageClone[i].value <= returnedMoney && currencyChnageClone[i].quantity) {
                currencyChnageClone[i].quantity -= 1
                if (returnedCashChanges[currencyChnageClone[i].type]) {

                    returnedCashChanges[currencyChnageClone[i].type] = returnedCashChanges[currencyChnageClone[i].type] + 1
                } else {
                    returnedCashChanges[currencyChnageClone[i].type] = 1

                }
                returnedMoney = strip(returnedMoney - currencyChnageClone[i].value)
                if (totalVendingCash(currencyChnageClone, i) < returnedMoney) {
                    return "sorry! no enough money in the machine"
                }
            } else {
                if (amount === currencyChnageClone[i].value) {
                    currencyChnageClone[i].quantity += 1
                }
                i++
            }
        }
        this.currenceyChange = currencyChnageClone
        this.products.decreaseProductQuantity(id)

        this.total += price
        return returnedCashChanges
    }

    buyByCash(amount, id) {
        let price = this.products.getProduct(id).price
        let returnedMoney = amount - price
        if (!this.products.productAvailability(id)) {
            return "sorry!,no quantity left "
        }
        if (returnedMoney < 0) {
            return 'no enough cash!'
        }
        if (returnedMoney === 0) {
            this.products.decreaseProductQuantity(id)
            this.total += price
            return 'Success! no change required'
        }
        return this.moneyChange(amount, returnedMoney, id, price)
    }

    revenue() {
        return this.total - this.initialTotal
    }

    buyByCriditCard(id) {
        if (!this.products.productAvailability(id)) return "sorry!,no quantity left "
        this.products.decreaseProductQuantity(id)
        this.total += this.products.getProduct(id).price
        return 'success'
    }


}
export const VendingMachineInstance = new VendingMachine(moneyChangeValues)