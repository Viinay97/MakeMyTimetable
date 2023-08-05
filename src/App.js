import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timetable from './Timetable';
import ShowTimetable from './Showtt';

const App = () => {
  return (
    <Router>
    <div>
      {/* Define the routes */}
      <Routes>
          <Route path="/" element={<Timetable />} />
          <Route path="/tt" element={<ShowTimetable />} />
          <Route path="/tt/:selectedElectives" element={<ShowTimetable />} />
        </Routes>
    </div>
  </Router>
  );
};

export default App;
