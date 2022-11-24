import logo from './logo.svg';
import './App.css';
import React, { useEffect, useReducer, useContext } from 'react';
import Header from './components/Header';
import { collection, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from './firebase';
import { DoughnutGraph, BarGraph } from './components/Graphs'

function App() {


  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      labels: [],
      datasets: [],
    }
  );

  useEffect(() => {
    async function getDataFromFirestore() {

      // await setDoc(doc(db, "chart-data", "bargraph"), );

      const querySnapshot = await getDocs(collection(db, "chart-data"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().labels.forEach((label) => console.log(label))}`);
        if (doc.id === "doughnut") {
          // useReducer, useMemo and useContext
          dispatch({ labels: doc.data().labels })
          dispatch({ datasets: doc.data().datasets })
        }
      });
    }
    getDataFromFirestore()
    // return () => {
    //   cleanup
    // };
  }, []);
  return (
    <div className="app">
      <Header />
      <div>
        <DoughnutGraph labels={state.labels} datasets={state.datasets} />
        <BarGraph />
      </div>
    </div>
  );
}

export default App;
