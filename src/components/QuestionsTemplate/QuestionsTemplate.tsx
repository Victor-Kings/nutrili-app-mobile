import React from "react";
import { Container, ContentContainer, BackButtonContainer } from "./styles";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";

export function QuestionsTemplate({ children, IconBack, handler, isActiveBackButton }: any) {

    return (
        <ContentContainer>
            {isActiveBackButton ? <BackButtonContainer>
                <ButtonMenu
                    text="VOLTAR"
                    Icon={IconBack}
                    sizeText={18}
                    sizeImageHeight={70}
                    sizeImageWidth={70}
                    handleClick={handler}
                    page="Login"
                />
            </BackButtonContainer> : <></>}
            {children}
        </ContentContainer>
    )
}
