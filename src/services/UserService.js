const urlBack = 'http://localhost:3000';

export default class User {
  constructor() {
    this._isAuth = false;
    this.userName = 'noName';
    this.userAvatar = '';
    this.id = null;
  }

  isAuth() {
    return this._isAuth();
  }

  clearUserData() {
    this._isAuth = false;
    this.userName = 'noName';
    this.userAvatar = '';
    this.id = null;
  }

  sendAuthRequest(method, address, body) {
    const url = `${urlBack}${address}`;
    const fPar = {
      method,
      mode: 'cors',
      headers: {
        host: 'localhost',
      },
      credentials: 'same-origin',
    };
    if (method !== 'HEAD' && method !== 'GET') {
      fPar.body = JSON.stringify(body);
      fPar.headers = {
        'Content-Type': 'application/json; charset=utf-8',
      }
    }
    return fetch(url, fPar);
  }

  login = (body) => {
    return new Promise((resolve, reject) => {
      this.sendAuthRequest('POST', '/login', body)
          .then((res) => {
            const isSuccess = res.status === 200;
            if (isSuccess) {
              this._isAuth = isSuccess;
              resolve(res.json());
            } else {
              reject({
                massage: 'error',
              });
            }
          })
          .catch(() => reject({
            massage: 'error',
          }))
    })
  };

  checkAuth() {
    return fetch()
  }

}

// export default new User();
