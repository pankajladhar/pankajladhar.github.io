import React, { Component } from 'react';
import Tile from './../Tile';
import data from './../../data';
import InlineSVG from 'svg-inline-react';
import './App.css';

const githubSVG = '<?xml version="1.0" encoding="UTF-8"?><svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="GitHub-Mark" transform="translate(-136.000000, -55.000000)" fill="#ffffff"><path d="M152.608,55.455 C143.614,55.455 136.32,62.748 136.32,71.745 C136.32,78.942 140.987,85.047 147.46,87.201 C148.275,87.351 148.572,86.848 148.572,86.416 C148.572,86.03 148.558,85.005 148.55,83.646 C144.019,84.63 143.063,81.462 143.063,81.462 C142.322,79.58 141.254,79.079 141.254,79.079 C139.775,78.069 141.366,78.089 141.366,78.089 C143.001,78.204 143.861,79.768 143.861,79.768 C145.314,82.257 147.674,81.538 148.602,81.121 C148.75,80.069 149.171,79.351 149.636,78.944 C146.019,78.533 142.216,77.135 142.216,70.893 C142.216,69.115 142.851,67.66 143.893,66.522 C143.725,66.11 143.166,64.453 144.053,62.211 C144.053,62.211 145.42,61.773 148.532,63.881 C149.831,63.519 151.225,63.339 152.61,63.332 C153.994,63.339 155.387,63.519 156.688,63.881 C159.798,61.773 161.163,62.211 161.163,62.211 C162.052,64.453 161.493,66.11 161.326,66.522 C162.37,67.66 163,69.115 163,70.893 C163,77.151 159.191,78.528 155.563,78.931 C156.147,79.434 156.668,80.428 156.668,81.948 C156.668,84.125 156.648,85.882 156.648,86.416 C156.648,86.852 156.942,87.359 157.768,87.2 C164.236,85.041 168.899,78.94 168.899,71.745 C168.899,62.748 161.605,55.455 152.608,55.455" id="Fill-3"></path></g></g></svg>';
const linkedInSVG = '<?xml version="1.0" encoding="UTF-8"?><svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="iconmonstr-linkedin-3" fill-rule="nonzero" fill="#ffffff"><path d="M26.125,0 L6.875,0 C3.078625,0 0,3.078625 0,6.875 L0,26.125 C0,29.921375 3.078625,33 6.875,33 L26.125,33 C29.92275,33 33,29.921375 33,26.125 L33,6.875 C33,3.078625 29.92275,0 26.125,0 Z M11,26.125 L6.875,26.125 L6.875,11 L11,11 L11,26.125 Z M8.9375,9.2565 C7.60925,9.2565 6.53125,8.17025 6.53125,6.831 C6.53125,5.49175 7.60925,4.4055 8.9375,4.4055 C10.26575,4.4055 11.34375,5.49175 11.34375,6.831 C11.34375,8.17025 10.267125,9.2565 8.9375,9.2565 Z M27.5,26.125 L23.375,26.125 L23.375,18.4195 C23.375,13.7885 17.875,14.139125 17.875,18.4195 L17.875,26.125 L13.75,26.125 L13.75,11 L17.875,11 L17.875,13.426875 C19.7945,9.871125 27.5,9.6085 27.5,16.831375 L27.5,26.125 Z" id="Shape"></path></g></g></svg>';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__Header">
          <div className="container">
            <h1 className="App__title">Pankaj Ladhar</h1>
            <h2 className="App__SubTitle">Front End Engineer</h2>
            <div className="App_SocialIcons">
              <a href="https://github.com/pankajladhar"
                rel="noopener noreferrer"
                target="_blank">
                <InlineSVG src={githubSVG} />
              </a>
              <a href="https://github.com/pankajladhar"
                rel="noopener noreferrer"
                target="_blank">
                <InlineSVG src={linkedInSVG} />
              </a>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="TileContainer">
            {
              data.map((item, index) => {
                return (
                  <Tile
                    key={`${item.projectName.replace(/\s/gi, '-')}`}
                    name={item.projectName}
                    imageUrl={`images/${item.projectName.replace(/\s/gi, '-')}.png`}
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
