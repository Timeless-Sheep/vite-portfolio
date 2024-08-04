import React from "react";

const Profile = () => {
  const profilePic =
    "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/378140678_24407785452141903_3425875333014855176_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AvInBliXCoQQ7kNvgEN0LTA&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYA7W-FrKgWyWA2Qg6ivrd9H5ohiPX7TnthNUcP-o9DfNg&oe=66B580DF";
  return (
    <div className="hero bg-base-200 h-auto p-5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={profilePic}
          className="max-w-sm rounded-lg shadow-2xl max-h-60"
        />
        <div>
          <h1 className="text-5xl font-bold">Jon Von Ivar Lita</h1>
          <p className="py-6">
            Bachelor of Science in Information Technology graduate, specializing
            in Front-end Web Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
