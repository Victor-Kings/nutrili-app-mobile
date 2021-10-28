import React, { useEffect, useState } from "react";
import {
  Title,
  ContainerBox,
  Container,
  Rectangle,
  LabelBox,
  ContainerGraphic,
  Subtitles,
  LabelSubtitles,
} from "./styles";
import { IContentProps } from "./Results.interface";
import { VictoryPie } from "victory-native";

const PieChart = () => {
  return <VictoryPie />;
};

interface a {
  y: number;
}

const Results = ({ content }: IContentProps) => {
  const nameLabel = [
    "Frutas",
    "Legumes",
    "Verduras",
    "Cereais",
    "Raízes e Tubérculos",
    "Carnes e Ovos",
    "Feijões",
    "Leites e Derivados",
    "Óleos e Gorduras",
    "Oleaginosas",
  ];
  const Colors = [
    "#F6A13E",
    "#9A72DB",
    "#1B91D4",
    "#EDF05C",
    "#FA333F",
    "#272727",
    "#B6B6B6",
    "#81D0FD",
    "#074264",
    "#552323",
  ];

  const [graphicData, setGraphicData] = useState<any[] | undefined>(undefined);
  const [graphicCategoryData, setGaphicCategoryData] = useState<
    any[] | undefined
  >(undefined);
  const [graphicColor, setgraphicColor] = useState<any[] | undefined>(
    undefined
  );

  useEffect(() => {
    //TODO: CHAMADA DO BACKEND AQUI

    var percent: a[] = [];
    var category: any = [];
    var colors: any = [];
    content.map((value) => {
      percent.push({ y: value.percent });
      category.push({ category: value.category });
      colors.push(Colors[value.category - 1]);
    });

    setGraphicData(percent);
    setGaphicCategoryData(category);
    setgraphicColor(colors);
  }, []);

  return (
    <Container>
      <ContainerBox>
        <Title>Cores Consumidas:</Title>

        <ContainerGraphic>
          <VictoryPie
            data={graphicData}
            width={350}
            height={350}
            colorScale={graphicColor}
            labels={() => null}
          />
        </ContainerGraphic>

        <LabelBox>
          {content.map((value, index) => (
            <Subtitles key={`${value.percent}-${index}`}>
              {graphicColor && <Rectangle color={graphicColor[index]} />}
              {graphicCategoryData && (
                <LabelSubtitles>
                  {nameLabel[graphicCategoryData[index].category - 1]}
                </LabelSubtitles>
              )}
            </Subtitles>
          ))}
        </LabelBox>
      </ContainerBox>
    </Container>
  );
};

export default Results;