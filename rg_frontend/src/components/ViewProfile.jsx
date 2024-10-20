import React from 'react';
import './ViewProfile.css'; // Import the CSS file

const ViewProfile = ({ name, photo, year, department, publications }) => {
  return (
    <div className="profile-container">
      <img
        src={photo}
        alt={`${name}'s profile`}
        className="profile-photo"
      />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-detail"><strong>Year:</strong> {year}</p>
      <p className="profile-detail"><strong>Department:</strong> {department}</p>
      <p className="profile-detail"><strong>Publications:</strong> {publications}</p>
    </div>
  );
};

export default ViewProfile;