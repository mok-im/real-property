import { HouseActionTypes, HouseAction, HouseState } from '../../types';

const initialState: HouseState = {
    houses: [],
    house: [],
    loading: true,
};

export default function reducer(
    state = initialState,
    action: HouseAction
): HouseState {
    switch (action.type) {
        case HouseActionTypes.SET_HOUSES:
            return { ...state, houses: action.payload, loading: false };
        case HouseActionTypes.SET_ONE_HOUSE:
            return { ...state, house: action.payload, loading: false };
        default:
            return state;
    }
}
