import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { useState } from "react";
import { Button } from "@mui/material";

import GifBoxIcon from "@mui/icons-material/GifBox";

export default function CreatePost() {
	const [color, setcolor] = useState("black");
	const [msg, setmsg] = useState("");
	const [serachGIf, SetSearchGif] = useState("");

	function ChangeTextColor(e) {
		setcolor(e.target.value);
		document.querySelector("#fullWidth").style.color = color;
	}
	function HandleTextChange(e) {
		setmsg(e.target.value);
	}

    function HandleSearcGif(e){
        SetSearchGif(e.target.value)

    }
    
	return (
		<div className="postBox">
			<Box
				sx={{
					width: 500,
					maxWidth: "100%",
					display: "flex",
				}}
			>
				<AccountCircleSharpIcon sx={{ fontSize: 60 }} />

				<TextField
					fullWidth
					label="Message"
					id="fullWidth"
					// value={{msg}}
					onChange={(e) => HandleTextChange(e)}
				/>
				<input
					type="color"
					className="ColorChange"
					onChange={(e) => ChangeTextColor(e)}
				></input>
			</Box>
			<div className="giphy_box">
				<div className="giphy">
					<GifBoxIcon sx={{ fontSize: 40, color: "green" ,marginLeft:"2%"}} />
					<input type="search" name="" id="gifSearch"  onChange={(e)=> HandleSearcGif(e)}/>
				</div>
				<Button variant="contained" className="button-post">
					Post
				</Button>
			</div>
		</div>
	);
}
