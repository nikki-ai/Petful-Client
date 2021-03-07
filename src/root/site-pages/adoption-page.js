import React from 'react';
import ApiService from '../ApiService';
import '../pages.css';

class AdoptionPage extends React.Component {
  state = {
    cats: [],
    dogs: [],
    people: [],
    name: '',
  };

  componentDidMount() {
    this.setFirstCat();
    this.setFirstDog();
    this.setAllPeople();
  }

  setFirstCat = () => {
    ApiService.getCat()
      .then((res) => {
        this.setState({
          cats: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };

  setFirstDog = () => {
    ApiService.getDog()
      .then((res) => {
        this.setState({
          dogs: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };
  setAllPeople = () => {
    ApiService.getPeople()
      .then((res) => {
        console.log(res);
        this.setState({
          people: res,
        });
      })
      .catch({ error: 'Sorry, an error occurred.' });
  };
  adoptDog = () => {
    ApiService.adoptDog().then(() => {
      this.setState({
        dogs: this.state.dogs.splice(1),
        people: this.state.people.splice(1),
      });
    });
  };
  adoptCat = () => {
    ApiService.adoptCat().then(() => {
      this.setState({
        cats: this.state.cats.splice(1),
        people: this.state.people.splice(1),
      });
    });
  };
  firstInLine = () => {
    if (this.state.people[0] === this.name) {
      clearInterval(this.adoptInterval);
    }
  };
  handleAddPerson = (e) => {
    e.preventDefault();
    ApiService.addPerson(this.state.name).then(() => {
      this.name = this.state.name;
      this.setState({
        people: [...this.state.people, this.state.name],
        name: '',
      });
      this.adoptInterval = setInterval(() => {
        if (new Date().getTime() % 2 === 0) {
          this.adoptCat();
        } else {
          this.adoptDog();
        }
        ApiService.addPerson('Killua Zoldyck').then(() => {
          this.setState({
            people: [...this.state.people, 'Killua Zoldyck'],
          });
        });
      }, 5000);
    });
  };
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };

  renderCats() {
    console.log(this.state.cats);
    return (
      <div>
        <section>
          {this.renderPet(this.state.cats[0], 'cats')}
          <button
            onClick={this.handleAdoptCat}
            disabled={this.state.people[0] !== this.name}
          >
            Adopt Me!
          </button>
        </section>
      </div>
    );
  }
  renderDogs() {
    console.log(this.state.dogs);
    return (
      <div>
        <section>
          {this.renderPet(this.state.dogs[0], 'dogs')}
          <button
            onClick={this.handleAdoptDog}
            disabled={this.state.people[0] !== this.name}
          >
            Adopt Me!
          </button>
        </section>
      </div>
    );
  }
  renderPet(petObj, petType) {
    if (petObj === undefined) {
      return <></>;
    }
    let petName = petObj.name;
    let petPic = petObj.imageURL;
    let petDesc = petObj.description;
    let petGender = petObj.gender;
    let petAge = petObj.age;
    let petBreed = petObj.breed;
    let petStory = petObj.story;

    return (
      <div>
        <img src={petPic} alt={petType} />
        <h4>{petName}</h4>
        <p>Age:{petAge}</p>
        <p>
          About {petName}: {petDesc}
        </p>
        <p>Gender: {petGender}</p>
        <p>Breed: {petBreed}</p>
        <p>
          {petName}'s Story: {petStory}
        </p>
      </div>
    );
  }
  handleAdoptDog = (e) => {
    e.preventDefault();
    this.adoptDog();
    alert('Meet your new furry friend!');
  };
  handleAdoptCat = (e) => {
    e.preventDefault();
    this.adoptCat();
    alert('Meet your new furry friend!');
  };

  render() {
    this.firstInLine();
    return (
      <div className='adoption-page'>
        <h1>Pet Adoption</h1>
        <div className='pets'>
          <div>{this.renderDogs()}</div>
          <div>{this.renderCats()}</div>
        </div>
        <section>
          <h3>Join Adoption Queue: </h3>
          <form onSubmit={this.handleAddPerson}>
            <label htmlFor='name'>Name: </label>
            <input
              name='name'
              value={this.state.name}
              onChange={this.handleOnChange}
              placeholder='Your name here'
              required
            />
            <button type='submit'>Submit</button>
          </form>
          <ul>
            {this.state.people.map((person, i) => {
              return <li key={i}>{person}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default AdoptionPage;
