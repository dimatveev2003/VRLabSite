import Popup from "core/components/base/Popup";
import React from "react";
import BundleLab from "./BundleLab";

const BundleLabs = (props: { labs: ILaboratoryModel[] }) => {
	const labs = props.labs;

	return (
		<ol className="labs__bundle_lab-list">
			{labs.map((lab, index) => (
				<BundleLab lab={lab} key={`labinbundle_${lab.name}_${index}`} />
			))}
		</ol>
	);
};

export default BundleLabs;
