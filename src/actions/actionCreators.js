import { initConnectors } from './actions';

function gP(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//ADD YOUR AJAX REQUEST IN HERE TO GET INIT DATA WHEN NECESSARY
export function initialStateConnection() {
	let initarray = [];
	let initobj = {};
	let panel = gP("panel");

	if (panel) {
		let id = gP('id').split(',');
		let partname = gP('partname').split(',');
		let src = gP('src').split(',');
		let left = gP('left').split(',');
		let top = gP('top').split(',');
		let width = gP('width').split(',');

		let count = id.length;

		for (let i = 0; i < count; i++) {
			let obj = {
				id: id[i],
				name: partname[i],
				src: src[i],
				left: left[i] + 'px',
				top: top[i] + 'px',
				width: width[i]
			}
			initarray.push(obj);
		}

		switch(panel) {
			case 'smallpanel':
				initobj = {
		            smallconnectors: [initarray],
		            largeconnectors: []
		        }
			break;
			case 'largepanel':
				initobj = {
		            smallconnectors: [],
		            largeconnectors: [initarray]
		        }
			break;
		}
	} else {
		initobj = {
            smallconnectors: [],
            largeconnectors: []
        }
	}
    return (dispatch) => {
        dispatch(initConnectors(initobj));
    };
}