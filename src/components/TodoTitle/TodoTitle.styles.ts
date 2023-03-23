import tw from "twin.macro";
import styled from "@emotion/styled/macro";

export const TodoTitleWrapper = styled.div`
    ${tw`flex gap-x-[1.18rem]`}
`;

export const TitleBase = styled.h1`
    ${tw`text-4xl font-bold max-w-md`}

    line-height: normal;
`;

export const TitlePreview = styled(TitleBase)`
    ${tw`truncate`}
`;

export const TitleEdit = styled(TitleBase)`
    ${tw`bg-transparent outline-none`}
`;

export const EditButton = styled.button`
    svg {
        ${tw`text-2xl`}
    }
`;
