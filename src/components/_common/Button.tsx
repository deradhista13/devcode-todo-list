import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { PlusIcon } from "@/assets";

interface ButtonProps {
    variant?: any;
}

export const Button = styled.button`
    ${tw`rounded-full py-3 px-7 text-lg font-semibold self-center justify-self-center text-white w-36 h-[3.25rem] flex items-center justify-center`}

    ${({ variant }: ButtonProps) => {
        switch (variant) {
            case "danger":
                return tw`bg-[#ED4C5C]`;
            case "ghost":
                return tw`bg-[#F4F4F4] text-black`;
            default:
                return tw`bg-[#16ABF8]`;
        }
    }}

  &[disabled=disabled],
  &:disabled {
        ${tw`cursor-not-allowed`}

        svg {
            ${tw`hidden`}
        }
    }
`;

const StyledAddButton = styled(Button)`
    ${tw`flex justify-between items-center bg-[#16ABF8] gap-x-1.5 w-40`}

    svg {
        ${tw`text-2xl`}
    }
`;

const AddButton = ({ onClick, children, ...rest }) => {
    return (
        <StyledAddButton onClick={onClick} {...rest}>
            <PlusIcon />
            {children}
        </StyledAddButton>
    );
};

export default AddButton;
