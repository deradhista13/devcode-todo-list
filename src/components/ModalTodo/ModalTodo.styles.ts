import tw from "twin.macro";
import styled from "@emotion/styled/macro";

interface ModalTodoProps {
    isSubmitDisabled?: boolean;
}

export const ModalTodoWrapper = styled.div`
    ${tw`bg-white shadow-md rounded-xl w-full gap-x-2.5 w-[50rem]`}
`;

export const ModalSection = styled.div`
    ${tw`flex py-6 px-[1.875rem]`}
`;

export const ModalHeader = styled(ModalSection)`
    ${tw`justify-between border-b`}
`;

export const ModalTitle = styled.h3`
    ${tw`font-semibold text-lg`}
`;

export const ModalCloseButton = styled.button`
    svg {
        ${tw`text-2xl`}
    }
`;

export const ModalContent = styled(ModalSection)`
    ${tw`flex flex-col py-8 gap-y-6`}
`;

export const FieldItem = styled.div`
    ${tw`flex flex-col`}
`;

export const FieldLabel = styled.label`
    ${tw`uppercase font-semibold text-xs mb-2`}
`;

export const FieldInput = styled.input`
    ${tw`w-full border border-[#E5E5E5] rounded-xl px-[1.125rem] py-4 outline-none`}

    &::placeholder {
        ${tw`text-[#A4A4A4]`}
    }

    &:focus {
        ${tw`border-[#16ABF8]`}
    }
`;

export const PrioritySelect = styled.div`
    ${tw`self-start relative`}

    .options {
        ${tw`bg-white rounded-b-xl hidden w-48 overflow-hidden`}
    }

    .options.show {
        ${tw`block absolute top-full left-0`}
    }

    li {
        ${tw`cursor-pointer`}
    }

    li:not(:last-child) {
        ${tw`border-b`}
    }

    li:hover,
    li:focus {
        background: #e9ecef;
    }
`;

export const PriorityIcon = styled.span`
    ${tw`inline-block ml-auto`}

    svg {
        ${tw`text-2xl`}
    }
`;

export const PrioritySelectTrigger = styled.button`
    ${tw`border rounded-xl w-48`}

    &.expanded {
        ${tw`rounded-none rounded-t-xl`}
    }

    ${PriorityIcon} {
        ${tw`rotate-180`}
    }

    &.expanded ${PriorityIcon} {
        ${tw`rotate-0`}
    }
`;

export const PriorityItem = styled.div`
    ${tw`flex gap-x-3 items-center p-3`}
`;

export const PriorityColor = styled.span`
    ${tw`w-[14px] h-[14px] rounded-full`}

    background-color: ${({ color }) => color};
`;

export const ModalFooter = styled(ModalSection)`
    ${tw`justify-end border-t`}

    button {
        ${({ isSubmitDisabled }: ModalTodoProps) =>
            isSubmitDisabled && tw`opacity-50`}
    }
`;
