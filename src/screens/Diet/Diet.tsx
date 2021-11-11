import React, {
  useEffect,
  useState,
} from "react";
import {
  ContainerBox,
  Title,
  List,
  Container,
  ItemTitle,
  ItemContent,
} from "./styles";
import { IContentProps } from "./Diet.interface";

import { GetDietService } from "../../services/GetDietService/GetDietService";
import { IGetData } from "../../services/GetDietService/GetDietService.interface";
import { useFocusEffect } from "@react-navigation/native";

const Diet = ({ content }: IContentProps) => {
  const [diet, setDiet] = useState<IGetData[] | undefined>(undefined);

  const Item = ({ item }: any) => <ItemContent>{"\u2022 " + item}</ItemContent>;

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const result = await new GetDietService().execute();
        setDiet(result);
      })();
    }, []))

  return (
    <Container>
      <Title>DIETA</Title>
      {diet != undefined && (
        <ContainerBox>
          <List
            keyExtractor={(item: any, index) => item + index}
            sections={diet}
            renderItem={({ item }) => <Item item={item} />}
            renderSectionHeader={({ section: { title } }: any) => (
              <ItemTitle>{title}</ItemTitle>
            )}
          />
        </ContainerBox>
      )}
    </Container>
  );
};

export default Diet;
