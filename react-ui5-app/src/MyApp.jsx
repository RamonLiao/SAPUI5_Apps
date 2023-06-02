import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function MyApp() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };

  return (
    <div>
      <ShellBar
        logo={<img src="reactLogo.png" alt="Logo" />}
        profile={
          <Avatar>
            <img src="profilePictureExample.png" alt="profile" />
          </Avatar>
        }
        primaryTitle="My App"
        onLogoClick={handleLogoClick}
      >
        {/* ShellBarItem is basically a Button with responsive behaviour and styling adapted to the ShellBar. */}
        <ShellBarItem icon={addIcon} text="Add" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        {/* The Navigate component will redirect the user if the URL doesn’t match
        any given paths. */}
      </Routes>
    </div>
  );
}

// export default MyApp; // cannot use default ??!
