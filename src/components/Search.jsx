import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useHistory } from "react-router-dom";
import "./search.css";
function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.startDate);
  };
  return (
    //  DATE PICKER
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelection} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button
        onClick={() => {
          history.push("./search");
        }}
      >
        Search Airbnb
      </Button>
    </div>
  );
}

export default Search;
