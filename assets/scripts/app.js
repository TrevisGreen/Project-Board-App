class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log('Adding product to cart...');
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}" >
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add To Cart</button>
                </div>
            </div>                    
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://i5.walmartimages.com/asr/486afa09-f825-4a7d-bcfb-b2ba7f8abf91.094c98e89bd0f6832a022bd9d6fcb700.jpeg',
            'Saints Pillow!',
            19.89
        ),
        new Product(
            'A Carpet',
            'https://www.travelsintranslation.com/wp-content/uploads/2021/02/New-Orleans-Saints-NFL-Area-Rug-Living-Room-Rug-Home-US-Decor.jpg',
            'Saints Carpet',
            69.95
        )
    ];

    constructor() {}

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
prouductList.render();

