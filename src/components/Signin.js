import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Card, CardContent, Button, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Signin = () => {

    return (
        <Box
            component='form'
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}
        >
            <Card sx={{ maxWidth: 500, width: 500 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <>
                        <FormControl sx={{ m: 2 }}>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" type='text' />
                        </FormControl>
                        <FormControl sx={{ m: 2 }}>
                            <InputLabel htmlFor="my-input">Password</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" type='password' />
                        </FormControl>
                    </>
                    <>
                        <Button sx={{ m: 2 }} variant='contained'>Login</Button>
                        <Button sx={{ width: 100, display: 'flex', alignSelf: 'center' }} type='reset'>Reset</Button>
                    </>
                </CardContent>
            </Card>
        </Box >
    )

}

export default Signin;