import tw from "twin.macro";
import styled from "@emotion/styled/macro";

export const AlertWrapper = styled.div`
    ${tw`bg-white shadow-md rounded-xl px-[1.875rem] py-[3.125rem] w-full max-w-lg gap-x-2.5 flex flex-col gap-y-9`}
`;

export const AlertIcon = styled.div`
    ${tw`flex justify-center`}

    svg {
        ${tw`h-20 w-20`}
    }
`;

export const AlertMessage = styled.div`
    ${tw`font-medium text-center break-words`}
`;

export const AlertButtons = styled.div`
    ${tw`flex justify-center gap-x-5`}
`;
