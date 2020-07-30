import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCGoUrE23NRbOr-CYtg6HRDZtfTKMnwl44',
	authDomain: 'app-photogallery.firebaseapp.com',
	databaseURL: 'https://app-photogallery.firebaseio.com',
	projectId: 'app-photogallery',
	storageBucket: 'app-photogallery.appspot.com',
	messagingSenderId: '586104716451',
	appId: '1:586104716451:web:c1d4b59b463218e77c1316',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
