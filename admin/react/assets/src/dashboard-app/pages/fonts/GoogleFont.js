import React from "react";

const GoogleFont = () => {
	const googleFonts = window.bsf_custom_fonts_admin.googleFonts;

	console.log(googleFonts);
	return (
		<div>
			<div>
				<p className="mb-5">
					Add Google fonts assets and font face definitions to your
					currently active theme
				</p>
				<div>
					<label className="w-full text-sm text-heading" htmlFor="">
						Select font
					</label>
					<div className="mt-1.5">
						<select className="w-full" name="" id="">
							<option value="">Select a font family...</option>
							{Object.keys(googleFonts).map((key) => (
								<option value="">{key}</option>
							))}
						</select>
					</div>
				</div>
				<div className="my-5">
					<button className="button button-primary">Save Font</button>
				</div>
			</div>
		</div>
	);
};

export default GoogleFont;
