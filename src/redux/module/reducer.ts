// export const SET_HOUSES = 'SET_HOUSES';
// export const FETCH_HOUSES = 'FETCH_HOUSES';
// export const FETCH_ONE_HOUSE = 'FETCH_ONE_HOUSE';

// interface HouseState {
//     houses: any[];
// }
// enum HouseActionTypes {
//     SET_HOUSES = 'SET_HOUSES',
//     FETCH_HOUSES = 'FETCH_HOUSES',
//     FETCH_ONE_HOUSE = 'FETCH_ONE_HOUSE',
// }

const initialState: HouseState = {
    houses: [],
};

export default function reducer(state = initialState, action): HouseState {
    switch (action.type) {
        case HouseActionTypes.SET_HOUSES:
            return { ...state, houses: action.payload };
        default:
            return state;
    }
}

export const setHouses = (payload) => ({ type: SET_HOUSES, payload });
export const fetchHouses = () => ({ type: FETCH_HOUSES });
export const fetchOneHouse = (args) => ({
    type: FETCH_ONE_HOUSE,
    args: args,
});
