import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <>
      <div className="profile-container">
        <div className="header">Account Settings</div>

        <div className="profile-content-container">
          <div className="profile-image-container">
            <img src="/images/user.png" alt="Profile" id="profile-image" />
            <img
              src="/images/camera.svg"
              alt="Camera"
              className="edit-profile-icon"
            />
          </div>
          <div className="profile-details-container">
            <p id="profile-name">Marry Doe</p>
            <p id="profile-email">marry.doe@example.com</p>
          </div>
          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="empty-container"></div>
      </div>
    </>
  );
};

export default ProfilePage;
