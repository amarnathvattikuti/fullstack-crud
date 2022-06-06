import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';


function App() {
  
  return (
    <div className="container-fluid p-0">
    <BrowserRouter>
    <Navbar/>
      <Routes>      
          <Route index element={<ExerciseList />} />
          <Route path="/update/:id" element={<EditExercise />} />
          <Route path="/delete/:id" element={<deleteExercise />} />
          <Route path="/create" element={<CreateExercise />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
