import React from 'react';

const TrustBox = () => {
	// Create a reference to the <div> element which will represent the TrustBox
	const ref = React.useRef(null);
	React.useEffect(() => {
		// If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
		// If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
		// When it is, it will automatically load the TrustBox.
		if (window.Trustpilot) {
			window.Trustpilot.loadFromElement(ref.current, true);
		}
	}, []);

	// FOR TEST: * problem only `bricks` works (18.05.23)
	// 6283d3ff8b0c428e7f3882a4 - bricks
	// 46d46ce6000064000500c2ad - nike
	// 5f0237a59ab8290001504faa - realt
	// 6283d3ff8b0c428e7f3882a4 - bank

	return (
		<div
			ref={ref} // We need a reference to this element to load the TrustBox in the effect.
			className="trustpilot-widget" // Renamed this to className.
			data-template-id="53aa8912dec7e10d38f59f36"
			data-businessunit-id="60ab561bcff30c000154d6d1"
			data-theme="light"
			data-locale="en-GB"
			data-style-height="130px"
			data-style-width="100%"
			data-stars="5"
			data-schema-type="Organization"
		// [ long list of data attributes...]
		>
			<a href="https://www.trustpilot.com/review/bricks.co" target="_blank" rel="noopener"> Trustpilot
			</a>
		</div>
	);
};
export default TrustBox;