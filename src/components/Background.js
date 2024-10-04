import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carts from "./Carts";

class Bg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', api: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/data')
      .then(response => this.setState({ api: response.data }))
      .catch(error => console.error('Error fetching data:', error));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    const { search, api } = this.state;

    return (
      <>
        <div className="bg">
          <h1 id="div2h1">Welcome To QTrip</h1>
          <p id="div2h4">Explore the world with fantastic places to venture around</p>
          <input 
            onChange={this.handleChange} 
            value={search} 
            id="search" 
            type="text" 
            placeholder="Search a city" 
          />
        </div>
        <div className='div2'>
          {api.filter(item => item.city.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <Link key={item.id} style={{ textDecoration: "none" }} to={item.id}>
              <Carts k={item.id} src={item.image} h1={item.city} h3={item.description} />
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default Bg;
