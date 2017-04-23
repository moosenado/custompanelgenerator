import { initConnectors } from './actions';

export function initialStateConnection() {
    return (dispatch) => {
        dispatch(initConnectors());
    };
}