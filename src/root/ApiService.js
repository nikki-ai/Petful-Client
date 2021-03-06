import baseUrl from './config';

const ApiService = {
  getCat() {
    return fetch(`${baseUrl}/pets/cats`)
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

  adoptCat() {
    return fetch(`${baseUrl}/pets/cats`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
    });
  },

  getDog() {
    return fetch(`${baseUrl}/pets/dogs`)
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
    return fetch(`${baseUrl}/pets/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  },
  getPeople() {
    return (
      fetch(`${baseUrl}/people`)
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
    return fetch(`${baseUrl}/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    });
  },
};

export default ApiService;
