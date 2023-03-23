import tw from "twin.macro";
import styled from "@emotion/styled/macro";

export const Card = styled.li`
    ${tw`flex flex-col w-full h-full shadow-md bg-white rounded-xl p-7 cursor-pointer`}

    aspect-ratio: 1/1;
`;

export const CardTitle = styled.h4`
    ${tw`font-bold text-xl break-words`}
`;

export const CardFooter = styled.div`
    ${tw`mt-auto flex justify-between items-center`}
`;

export const CardDate = styled.p`
    ${tw`text-[#888888] text-sm`}
`;
