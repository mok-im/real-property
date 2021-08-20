import React from 'react';
import { shallow } from 'enzyme';
import { CardTemplate } from '../components';
import toJson from 'enzyme-to-json';

const props = {
    card: {
        id: 1,
        name_house: "House 1",
        price: "1000$",
        address: "New York City1",
        img: "https://ap.rdcpix.com/ce4305635b3d44aef2e6abe0ce8f1f93l-m507177317od-w1024_h768_x2.webp",
        description: "Lorem1 ",
        sales_name: "John1",
    }
};

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    })
}));

describe('Testing component <CardTemplate />', () => {
    it('should render Card template', () => {
        const component = shallow(<CardTemplate {...props} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('Test click event', () => {
        const button = shallow((<CardTemplate {...props} onClick={mockHistoryPush} />));
        button.find('Card').simulate('click');
        expect(mockHistoryPush.mock.calls.length).toEqual(1);
    });
});
