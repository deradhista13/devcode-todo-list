import tw from "twin.macro";
import styled from "@emotion/styled/macro";

export const TodoFilterWrapper = styled.div`
    ${tw`relative z-10 flex items-center`}

    .options {
        ${tw`hidden w-60 overflow-hidden`}
    }

    .options.show {
        ${tw`block absolute top-full right-0 shadow-md bg-white rounded-xl`}
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

export const Label = styled.div`
    ${tw`flex gap-x-4 items-center p-3.5 capitalize`}

    svg {
        ${tw`text-2xl`}
    }

    .check {
        ${tw`ml-auto`}
    }
`;

export const Icon = styled.button`
    svg {
        ${tw`text-[3.5rem]`}
    }
`;
