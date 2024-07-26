import React from "react";

export default function Header() {
	return (
		<React.Fragment>
			<header id="navbar" className="header-nav" role="banner">
				<div className="tmp-container">
					<div className="header-search">
						<a
							className="logo-header"
							href="https://www.usgs.gov/"
							title="Home"
						>
							<img className="img" src="/layoutImages/logo.png" alt="Home" />
						</a>
						<form
							action="https://www.usgs.gov/science-explorer-results"
							method="GET"
							id="search-box"
						>
							<div className="fa-wrapper">
								<label htmlFor="se_search" className="only">
									Search
								</label>
								<input
									id="se_search"
									type="search"
									name="es"
									placeholder="Search"
								/>
								<button className="fa fa-search" type="submit">
									<span className="only">Search</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
