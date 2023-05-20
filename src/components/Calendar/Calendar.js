import React, { useState } from "react";
import "./Calendar.css";
import Month from "./Month";
import CONSTANTS from "./Constants";
import WeekDayBar from "./WeekDayBar";

const Calendar = ({ date }) => {
  const dateArr = date.split("/");

  const [dateNumber, setdateNumber] = useState(parseInt(dateArr[0]));
  const [monthNumber, setmonthNumber] = useState(parseInt(dateArr[1] - 1));
  const [yearNumber, setyearNumber] = useState(parseInt(dateArr[2]));
  const monthName = CONSTANTS.months[monthNumber];

  const renderYear = (yearNumber) => {
    let content = [];
    for (let i = 1970; i < 2030; i++) {
      content.push(
        <option key={i} value={i} selected={i == yearNumber}>
          {parseInt(i)}
        </option>
      );
    }
    return content;
  };

  return (
    <>
      <div className="CalendarContainer">
        <div className="Title">
          <button
            onClick={() =>
              setyearNumber((prevState) => parseInt(prevState) - 1)
            }
            disabled={yearNumber < 1971}
          >
            &lt;&lt;
          </button>
          <button
            onClick={() =>
              setmonthNumber((prevState) => parseInt(prevState) - 1)
            }
            disabled={monthNumber < 1}
          >
            &lt;
          </button>

          {/* <span className="MonthTitle" data-testid="month">
            {monthName}
          </span> */}
          <select
            data-testid="month"
            id="dropdownMonth"
            onChange={(e) => {
              setmonthNumber(CONSTANTS.months.indexOf(e.target.value));
            }}
          >
            {CONSTANTS.months.map((month, index) => [
              <option key={month} value={month} selected={month == monthName}>
                {month}
              </option>,
            ])}
          </select>
          <select
            id="dropdownYear"
            onChange={(e) => setyearNumber(e.target.value)}
          >
            {renderYear(yearNumber)}
          </select>
          <button
            onClick={(prevState) =>
              setmonthNumber((prevState) => parseInt(prevState) + 1)
            }
            disabled={monthNumber > 10}
          >
            &gt;
          </button>

          <button
            onClick={(prevState) =>
              setyearNumber((prevState) => parseInt(prevState) + 1)
            }
            disabled={yearNumber > 2028}
          >
            &gt;&gt;
          </button>
        </div>
        <WeekDayBar />
        <Month
          date={dateNumber}
          month={monthNumber}
          year={yearNumber}
          onDayClick={(day) => setdateNumber(day)}
        />
      </div>

      <div className="DisplayDate">
        <span className="showDate">Date Selected : </span>
        <br></br>
        <div>
          {dateNumber}/{monthNumber + 1}/{yearNumber}
        </div>
      </div>
    </>
  );
};

export default Calendar;
