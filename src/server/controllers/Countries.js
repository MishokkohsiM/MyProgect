const proxyUrl = 'http://localhost:3031';

class countries {
    constructor() {
    }

    getCountries = () => {
        return new Promise((resolve, reject) =>{
            fetch(`${proxyUrl}/countries`)
                .then(result => result.json())
                .then(result => {
                    resolve(result.Countries);
                })
                .catch(error => {
                    console.log(error);
                    reject([]);
                })
        })
    }
}

export default new countries();
