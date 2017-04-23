import { initConnectors } from './actions';

//ADD YOUR AJAX REQUEST IN HERE TO GET INIT DATA
export function initialStateConnection() {
    return (dispatch) => {
        dispatch(initConnectors({
            smallconnectors: [],
            largeconnectors: []
        }));
    };
}