import {
    HeaderBackground,
    HeaderWrapper,
    HeaderTitle,
} from "@/layouts/Header/Header.styles";

const Header = () => {
    return (
        <HeaderBackground data-cy="header-background">
            <HeaderWrapper>
                <HeaderTitle data-cy="header-title">TO DO LIST APP</HeaderTitle>
            </HeaderWrapper>
        </HeaderBackground>
    );
};

export default Header;
