import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	var digitOne = props.seconds + "";
	var value = digitOne.split("");
	value.reverse();

	return (
		<div className="container">
			<div className="row bg-dark text-light m-3">
				<div className="col-1 " />
				<div className="col-1 " />
				<div className="col-2">
					<div>
						<i className="far fa-clock fa-5x py-3" />
					</div>
				</div>
				<div className="col-1 ">
					<p className="number">{value[5] ? value[5] : 0}</p>
				</div>
				<div className="col-1">
					<p className="number">{value[4] ? value[4] : 0}</p>
				</div>
				<div className="col-1">
					<p className="number">{value[3] ? value[3] : 0}</p>
				</div>
				<div className="col-1">
					<p className="number">{value[2] ? value[2] : 0}</p>
				</div>
				<div className="col-1">
					<p className="number">{value[1] ? value[1] : 0}</p>
				</div>
				<div className="col-1">
					<p className="number">{value[0]}</p>
				</div>
				<div className="col-1" />
				<div className="col-1" />
			</div>
		</div>
	);
}

Home.propTypes = {
	seconds: PropTypes.number
};
