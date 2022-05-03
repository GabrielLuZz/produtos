import { App } from "./models/app.js";

const { products } = await App.requisicao()

products.forEach(product => {
    const productArea = App.template(product)

    App.showProduct(productArea)
});