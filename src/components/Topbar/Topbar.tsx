// import { useState } from "react";
import style from "./Topbar.module.css";
import { Link } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";
export const Topbar = () => {
	const pending = useIsFetching();

	return (
		<div className={style.topbar}>
			<Link to="/">Podcaster</Link>
			{pending ? <div className={style.indicator}></div> : null}
		</div>
	);
};
