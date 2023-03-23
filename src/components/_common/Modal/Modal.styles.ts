import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const ModalStyles = createGlobalStyle`
  .overlay {
    ${tw`fixed inset-0 min-h-screen flex items-center justify-center bg-gray-100 z-10`}
  }

  .content{
    ${tw`outline-none`}
  }
`;
