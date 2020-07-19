import React from "react";
import { connect } from "react-redux";
import { getDailyPhoto } from "../../actions";
import "./DailyPhoto.module.css";

const DailyPhoto = ({ dailyPhotoObject, getDailyPhoto }) => {
  if (!dailyPhotoObject) {
    getDailyPhoto();
  }
  console.log("1", dailyPhotoObject);
  return (
    <>
      {dailyPhotoObject && (
        <img src={dailyPhotoObject.url} className="daily-photo" />
      )}
    </>
  );
};

export default connect((state) => ({ dailyPhotoObject: state.dailyPhoto }), {
  getDailyPhoto,
})(DailyPhoto);
