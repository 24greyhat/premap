import {useState} from 'react';
import logo from '../../assets/images/logo.png';

import Container from '@mui/material/Container';
import { TopBar } from '../../components/Home/TopBar';



function Home() {


    return (
        <Container 
          sx={{
          bgcolor: 'background.default',
        }}
          className='min-w-[100svw] min-h-[100svh]'
        >
          <TopBar />
        </Container>
    )
}

export default Home;
