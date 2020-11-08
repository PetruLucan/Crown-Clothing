import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBtYEQBi82qJ-sCSAPLtqfBJOaKZrH3__k",
    authDomain: "crown-clothing-cdc10.firebaseapp.com",
    databaseURL: "https://crown-clothing-cdc10.firebaseio.com",
    projectId: "crown-clothing-cdc10",
    storageBucket: "crown-clothing-cdc10.appspot.com",
    messagingSenderId: "285790474749",
    appId: "1:285790474749:web:240e8da8e64c3d00aac994"
};


export const createUserProfileDocument = async (userAuth, additionalDAta) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalDAta
            })
            
    } catch (error) {
        console.log('erro creating user', error.message);
        }
    }

    return userRef;

};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider)

    .then(function (authData) {
        console.log(authData);
    }).catch(function (error) {
        console.log(error);
    });


export default firebase;