import React from 'react';
import courses from './BasketData';
import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import './App.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = ['9:00 - 11:00', '11:00 - 1:00', '3:00 - 5:00', '5:00 - 7:00'];

const ShowTimetable = () => {
  const params = useParams();
  const selectedElectives = JSON.parse(decodeURIComponent(params.selectedElectives || '[]'));
  const downloadPDF = () => {
    const content = document.getElementById('pdfContent');
    // Create the options for the PDF
    const options = {
      margin: 10, // You can adjust margins if needed
      filename: 'my_time_table.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    // Generate the PDF
    html2pdf().from(content).set(options).save();
  }
  return (
    <>
    <div id='pdfContent'>
      <h2 className='title1'>Time-Table B.Tech 7th Sem</h2>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day/Time</th>
            {timeSlots.map((slot) => (
              <th key={slot}>{slot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              {timeSlots.map((slot, index) => {
                let courseAbbr = '', type = '', room = '';
                selectedElectives.forEach((course) => {
                  if (course.type.L && course.type.L.day === day && +course.type.L.slot === index + 1) {
                    courseAbbr = course.abbr + ' (L) ' + course.type.L.room;
                  } else if (course.type.T && course.type.T.day === day && +course.type.T.slot === index + 1) {
                    courseAbbr = course.abbr + ' (T) ' + course.type.T.room;
                  } else if (course.type.P && course.type.P.day === day && +course.type.P.slot === index + 1) {
                    courseAbbr = course.abbr + ' (P) ' + course.type.P.room;
                  } else if (course.type.PM && course.type.PM.day === day && +course.type.PM.slot === index + 1) {
                    courseAbbr = course.abbr;
                  }
                });
                return (
                  <>
                    <td key={slot}>{courseAbbr}</td>
                  </>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className='title2'>IIIT Allahabad</h2>
    </div>
    <button onClick={downloadPDF}>Download PDF</button>
    </>
  );
};

export default ShowTimetable;
