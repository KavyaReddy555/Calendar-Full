import React from "react";

const Day = ({
  fullDate,
  onClick,
  selected,
  hovering,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (fullDate == null) {
    return <div className="EmptyStateDay" id="day-empty" />;
  }

  let className = "Day";
  if (selected) {
    className = "Day Day--selected";
  } else if (hovering) {
    className = "Day Day--hovering";
  }

  const date = fullDate.getDate();

  return (
    <button
      data-testid={"day-" + date}
      className={className}
      onClick={() => onClick(date)}
      onMouseEnter={() => onMouseEnter(date)}
      onMouseLeave={onMouseLeave}
    >
      {date}
    </button>
  );
};

export default Day;
