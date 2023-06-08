import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const d = new Date();
  const [date, setDate] = useState(d.getDate());
  const [mon, setMon] = useState(d.getMonth());
  const [year, setYear] = useState(d.getFullYear());
  const [calenderState, setCalenderState] = useState([]);

  useEffect(() => {
    let displayArray = [
      <div className="calenderDays">Mon</div>,
      <div className="calenderDays">Tue</div>,
      <div className="calenderDays">Wed</div>,
      <div className="calenderDays">Thu</div>,
      <div className="calenderDays">Fri</div>,
      <div className="calenderDays">Sat</div>,
      <div className="calenderDays">Sun</div>,
    ];
    const days = new Date(year, mon + 1, 0).getDate();
    let x = new Date('' + year + '-' + (mon + 1) + '-' + (0 + 1)).getDay();
    x = x === 0 ? 7 : x;
    let z = mon === d.getMonth() && year === d.getFullYear() ? true : false;
    const prevDays = new Date(year, mon, 0).getDate();
    for (let i = x - 1; i > 0; i--) {
      // console.log(prevDays - i+1);
      displayArray.push(
        <div className="prevMonth calenderDays">
          <span>{prevDays - i + 1}</span>
        </div>
      );
    }
    for (let i = 1; i <= days; i++) {
      displayArray.push(
        <div
          className="currMon calenderDays dark-border"
          id={i}
          onClick={(e) => changeColor(e)}
          style={{ backgroundColor: i === date && z ? 'blue' : '' }}
        >
          {i}
        </div>
      );
    }
    let y = 49 - displayArray.length;
    for (let i = 1; i <= y; i++) {
      displayArray.push(
        <div className="prevMonth calenderDays">
          <span>{i}</span>
        </div>
      );
    }
    setCalenderState(displayArray);
  }, [mon, year, date]);
  function changeColor(e) {
    console.log(e.target.innerHTML);
    for (let i = 1; i <= new Date(year, mon + 1, 0).getDate(); i++) {
      document.getElementById(i).classList.remove('light-border');
      document.getElementById(i).classList.add('dark-border');
    }
    document.getElementById(e.target.innerHTML).classList.add('light-border');
  }
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  function decYear() {
    setYear((pre) => pre - 1);
  }
  function incYear() {
    setYear((pre) => pre + 1);
  }
  function decMon() {
    setMon((pre) => (pre > 0 ? pre : setYear(year - 1)));
    setMon((pre) => (pre > 0 ? pre - 1 : 11));
  }
  function incMon() {
    setMon((pre) => (pre < 11 ? pre : setYear(year + 1)));
    setMon((pre) => (pre < 11 ? pre + 1 : 0));
  }
  return (
    <div className="card">
      <div className="cardHeader">
        <div onClick={decYear}>{'<'}</div>
        <div className="cardMain">{year}</div>
        <div onClick={incYear}>{'>'}</div>
      </div>
      <div className="cardHeader">
        <div onClick={decMon}>{'<'}</div>
        <div className="cardMain">{months[mon]}</div>
        <div onClick={incMon}>{'>'}</div>
      </div>
      <div className="calender-main">{calenderState}</div>
    </div>
  );
}
