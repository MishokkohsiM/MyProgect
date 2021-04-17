const proxyUrl = 'http://localhost:3031';

class Products {
    constructor() {
    }

    getProducts = () => {
        return new Promise((resolve, reject) =>{
            fetch(`${proxyUrl}/products`)
                .then(result => result.json())
                .then(result => {
                    resolve(result.results);
                })
                .catch(error => {
                    console.log(error);
                    reject([]);
                })
        })
    }

    getProduct = (productName) => {
        return new Promise((resolve, reject) => {
            fetch(`${proxyUrl}/product/${productName}`)
                .then(result => {
                    return result.json();
                })
                .then(product => {
                    resolve({
                        name: product.name,
                        productInfo: product.info,
                    })
                })
                .catch(error => {
                    console.log(error);
                    reject({
                        name: '',
                        productInfo: '',
                    })
                });
        })
    }
}

export default new Products();
