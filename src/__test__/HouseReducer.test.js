import houseReducer, { fetchHouses } from '../redux/ducks/houseReducer';
import { HouseActionTypes } from '../types'

const state = [
    {
        address: 'New York City1',
        description: 'Lorem1 ',
        id: 1,
        img: 'https://ap.rdcpix.com/ce4305635b3d44aef2e6abe0ce8f1f93l-m507177317od-w1024_h768_x2.webp',
        img_collection: [
            {
                id: 1,
                img: 'https://lid.zoocdn.com/u/1024/768/b04eb06e3b78ea655cf6e58e5690a7cf39e84fab.jpg:p',
            },
            {
                id: 2,
                img: 'https://lid.zoocdn.com/u/1024/768/b04eb06e3b78ea655cf6e58e5690a7cf39e84fab.jpg:p',
            },
        ],
        name_house: 'House 1',
        price: '1000$',
        sales_name: 'John1',
    },
];

describe('HouseReducer', () => {

    it('should added house into the state', () => {
        const initialState = {
            houses: [],
            house: [],
            loading: true
        }
        const action = {
            type: HouseActionTypes.SET_HOUSES,
            payload: state
        }
        expect(houseReducer(initialState, action)).toEqual({
            ...initialState,
            houses: action.payload,
            loading: false
        });
    });

    it('Should fetch houses', () => {
        expect(fetchHouses()).toEqual({
            type: HouseActionTypes.FETCH_HOUSES
        });
    });

});
