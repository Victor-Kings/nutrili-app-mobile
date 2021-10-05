import React from "react";
import { ContainerBox, Title, List, Container, ItemTitle, ItemContent } from "./styles";
import { IContentProps } from "./Diet.interface";

const Diet = ({ content }: IContentProps) => {
 const Item = (({item} : any) => (<ItemContent>{'\u2022 ' + item}</ItemContent>))

 return (
    <Container>
      <Title>DIETA</Title>
      <ContainerBox>
        <List
         keyExtractor={(item:any, index) => item+index} 
          sections={
            content
          }
          renderItem={({ item }) => <Item item={item}/>}
          renderSectionHeader={({ section: {title} } : any) => (
            <ItemTitle>{title}</ItemTitle>
          )}
          /> 
      </ContainerBox>
    </Container>
  );
};

export default Diet;
