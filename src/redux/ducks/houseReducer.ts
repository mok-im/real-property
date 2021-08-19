import { HouseActionTypes, HouseAction, HouseState } from '../../types';

const initialState: HouseState = {
    houses: [],
    loading: true,
};

export default function reducer(
    state = initialState,
    action: HouseAction
): HouseState {
    switch (action.type) {
        case HouseActionTypes.SET_HOUSES:
            return { ...state, houses: action.payload, loading: false };
        default:
            return state;
    }
}
