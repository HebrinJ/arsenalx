
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

    async testGet() {
      const response = await fetch(`${this._address}/item/2`, {
        method: 'GET',
      })
      
      if(response.ok) {
        console.log('Успешный запрос')
        return response.json();
      } else {
        console.log('Запрос с ошибкой')
        return Promise.reject(`Ошибка: ${response.status}`);
      }
      
    }
  
  }

  // Заменить на адрес бэкенда
  const api = new Api('http://localhost:3001');
  export default api;