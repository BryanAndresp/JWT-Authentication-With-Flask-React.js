import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
						width="100"
						height="60"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">sign out</button>
				</Link>
			</div>
		</nav>
	);
};
