import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { useState } from "react";
import { Button } from "@mui/material";

import GifBoxIcon from "@mui/icons-material/GifBox";
import VideoTag from "./VideoTag";
import DisplayPost from "./DisplayPost";

export default function CreatePost() {
	const [color, setcolor] = useState("black");
	const [loading, setloading] = useState(false);
	const [msg, setmsg] = useState("");
	const [serachGIf, SetSearchGif] = useState("");
	const [gifs, setgifs] = useState([]);
	const [gif, setgif] = useState("");
	const [posts, setPosts] = useState([]);
	const [Gifadded, setGifadded] = useState(false);

	function ChangeTextColor(e) {
		setcolor(e.target.value);
		document.querySelector("#fullWidth").style.color = color;
	}
	function HandleTextChange(e) {
		setmsg(e.target.value);
	}

	function HandleSearcGif(e) {
		SetSearchGif(e.target.value);
		GifSearch(serachGIf);
	}
	async function GifSearch(param) {
		try {
			const res = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=IuFc5UUeLMNkA6xYqv7ceYCuZGkmXQ21&q=${param}&limit=10&offset=5&rating=g&lang=en`
			);
			const data = await res.json();
			// console.log(data.data)
			setgifs(data.data);
			setloading(true);
		} catch (error) {
			console.log(error);
		}
	}

	function AddtoMessage(value) {
		setgif(value);
		setGifadded(true);
		document.querySelector("#error").style.color = color;
	}

	function FinalSubmission() {
		if (msg.length !== 0 && gif.length !== 0) {
			const obj = {
				msg,
				gif,
			};
			setPosts([...posts, obj]);
			setmsg("")
			setGifadded(false)
			

		} else {
			alert("either message or gif is missing");
		}
	}
	return (
		<>
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
						required={true}
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
						<GifBoxIcon
							sx={{
								fontSize: 40,
								color: "green",
								marginLeft: "2%",
							}}
						/>
						<input
							type="search"
							name=""
							id="gifSearch"
							onChange={(e) => HandleSearcGif(e)}
						/>
						<p id="error">{Gifadded ? "Gif selected" : null}</p>
					</div>
					<Button
						variant="contained"
						className="button-post"
						onClick={FinalSubmission}
					>
						Post
					</Button>
				</div>

				<div className="showsDiv" hidden={loading ? false : true}>
					{gifs.map((e) => {
						return (
							<div
								key={e.import_datetime}
								className="singleDiv"
								onClick={() =>
									AddtoMessage(e.images.original.url)
								}
							>
								<VideoTag data={e.images.original.url} />
							</div>
						);
					})}
				</div>
			</div>
			<div className="DisplayDiv">
				<DisplayPost data={posts} />
			</div>
		</>
	);
}
