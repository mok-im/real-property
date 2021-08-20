export interface HouseState {
    houses: any[];
}
export enum HouseActionTypes {
    SET_HOUSES = 'SET_HOUSES',
    FETCH_HOUSES = 'FETCH_HOUSES',
    FETCH_ONE_HOUSE = 'FETCH_ONE_HOUSE',
}
export interface SetHouseAction {
    type: HouseActionTypes.SET_HOUSES;
    payload: any;
}
export interface fetchHousesAction {
    type: HouseActionTypes.FETCH_HOUSES;
}
export interface fetchOneHouseAction {
    type: HouseActionTypes.FETCH_ONE_HOUSE;
}
export type HouseAction =
    | SetHouseAction
    | fetchHousesAction
    | fetchOneHouseAction;
