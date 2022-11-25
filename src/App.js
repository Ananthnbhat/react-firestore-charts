import logo from './logo.svg';
import './App.css';
import React, { useEffect, useReducer, useContext } from 'react';
import Header from './components/Header';
import { collection, setDoc, doc, getDocs, getDoc } from "firebase/firestore";
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

      const docRef = doc(db, "chart-data", "doughnut");
      const docSnap = await getDoc(docRef);
      const doughnutDoc = docSnap.data()
      // useReducer, useMemo and useContext
      dispatch({ labels: doughnutDoc.labels })
      dispatch({ datasets: doughnutDoc.datasets })
    }
    getDataFromFirestore()
  }, []);

  return (
    <div className="app">
      <Header />
      <div className='graph-separator'>
        <div className='doughnut-parent'>
          <DoughnutGraph labels={state.labels} datasets={state.datasets} />
        </div>
        <div className='bargraph-parent'>
          <BarGraph />
        </div>
      </div>
    </div>
  );
}

export default App;
