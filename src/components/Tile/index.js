import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import './Tile.css';

const propTypes = {}
const defaultProps = {}

export default class Tile extends Component {
    render() {
        return (
            <div className="Tile">
                <div className="Tile-Image">
                    <img src={this.props.imageUrl}  alt={this.props.name}/>
                </div>
                <div className="Tile-Details">
                    <hr className="divider" />
                    <div className="ProjectInfo">
                        <h3 className="ProjectInfo-Title"> {this.props.name} </h3>
                        <p className="ProjectInfo-Description">{this.props.description}</p>
                    </div>
                </div>
                <div className="Tile-CTA">
                    <a href={this.props.demoUrl} target="_blank">Demo</a>
                    <a href={this.props.githubUrl} target="_blank">Code</a>
                </div>
            </div>
        );
    }
}

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
