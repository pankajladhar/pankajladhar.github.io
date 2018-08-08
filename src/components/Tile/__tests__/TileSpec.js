import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import Tile from './../index';

describe('Tile', ()=>{
    it('renders correctly', ()=>{
        const tileProps = {
            imageUrl: "imageUrl",
            name: "name",
            description: "description",
            demoUrl: "demoUrl",
            githubUrl: "githubUrl"
        }
        let tree = renderer.create(
            <Tile {...tileProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
