import './index.css'
import 'react-calendar/dist/Calendar.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import TodoCalendar from './components/main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoCalendar/>
  </React.StrictMode>
);


reportWebVitals();
