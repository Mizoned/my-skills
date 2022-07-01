import { initializeApp } from "firebase/app";
// import { getDatabase, ref, child, get } from "firebase/database";

const firebase = initializeApp({
    apiKey: "AIzaSyBbQ4p65d13cHxVheKootnKsmil3XyVduc",
    authDomain: "vue-my-skills.firebaseapp.com",
    databaseURL: "https://vue-my-skills-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-my-skills",
    storageBucket: "vue-my-skills.appspot.com",
    messagingSenderId: "766061311916",
    appId: "1:766061311916:web:51f0b021576f0f0d73ac09"
});


// const databaseRef = ref(getDatabase());
// get(child(databaseRef, `Skills`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         this.$store.state.skillList = snapshot.val();
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });