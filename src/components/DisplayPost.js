export default function DisplayPost({ data }) {
	return (
		<>
			{data.map((e) => {
				return (
					<div>
						<img
							src={e.gif}
							alt="gif"
							height={"100px"}
							width={"100px"}
						/>
						<h4> {e.msg}</h4>
                        <br />
					</div>
				);
			})}
		</>
	);
}
