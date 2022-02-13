import moneyChangeValues from "./MoneyChangeValues"
import { VendingMachine } from "./vendingMachineClass"

describe("vending machine class", () => {
    const VendingMachineInstance = new VendingMachine(moneyChangeValues)
    test('should return no quantity left when there is no quantity of the selected item when buying by cash', () => {
        expect(VendingMachineInstance.buyByCash(50, '11')).toBe("sorry!,no quantity left ");
    });

    test('should retrun no enough cash when the amount is less than the price when buying by cash', () => {
        expect(VendingMachineInstance.buyByCash(1, '12')).toBe('no enough cash!');
    });
    test('should retrun Success! no change required when buying by cash', () => {
        expect(VendingMachineInstance.buyByCash(2, '51')).toBe('Success! no change required');
    });
    test('should retrun array of objects of the urrency value when success when buying by cash', () => {
        expect(VendingMachineInstance.buyByCash(20, '52')).toEqual({ '1$': 18 });
    });
    test('should retrun total revenue', () => {
        expect(VendingMachineInstance.revenue()).toBe(4);
    });
    test('shoud return no quantity left when there is no quantity of the selected item when buying by cridet card ', () => {
        expect(VendingMachineInstance.buyByCriditCard('11')).toBe("sorry!,no quantity left ");
    });

    test('should retrun success when buy by credit success ', () => {
        expect(VendingMachineInstance.buyByCriditCard('13')).toBe('success');
    });
    test('should retrun total revenue', () => {
        expect(VendingMachineInstance.revenue()).toBe(7);
    });
})