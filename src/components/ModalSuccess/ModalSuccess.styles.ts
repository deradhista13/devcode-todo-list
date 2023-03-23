import tw from "twin.macro";
import styled from "@emotion/styled/macro";

export const SuccessWrapper = styled.div`
    ${tw`bg-white shadow-md rounded-xl flex px-[1.875rem] py-5 w-[32rem] gap-x-2.5`}
`;

export const SuccessMessage = styled.p`
    ${tw`font-medium`}
`;

export const Icon = styled.div`
    svg {
        ${tw`text-2xl`}
    }
`;
