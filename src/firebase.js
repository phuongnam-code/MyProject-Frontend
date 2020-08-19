import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBPsv7Bb3D6WuW22BiYzeE1nXh4Eunmu6Y",
	authDomain: "project-e-clone.firebaseapp.com",
	databaseURL: "https://project-e-clone.firebaseio.com",
	projectId: "project-e-clone",
	storageBucket: "project-e-clone.appspot.com",
	messagingSenderId: "903304850344",
	appId: "1:903304850344:web:0a02d9ada2ada3cff08b9d",
	measurementId: "G-QKSB0BDB9Y",
});

const auth = firebase.auth();

export { auth };
