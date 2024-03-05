export class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    addToCart() {
        throw new Error(
            "La lógica de este método debe ser implementada por las clases hijas"
        );
    }
}

class Article extends Product {
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }
    addToCart() {
        return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`
    }
}

class Service extends Product {
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }
    addToCart() {
        return `Agregando el servicio ${this.name} al carrito`
    }
}

class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        return product.addToCart();
    }
    deleteProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    calculateTotal() {
        let total = 0;
        this.products.forEach((product) => {
            total += product.price * product.quantity;
        });
        return total;
    }
    getProducts() {
        return this.products;
    }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
console.log(cart.addProduct(book));
console.log(cart.addProduct(course));
console.log(cart.calculateTotal());