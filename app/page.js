import ButtonHd from "@/components/ButtonHd";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  return (
    <div>
      Home
      <div className="m-5">
        <ButtonHd />
        <SocialMediaIcons />
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Home;
