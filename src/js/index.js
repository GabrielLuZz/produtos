import { App } from "./models/app.js";

const { products } = await App.requisicao()

console.log(products)

products.forEach(product => {
    const productArea = App.template(product)

    App.showProduct(productArea)
});