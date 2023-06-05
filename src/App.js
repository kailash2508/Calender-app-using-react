import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const d = new Date();
  const [date, setDate] = useState(d.getDate());
  const [day, setDay] = useState(d.getDay());
  const [mon, setMon] = useState(d.getMonth());
  const [year, setYear] = useState(d.getFullYear());
  const [d0, setD0] = useState();
  const [c, setC] = useState();
  useEffect(() => {
    const d1 = [];
    const d2 = [];
    const d3 = [];
    const d4 = [];
    const d5 = [];
    const d6 = [];
    const d7 = [];
    const days = new Date(year, mon + 1, 0).getDate();
    for (let i = 0; i < days; i++) {
      let x = new Date('' + year + '-' + (mon + 1) + '-' + (i + 1)).getDay();
      if (x === 0 && i === 0) {
        d2.push(0);
        d3.push(0);
        d4.push(0);
        d5.push(0);
        d6.push(0);
        d7.push(0);
        d1.push(i + 1);
      } else if (x === 0) {
        d1.push(i + 1);
      } else if (x === 1) {
        d2.push(i + 1);
      } else if (x === 2 && i === 0) {
        d2.push(0);
        d3.push(i + 1);
      } else if (x === 2) {
        d3.push(i + 1);
      } else if (x === 3 && i === 0) {
        d2.push(0);
        d3.push(0);
        d4.push(i + 1);
      } else if (x === 3) {
        d4.push(i + 1);
      } else if (x === 4 && i === 0) {
        d2.push(0);
        d3.push(0);
        d4.push(0);
        d5.push(i + 1);
      } else if (x === 4) {
        d5.push(i + 1);
      } else if (x === 5 && i === 0) {
        d2.push(0);
        d3.push(0);
        d4.push(0);
        d5.push(0);
        d6.push(i + 1);
      } else if (x === 5) {
        d6.push(i + 1);
      } else if (x === 6 && i === 0) {
        d2.push(0);
        d3.push(0);
        d4.push(0);
        d5.push(0);
        d6.push(0);
        d7.push(i + 1);
      } else if (x === 6) {
        d7.push(i + 1);
      }
    }
    const a = d1.map((val) => (
      <p
        id={val}
        style={{ color: val === date ? 'red' : 'black' }}
        onClick={(e) => changeColor(e)}
      >
        {val}
      </p>
    ));
    const b = d2.map((val) => (
      <p
        id={val}
        style={{ color: val === date ? 'red' : 'black' }}
        onClick={(e) => changeColor(e)}
      >
        {val}
      </p>
    ));
    const c = d3.map((val) => (
      <p
        id={val}
        style={{ color: val === date ? 'red' : 'black' }}
        onClick={(e) => changeColor(e)}
      >
        {val}
      </p>
    ));
    const e = d4.map((val) => (
      <p
        id={val}
        style={{ color: val === date ? 'red' : 'black' }}
        onClick={(e) => changeColor(e)}
      >
        {val}
      </p>
    ));
    const f = d5.map((val) => (
      <p
        id={val}
        style={{ color: val === date ? 'red' : 'black' }}
        onClick={(e) => changeColor(e)}
      >
        {val}
      </p>
    ));
    const g = d6.map((val) => (
      <p
        id={val}
        style={{ color: val === date ? 'red' : 'black' }}
        onClick={(e) => changeColor(e)}
      >
        {val}
      </p>
    ));
    const h = d7.map((val) => (
      <p
        id={val}
        style={{ color: val === date ? 'red' : 'black' }}
        onClick={(e) => changeColor(e)}
      >
        {val}
      </p>
    ));
    setD0([a, b, c, e, f, g, h]);
  }, [mon, year]);
  function changeColor(e) {
    for (let i = 0; i <= new Date(year, mon + 1, 0).getDate(); i++) {
      document.getElementById(i).style.border = 'initial';
    }
    document.getElementById(e.target.innerHTML).style.border = '2px solid grey';
  }
  console.log(d0);
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
    if (mon === d.getMonth() && year === d.getFullYear()) {
      setDate(d.getDate());
    } else {
      setDate(32);
    }
  }
  function incYear() {
    setYear((pre) => pre + 1);
    if (mon === d.getMonth() && year === d.getFullYear()) {
      setDate(d.getDate());
    } else {
      setDate(32);
    }
  }
  function decMon() {
    setMon((pre) => (pre > 0 ? pre : setYear(year - 1)));
    setMon((pre) => (pre > 0 ? pre - 1 : 11));
    if (mon === d.getMonth() && year === d.getFullYear()) {
      setDate(d.getDate());
    } else {
      setDate(32);
    }
  }
  function incMon() {
    setMon((pre) => (pre < 11 ? pre : setYear(year + 1)));
    setMon((pre) => (pre < 11 ? pre + 1 : 0));
    if (mon === d.getMonth() && year === d.getFullYear()) {
      setDate(d.getDate());
    } else {
      setDate(32);
    }
  }
  return (
    <div className="card">
      <div className="cardHeader">
        <button onClick={decYear}>-</button>
        <div className="cardMain">{year}</div>
        <button onClick={incYear}>+</button>
      </div>
      <div className="cardHeader">
        <button onClick={decMon}>-</button>
        <div className="cardMain">{months[mon]}</div>
        <button onClick={incMon}>+</button>
      </div>
      <div className="dayCol">
        <div className="day">
          Mon
          <div>{d0 ? d0[1] : ''}</div>
        </div>
        <div className="day">
          Tue<div>{d0 ? d0[2] : ''}</div>
        </div>
        <div className="day">
          Wed<div>{d0 ? d0[3] : ''}</div>
        </div>
        <div className="day">
          Thu<div>{d0 ? d0[4] : ''}</div>
        </div>
        <div className="day">
          Fri<div>{d0 ? d0[5] : ''}</div>
        </div>
        <div className="day">
          Sat<div>{d0 ? d0[6] : ''}</div>
        </div>
        <div className="day">
          Sun<div>{d0 ? d0[0] : ''}</div>
        </div>
      </div>
    </div>
  );
}
