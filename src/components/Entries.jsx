import React, { useState } from "react";
import styles from "./Entries.module.css";
import UpdateModal from "./UpdateModal";

const Entries = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      {showUpdateModal && (
        <UpdateModal
          id={props.id}
          date={props.date}
          vehicle={props.vehicle}
          vehModel={props.vehModel}
          vehModelId={props.vehModelId}
          distance={props.distance_value}
          unit={props.distance_unit}
          carbon={props.carbon_kg}
          getEntries={props.getEntries}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}

      <div className={`row ${styles.entry}`}>
        <div className="col-sm-2">{props.date}</div>
        <div className="col-sm-2">{props.vehicle}</div>
        <div className="col-sm-2">{props.vehModel}</div>
        <div className="col-sm-2">{props.distance}</div>
        <div className="col-sm-2">{props.carbon}</div>
        <button className="col-sm-1">Update</button>
        <button className="col-sm-1">Delete</button>
      </div>
    </>
  );
};

export default Entries;
