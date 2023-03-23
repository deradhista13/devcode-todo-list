import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { Wrapper } from "@/components/_common/Wrapper";

export const HeaderBackground = styled.header`
    ${tw` w-full bg-[#16ABF8]`}
`;

export const HeaderWrapper = styled(Wrapper)`
    ${tw`text-white py-9`}
`;

export const HeaderTitle = styled.h1`
    ${tw`text-2xl font-bold`}
`;
