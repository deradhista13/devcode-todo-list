import tw from "twin.macro";
import styled from "@emotion/styled/macro";
import { keyframes } from "styled-components";

interface LoaderProps {
    size?: any;
    variant?: any;
}

const rotation = keyframes`
   0% {
       transform: rotate(0deg);
   }

   100% {
       transform: rotate(360deg);
   }
`;

export const Loader = styled.div`
    margin: 0 auto;
    line-height: normal;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
    border-style: solid;

    border-width: ${({ size }: LoaderProps) => {
        switch (size) {
            case "button":
                return "3px";
            default:
                return "5px";
        }
    }};

    width: ${({ size }: LoaderProps) => {
        switch (size) {
            case "button":
                return "28px";
            default:
                return "48px";
        }
    }};

    border-color: ${({ variant }: LoaderProps) => {
        switch (variant) {
            case "primary":
                return `${tw`bg-[#16ABF8]`}`;
            default:
                return "#fff";
        }
    }};

    border-bottom-color: transparent;
`;
