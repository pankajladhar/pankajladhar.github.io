import React, { Component } from 'react';
import Tile from './../Tile';
import data from './../../data'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div className="container">
            <h1 className="App__title">Pankaj Ladhar</h1>
          </div>
        </header>
        <div className="container">
          <div className="TileContainer">
            {
              data.map((item) => {
                return (
                  <Tile
                    name={item.projectName}
                    imageUrl={`images/${item.projectName.replace(/\s/gi,'-')}.png`}
                    demoUrl={item.demoUrl}
                    description={item.description}
                    githubUrl={item.githubUrl}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
