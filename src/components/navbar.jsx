import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar">
			<a className="nav" href="#">
				<h2>
					Navbar<span className="totalCount">{totalCounters}</span>
				</h2>
			</a>
		</nav>
	);
};

export default NavBar;
