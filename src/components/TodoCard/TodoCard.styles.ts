import tw from "twin.macro";
import styled from "@emotion/styled/macro";

interface TodoCardProps {
    checked?: any;
}

export const Card = styled.div`
    ${tw`bg-white rounded-2xl w-full rounded-xl shadow-md flex items-center justify-between p-[1.875rem]`}
`;

export const CardInfo = styled.div`
    ${tw`flex gap-x-4 items-center`}
`;

export const PriorityIndicator = styled.div`
    ${tw`w-[9px] h-[9px] rounded-full bg-[#ED4C5C]`}
`;

export const CardTitle = styled.span`
    ${tw`truncate max-w-xl`}

    ${({ checked }: TodoCardProps) =>
        checked && tw`line-through text-[#888888]`}
`;

export const EditButton = styled.button`
    ${tw`text-xl opacity-60`}
`;
