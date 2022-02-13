class Products {
    constructor(prductsObject) {
        this.prductsObject = prductsObject
    }
    getProducts() {
        return this.prductsObject
    }
    getProduct(id) {
        return this.prductsObject[id]
    }
    decreaseProductQuantity(id) {
        if (!this.productAvailability(id)) {
            return false
        } else {
            this.prductsObject[id].quantity -= 1
            return true
        }
    }
    productAvailability(id) {
        return !!this.prductsObject[id].quantity
    }
}

class Product {
    constructor(id, name, price, quantity, img) {
        this.id = id
        this.name = name
        this.quantity = quantity
        this.price = price
        this.img = img
    }
}

const productsArray = [
    new Product('11', 'cola', 2, 0, 'https://thumbs.dreamstime.com/b/chocolate-bar-kinder-bueno-isolated-white-background-sabah-malaysia-april-nd-selective-focus-image-noise-effect-216182844.jpg'),
    new Product('12', 'Pepsi', 2, 5, 'https://upload.wikimedia.org/wikipedia/commons/2/26/Kinderchocolate.jpg'),
    new Product('13', 'Sprite', 3, 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iN9DozFofnFS81TmRUX8m7Dp_VEm1LVKag&usqp=CAU'),
    new Product('14', 'xl', 4, 5, 'https://cdn100.karaz.ps/wp-content/uploads/8000500267103-1.jpg'),
    new Product('15', 'choco', 3, 5, 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3a2f1be3-95a5-438c-a0a1-684d8af8c647.jpg'),

    new Product('21', 'lays', 1, 5, 'https://target.scene7.com/is/image/Target/GUEST_bbe70005-2e20-4da5-baa1-1a8fdf544aa1?wid=488&hei=488&fmt=pjpeg'),
    new Product('22', 'Cheetos', 3, 5, 'https://www.myamericanmarket.com/4632-large_default/cheetos-crunchy-flamin-hot.jpg'),
    new Product('23', 'lays', 1, 5, 'https://www.hollandshop24.com/media/image/product/67/lg/lays-chips-naturel-xxxl-300g.jpg'),
    new Product('24', 'lays', 1, 5, 'https://sc02.alicdn.com/kf/U4a090acfc53e4e04b14b3fe82a19cb33p.jpg_640x640.jpg'),
    new Product('25', 'lays', 1, 5, 'https://images-na.ssl-images-amazon.com/images/I/71uQ3b9609L._SL1500_.jpg'),

    new Product('31', 'galaxy', 3, 5, 'https://images-na.ssl-images-amazon.com/images/I/51hREDB5-NL._SL1000_.jpg'),
    new Product('32', 'snikers ', 2, 5, 'https://cdn100.karaz.ps/wp-content/uploads/5900951260506-large.jpg'),
    new Product('33', 'bubbly', 4, 5, 'https://images-na.ssl-images-amazon.com/images/I/41100DSTICL._SX425_.jpg'),
    new Product('34', 'mars', 4, 5, 'https://images-na.ssl-images-amazon.com/images/I/71-Fk-zdrkL._SX522_.jpg'),
    new Product('35', 'twix', 3, 5, 'https://p.kindpng.com/picc/s/769-7696022_twix-freetoedit-twix-spekulatius-hd-png-download.png'),

    new Product('41', 'lays', 1, 5, 'https://target.scene7.com/is/image/Target/GUEST_bbe70005-2e20-4da5-baa1-1a8fdf544aa1?wid=488&hei=488&fmt=pjpeg'),
    new Product('42', 'Cheetos', 3, 5, 'https://www.myamericanmarket.com/4632-large_default/cheetos-crunchy-flamin-hot.jpg'),
    new Product('43', 'lays', 1, 5, 'https://www.hollandshop24.com/media/image/product/67/lg/lays-chips-naturel-xxxl-300g.jpg'),
    new Product('44', 'lays', 1, 5, 'https://sc02.alicdn.com/kf/U4a090acfc53e4e04b14b3fe82a19cb33p.jpg_640x640.jpg'),
    new Product('45', 'lays', 1, 5, 'https://images-na.ssl-images-amazon.com/images/I/71uQ3b9609L._SL1500_.jpg'),

    new Product('51', 'cola', 2, 5, 'https://thumbs.dreamstime.com/b/chocolate-bar-kinder-bueno-isolated-white-background-sabah-malaysia-april-nd-selective-focus-image-noise-effect-216182844.jpg'),
    new Product('52', 'Pepsi', 2, 5, 'https://upload.wikimedia.org/wikipedia/commons/2/26/Kinderchocolate.jpg'),
    new Product('53', 'Sprite', 3, 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iN9DozFofnFS81TmRUX8m7Dp_VEm1LVKag&usqp=CAU'),
    new Product('54', 'xl', 4, 5, 'https://cdn100.karaz.ps/wp-content/uploads/8000500267103-1.jpg'),
    new Product('55', 'choco', 3, 5, 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3a2f1be3-95a5-438c-a0a1-684d8af8c647.jpg')

]

const arrayToObject = productsArray.reduce((acc, product) => {
    return { ...acc, [product.id]: product }
}, {})

const products = new Products(arrayToObject)

export default products