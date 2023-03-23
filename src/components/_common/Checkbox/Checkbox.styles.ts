import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export const CheckboxWrapper = styled(CheckboxPrimitive.Root)`
    ${tw`flex w-5 h-5 border border-[#C7C7C7]`}

    &[aria-checked="true"] {
        ${tw`border-[#16ABF8]`}
    }
`;

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
    ${tw`w-full h-full flex items-center justify-center bg-[#16ABF8]`}

    svg {
        ${tw``}
    }
`;
