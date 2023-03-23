import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased min-h-screen bg-[#F4F4F4]`}
  }
`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
);

export default GlobalStyles;
