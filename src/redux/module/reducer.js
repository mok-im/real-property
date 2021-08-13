export const SET_HOUSES = "SET_HOUSES";
export const FETCH_HOUSES = "FETCH_HOUSES";
export const FETCH_ONE_HOUSE = "FETCH_ONE_HOUSE";


const initialState = {
    houses: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_HOUSES:
            return { ...state, houses: action.payload };
        default:
            return state;
    };
};

export const setHouses = payload => ({ type: SET_HOUSES, payload });
export const fetchHouses = () => ({ type: FETCH_HOUSES });
export const fetchOneHouse = (args) => ({ type: FETCH_ONE_HOUSE, args: args });

