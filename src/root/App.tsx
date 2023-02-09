import React from 'react';
import '../styles/App.css';
import { createTheme, Grid, ThemeProvider} from '@mui/material';

import data from '../static/data/projects.json';

import Project from '../components/project';
import Header from '../components/header';

export interface ProjectData {
  name: string,
  role: string,
  desc: string,
  techSkills: string[],
  leadSkills: string[],
  imagesURLs: string[],
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#175676'
    },
    secondary: {
      main: '#32021f'
    },
    success: {
      main: '#f1e9db'
    }
  },
  spacing: 4,
});

function App() {

  const projectsArray: ProjectData[] = Object.values(JSON.parse(JSON.stringify(data)));

  console.log("Project Data: ", projectsArray);
  
  const projects = projectsArray.map((data,id)=>{
    console.log("Data: ", data);
    return (
      <Project parentData={data}/>
    )
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <Header />

        <Grid
        p={10}
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        >
          {projects ? projects : <h1>Projects not found</h1>}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
