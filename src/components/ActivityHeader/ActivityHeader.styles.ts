import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { Wrapper } from "@/components/_common/Wrapper";

export const ActivityHeaderWrapper = styled(Wrapper)`
    ${tw`flex justify-between items-center py-11`}
`;

export const ActionHeaderTitle = styled.h1`
    ${tw`text-4xl font-bold`}

    line-height: normal;
`;
