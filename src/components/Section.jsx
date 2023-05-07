import React from "react";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';

function Section(props) {
  const { date, concept, eventImg, eventTitle, eventLocation, eventDescription } = props;

  return (
    <>
      {props.activeFilter === "all" || concept === props.activeFilter ? (
        <div className="container">
          <div className="event-container">
            <div className="left-side">
              <p className="event-date">{date}</p>
              <p className="event-concept">{concept}</p>
            </div>
            <div className="right-side">
              <div className="event-img-box">
                <img src={eventImg} alt="" />
              </div>
              <div className="event-info-box">
                <h2 className="event-title">{eventTitle}</h2>
                <div className="location-box">
                    <span className="location-icon"><MdLocationPin /></span>
                    <p className="event-location">{eventLocation}</p>
                </div>
                <p className="event-description">{eventDescription}</p>
              </div>
              <div className="callender-container">
                <button>Bilet Al</button>
                <div className="add-call-box">
                  <span className="add-icon"><IoMdAddCircleOutline /></span>
                  <p>Takvime Ekle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Section;
