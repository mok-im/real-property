import React from 'react';
import { shallow } from 'enzyme';
import About from '../pages/About';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const state = {
    house: [
        {
            id: 1,
            name_house: "House 1",
            price: "1000$",
            address: "New York City1",
            img: "https://ap.rdcpix.com/ce4305635b3d44aef2e6abe0ce8f1f93l-m507177317od-w1024_h768_x2.webp",
            description: "Lorem1 ",
            sales_name: "John1",
            img_collection: [
                {
                    id: 1,
                    img: "https://ap.rdcpix.com/ce4305635b3d44aef2e6abe0ce8f1f93l-m1955241116od-w1024_h768.webp"
                }
            ]
        }
    ],
    loading: true,
}

let store;
const setUp = (state) => shallow(
    <Provider store={store}>
        <About {...state} />
    </Provider>);

describe('Testing page About', () => {
    it('should render page About', () => {
        const mockStore = configureStore();
        store = mockStore(state);
        const house = setUp(store);
        expect(toJson(house)).toMatchSnapshot();
    });

});

