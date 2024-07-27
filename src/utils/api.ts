
const getResponse = (res: any) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export class Api {

    private _address: string = '';
    
    constructor(address: string) {
      this._address = address;
    }

    getCardList() {
      return fetch(`${this._address}/allitems`)
      .then(getResponse)
    }

    addItem() {
      return fetch(`${this._address}/items`, {
        method: 'POST',
        body: JSON.stringify({
          
        }),
      })
      .then(getResponse)
    }

    removeCard(itemId: string) {
      return fetch(`${this._address}/cards/${itemId}`, {
        method: 'DELETE',
      }).then(getResponse)
    }   
  
  }

  // Заменить на адрес бэкенда
  const api = new Api('https://url.ru');