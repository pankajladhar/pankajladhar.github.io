import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import Tile from './../index';

describe('Tile', ()=>{
    it('renders correctly', ()=>{
        let tree = renderer.create(
            <Tile  />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
