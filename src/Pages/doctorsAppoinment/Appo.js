import React from "react";
import AvailableAppoinment from "./AvailableAppoinment";
import DoctorsAppoinment from "./DoctorsAppoinment";

const Appo = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <DoctorsAppoinment date={date} setDate={setDate}></DoctorsAppoinment>
      <AvailableAppoinment date={date}></AvailableAppoinment>
    </div>
  );
};

export default Appo;
