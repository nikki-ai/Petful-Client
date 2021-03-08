import config from './config';

const REACT_APP_API_BASE = config.REACT_APP_API_BASE;

const ApiService = {
  getCat() {
    console.log(REACT_APP_API_BASE);
    return fetch(`${REACT_APP_API_BASE}/pets/cats`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.error(error));
  },

  adoptCat() {
    return fetch(`${REACT_APP_API_BASE}/pets/cats`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
    });
  },

  getDog() {
    return fetch(`${REACT_APP_API_BASE}/pets/dogs`)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));
  },

  adoptDog() {
    return fetch(`${REACT_APP_API_BASE}/pets/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  },
  getPeople() {
    return (
      fetch(`${REACT_APP_API_BASE}/people`)
        .then((res) => {
          if (!res.ok) {
            return res.json().then((e) => Promise.reject(e));
          }
          return res.json();
        })
        // .then(data => {
        //     return data;
        // })
        .catch((error) => console.error(error))
    );
  },
  addPerson(name) {
    return fetch(`${REACT_APP_API_BASE}/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    });
  },
};

export default ApiService;
