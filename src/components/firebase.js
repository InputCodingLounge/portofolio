import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import { Database } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBiS1wYgU7mq_VSloGLJLLHsQ1Y_m2mrck",
  databaseURL: "https://portofolio-b0512-default-rtdb.europe-west1.firebasedatabase.app/",
  authDomain: "portofolio-b0512.firebaseapp.com",
  projectId: "portofolio-b0512",
  storageBucket: "portofolio-b0512.appspot.com",
  messagingSenderId: "278865129937",
  appId: "1:278865129937:web:6f1bb4cc667976de7bf0f0",
  measurementId: "G-JT7JLC7263"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export const fetchProjects = (callback) => {
    const projecysRef = db.ref("Projects");

    projectsRef.on("value", (snapshot) => {
        const projects = snapshot.val();
        if(data){
            const projectsArray = Object.values(data).reverse;
            callback(projectsArray);
        }
    });

    return () => {
        projectsRef.off('value');
    };

};

export const fetchSkills = (callback) => {
    const projecysRef = db.ref("Skills");

    projecysRef.on("value", (snapshot) => {
        const projects = snapshot.val();
        if(data){
            const projectsArray = Object.values(data);
            callback(projectsArray);
        }
    });

    return () => {
        skillsRef.off('value');
    };

};