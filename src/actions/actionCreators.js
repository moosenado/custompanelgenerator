import { initConnectors } from './actions';

//ADD YOUR AJAX REQUEST IN HERE TO GET INIT DATA WHEN NECESSARY
export function initialStateConnection() {
    return (dispatch) => {
        dispatch(initConnectors({
            smallconnectors: [],
            largeconnectors: []
        }));
    };
}