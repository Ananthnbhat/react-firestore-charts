import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Card, CardContent, Button, FormControl, InputLabel, Input } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const auth = getAuth();
    const navigate = useNavigate();

    const handleEmailInput = (event) => {
        console.log(typeof event.target.value)
        setEmail(event.target.value)
    }
    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }

    const handleFormSubmission = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate("/dashboard")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // toast error messages
                console.error(errorCode)
                console.error(errorMessage)
            });
    }

    return (
        <>
            <Box
                component='form'
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}
            >
                <Card sx={{ maxWidth: 500, width: 500 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <>
                            <FormControl sx={{ m: 2 }}>
                                <InputLabel htmlFor="email">Email address</InputLabel>
                                <Input id="email" aria-describedby="my-helper-text" type='text' value={email} onChange={handleEmailInput} />
                            </FormControl>
                            <FormControl sx={{ m: 2 }}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" aria-describedby="my-helper-text" type='password' value={password} onChange={handlePasswordInput} />
                            </FormControl>
                        </>
                        <>
                            <Button sx={{ m: 2 }} variant='contained' onClick={handleFormSubmission}>Login</Button>
                            <Button sx={{ width: 100, display: 'flex', alignSelf: 'center' }} type='reset'>Reset</Button>
                        </>
                    </CardContent>
                </Card>
            </Box >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#aba8a8' }}>
                <span>&nbsp;ananthnbhat2@gmail.com</span>
                <br />
                <span>&nbsp;123456</span>
            </div>
        </>
    )

}

export default Signin;