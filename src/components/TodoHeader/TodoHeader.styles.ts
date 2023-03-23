import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { Wrapper } from "@/components/_common/Wrapper";

export const TodoHeaderWrapper = styled(Wrapper)`
    ${tw`flex justify-between items-center py-11`}
`;

export const HeaderSection = styled.div`
    ${tw`flex gap-x-[1.18rem]`}
`;

export const BackButton = styled.button`
    ${tw`text-[2rem]`}
`;
