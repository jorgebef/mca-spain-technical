import { useState } from "react";
import style from "./Topbar.module.css";
import { Link } from "react-router-dom";
export const Topbar = () => {
	const [pending, setPending] = useState(false);

	return (
		<div className={style.topbar}>
			<Link to="/">Podcaster</Link>
			{pending && <div className={style.indicator}></div>}
		</div>
	);
};
