import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import Progressbar from "./ProgressBar";
import CardsChange from "./CardsChange";

export default function Mainpage() {
  const [cardnum,setCardnum] = useState(0);
 
  return (
    <div className="container-mainpage">
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        sx={{ marginTop: "50px" }}
      >
        Save time and write with confidence
      </Typography>
      <Button
         className="upgradeButton"
        sx={{
          textTransform: "capitalize",
          padding: "0.6rem",
          width: "auto",
          pl: "5%",
          pr: "5%",
          borderRadius: "20px",
          backgroundColor: "#499557",
          marginTop: "20px",
        }}
        variant="contained"
      >
        Upgrade to QuillBot Premium
      </Button>
      <div className="cards">
        <div className="cards-change">
          <CardsChange item={cardnum}/>
        </div>
        <div className="progressbar">
        <div onClick={()=>setCardnum(0)}>
          <Progressbar
            heading="Increase your productivity"
            text="Paraphrase more text at once to finish writing faster."
          />
          </div>
          <div onClick={()=>setCardnum(1)}>
          <Progressbar
            heading="Access all modes"
            text="Get maximum control over how you paraphrase."
          />
          </div>
          <div onClick={()=>setCardnum(2)}>
          <Progressbar
            heading="Scan for plagiarism"
            text="Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized."
            />
            </div>
            <div onClick={()=>setCardnum(3)}>
          <Progressbar
            heading="Compare all mode outputs at once"
            text="Paraphrase in and compare outputs from all seven modes."
          />
          </div>
        </div>
      </div>
    </div>
  );
}
