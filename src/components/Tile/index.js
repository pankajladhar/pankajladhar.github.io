import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import './Tile.css';

const propTypes = {}
const defaultProps = {}

export default class Tile extends Component {
    renderTags(tags) {
        console.log(tags)
        return (
            tags.map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)
        )
    }
    render() {
        return (
            <div className="Tile">
                <div className="Tile-Image">
                    <a href={this.props.demoUrl} target="_blank">
                        <img src={this.props.imageUrl} alt={this.props.name} />
                    </a>
                </div>
                <div className="Tile-Details">
                    <hr className="divider" />
                    <div className="ProjectInfo">
                        <h3 className="ProjectInfo-Title"> {this.props.name} </h3>
                        <p className="ProjectInfo-Description">{this.props.description}</p>
                    </div>
                </div>
                <div className="Tile-Footer">
                    <div className="Tile-Tags">
                        {this.props.tags && this.renderTags(this.props.tags)}
                    </div>
                    <div className="Tile-CTA">
                        <a href={this.props.demoUrl} target="_blank">Demo</a>
                        <a href={this.props.githubUrl} target="_blank">Code</a>
                    </div>
                </div>
            </div>
        );
    }
}

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
