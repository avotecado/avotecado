import React, { Component } from 'react';

class BioPage extends Component {
	render() {
		return (
			<div className="bioPage">
			<svg class="Bio_Green">
		        <path d="M 4 0 L 156 0 C 158.2091369628906 0 160 1.779940962791443 160 3.975609064102173 L 160 31 L 0 31 L 0 3.975609064102173 C 0 1.779940962791443 1.790861129760742 0 4 0 Z">
		        </path>
		    </svg>

		    <svg class="VOTEREC_BAR_BACKGROUND" viewBox="0 0 160 31">
		        <path d="M 4 0 L 156 0 C 158.2091369628906 0 160 1.779940962791443 160 3.975609064102173 L 160 31 L 0 31 L 0 3.975609064102173 C 0 1.779940962791443 1.790861129760742 0 4 0 Z">
		        </path>
		    </svg>

			<svg class="infoArea_Bio">
		    </svg>
		    <div id="BIO">
		        <span>BIO</span>
		    </div>
		    <div id="VOTING_RECORD">
		        <span>VOTING RECORD</span>
		    </div>
		    <div id="InfoText">
		        <span>Current Party: </span>
		        <span className="party">Independent</span>
		        <p><span>Years with Party: 1 </span></p>
		        <p><span>Total Years Active: 1</span></p>
		        <p><span>Phone Number: </span><br/>
		        <span className="party">Unavailable.</span></p>
		        <br/>
				<span>Address:</span><br/>
		        <span className="party">
		            Kennedy Stewart, Mayor <br/>
		            3rd Floor, <br/>
		            City Hall <br/>
		            453 West 12th Ave <br/>
		            Vancouver, BC V5Y 1V4
		        </span>
		    </div>
		    </div>
		);
	}
}

export default BioPage;
