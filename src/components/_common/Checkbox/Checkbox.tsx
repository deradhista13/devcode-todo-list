import {
    CheckboxWrapper,
    CheckboxIndicator,
} from "@/components/_common/Checkbox/Checkbox.styles";
import { ChecklistBolderIcon } from "@/assets";

const Checkbox = ({ checked, onChange, dataCy }) => {
    return (
        <>
            <CheckboxWrapper
                data-cy={dataCy}
                checked={checked}
                onCheckedChange={(val) => onChange(val)}
            >
                <CheckboxIndicator>
                    <ChecklistBolderIcon />
                </CheckboxIndicator>
            </CheckboxWrapper>
        </>
    );
};

export default Checkbox;
