import logo from './logo.svg';
import './App.css';
import React, { useEffect, useReducer, useContext } from 'react';
import { collection, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from './firebase';

function App() {

  useEffect(() => {
    async function getDataFromFirestore() {

      // await setDoc(doc(db, "chart-data", "bargraph"), );

      const querySnapshot = await getDocs(collection(db, "chart-data"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().labels.forEach((label) => console.log(label))}`);
        if (doc.id === "doughnut") {
          // useReducer, useMemo and useContext
        }
      });
    }
    getDataFromFirestore()
    // return () => {
    //   cleanup
    // };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
