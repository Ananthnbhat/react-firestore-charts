import React, { useEffect, useReducer } from 'react';
import { collection, setDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { DoughnutGraph, BarGraph } from './Graphs'
import { getAuth } from 'firebase/auth'
import { Box } from '@mui/material'

function Dashboard() {

    const auth = getAuth();

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
            {auth.currentUser ?
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: 300, maxHeight: 300, display: 'flex', flex: 1, justifyContent: 'center' }}>
                        <DoughnutGraph labels={state.labels} datasets={state.datasets} />
                    </Box>
                    <Box sx={{ width: 300, height: 300, flex: 1 }}>
                        <BarGraph />
                    </Box>
                </Box>
                :
                <>
                    {/* Improve below tags */}
                    <h3>&nbsp;&nbsp;Please sign in using the icon on top right corner</h3>
                    <br />
                    <br />
                    <br />
                    <p>&nbsp;&nbsp;Show content to Guest users below</p>
                </>}

        </div>
    );
}

export default Dashboard;
