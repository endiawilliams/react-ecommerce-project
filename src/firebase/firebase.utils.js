import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAqUvDyB8Ota_VAHGquj_R7v7vaS2AXM04",
    authDomain: "crown-clothing-6aa8d.firebaseapp.com",
    projectId: "crown-clothing-6aa8d",
    storageBucket: "crown-clothing-6aa8d.appspot.com",
    messagingSenderId: "964280089908",
    appId: "1:964280089908:web:6f639ba037bb0e70f37961",
    measurementId: "G-N09FSK2CBM"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;