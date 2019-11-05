import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { exportAllDeclaration } from '@babel/types';
import renderer from 'react-test-renderer';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it ('renders the UI as expected', () => {
    const tree = renderer.create(<Card title="Hello" content="Message here" />)
    .toJSON();
expect(tree).toMatchSnapshot();
})