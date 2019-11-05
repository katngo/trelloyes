import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it ('renders the UI as expected', () => {
    const cards = [
        {
            id: 'xcv',
            title: 'this is a title',
            content: 'content here'
        }
    ]
    const tree = renderer.create(<List header="this is a header" cards={cards}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});