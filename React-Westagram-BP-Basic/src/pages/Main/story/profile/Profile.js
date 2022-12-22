import React from "react";
import "./profile.scss";

const Profile = () => {
  return (
    <>
      {STORY_PROFILE.map(profile => {
        return (
          <li key={profile.id}>
            <button className="storyProfile">
              <div className="profileImage">
                <img
                  className="userProfileImage"
                  src="/images/profile.png"
                  alt="profile"
                />
              </div>
              <div>
                <div className="userAccount">{profile.account}</div>
              </div>
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Profile;

const STORY_PROFILE = [
  { id: 1, account: "wecode" },
  { id: 2, account: "justcode" },
  { id: 3, account: "hello" },
  { id: 4, account: "dev_" },
  { id: 5, account: "react" },
  { id: 6, account: "world" },
];
