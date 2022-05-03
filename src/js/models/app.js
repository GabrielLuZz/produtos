export class App {

    static async requisicao() {

        return fetch('https://m2-kenzie-shop.herokuapp.com/products')
            .then(response => response.json())
            .then((data) => {
                return data;
            })

    }

    static template(product) {
        const productArea = document.createElement('article');
        const productImage = document.createElement('div');
        const mainImg = document.createElement('img');
        const productInfo = document.createElement('div');
        const reviewArea = document.createElement('div');
        const titulo = document.createElement('h2');
        const buttonComprar = document.createElement('button');

        productArea.classList.add('product');
        productImage.classList.add('product-image');
        mainImg.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${product.id}/${product.imageUrl}`;
        productInfo.classList.add('product-info');
        reviewArea.classList.add('review-area');
        titulo.innerText = product.productName;
        buttonComprar.innerText = 'comprar';

        productArea.append(productImage, productInfo);
        productImage.appendChild(mainImg);
        productInfo.append(reviewArea, titulo);

        if (product.promotionStatus) {
            const deSpanPreco = document.createElement('span');
            const porSpanPreco = document.createElement('span');

            deSpanPreco.id = 'dePromocao';
            porSpanPreco.id = 'porPromocao';

            deSpanPreco.innerText = `De: R$${product.price.productPrice.toFixed(2)}`;
            porSpanPreco.innerText = `Por R$${product.price.productPromotionPrice.toFixed(2)}`;

            productInfo.append(deSpanPreco, porSpanPreco)
        } else {
            const spanPreco = document.createElement('span');

            spanPreco.innerText = `R$${product.price.productPrice.toFixed(2)}`;

            productInfo.appendChild(spanPreco)
        }

        productInfo.appendChild(buttonComprar);

        for (let i = 1; i <= 5; i++) {
            const starImg = document.createElement('img');

            if (i <= product.reviews) {
                starImg.src = 'src/images/amarela.png';
            } else {
                starImg.src = 'src/images/transparente.png';
            }

            reviewArea.appendChild(starImg)
        }

        return productArea
    }

    static showProduct(product) {
        const vitrine = document.querySelector('.vitrine');
        vitrine.appendChild(product)
    }

}


/* <article class="product">
    <div class="product-image">
        <img src="src/images/Image.png" alt="">
    </div>
    <div class="product-info">
        <div class="review-area">
            <img src="src/images/amarela.png" alt="">
            <img src="src/images/amarela.png" alt="">
            <img src="src/images/amarela.png" alt="">
            <img src="src/images/amarela.png" alt="">
            <img src="src/images/transparente.png" alt="">
        </div>

        <h2>Professional teadrinking set for every designer and developer</h2>

        <span>R$128,99</span>

        <button>comprar</button>
    </div>
</article> */