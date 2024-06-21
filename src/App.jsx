import { useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import './App.css'

function App() {
    return (
        <Box display="flex" alignItems={"center"} justifyContent={"center"} sx={{ width: "100%", height: "100%", backgroundColor: "#242424", color: "white" }}>
            <Box textAlign={"center"}>
                <ConstructionRoundedIcon sx={{height: "5rem", width: "5rem"}}/>
                <Typography variant='h2' component="h1">Under Construction</Typography>
                <Typography variant='h5' component="h2">cat2.link Website Replacement</Typography>
            </Box>

        </Box>
    )
}

export default App
