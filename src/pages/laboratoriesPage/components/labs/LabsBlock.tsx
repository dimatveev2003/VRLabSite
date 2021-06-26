import { LabsBlock } from "core/components/helpers/BlockHelpers";
import LabTile from "./LabTile";

const LabBlock = (props: { labs: ILaboratoryModel[] }) => {
	const { labs } = props;

	return (
		<LabsBlock element="labs">
			<h1 className="labs__title">Лабораторные работы</h1>
			<LabsBlock element="labs" modifier="row">
                {labs.map((lab, id) => (
                    <LabTile lab={lab} key={`labtile_${lab.id}_${id}`} />
                ))}
            </LabsBlock>
		</LabsBlock>
	);
};

export default LabBlock;
