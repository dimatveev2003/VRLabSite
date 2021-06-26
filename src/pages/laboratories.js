import WithAuthComponent from "../core/components/auth/WithAuthComponent";
import LabsPage from "../pages/laboratoriesPage/LaboratoriesPage";

export default () => {
	return WithAuthComponent(<LabsPage />)();
};
