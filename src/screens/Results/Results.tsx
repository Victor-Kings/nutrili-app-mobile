import React, { useState } from "react";
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
import { VictoryPie } from "victory-native";
import { GraphicDataService } from "../../services/GraphicDataService/GraphicDataService";
import { useFocusEffect } from "@react-navigation/native";

const PieChart = () => {
  return <VictoryPie />;
};
interface IPercentProps {
  y: number;
  x: string;
}

const Results = () => {
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
    "Produtos Açucarados"
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
    "#FFB6B6B6",
  ];

  const [graphicData, setGraphicData] = useState<any[] | undefined>(undefined);
  const [graphicCategoryData, setGaphicCategoryData] = useState<any[] | undefined>(undefined);
  const [graphicColor, setgraphicColor] = useState<any[] | undefined>(
    undefined
  );
  const [content, setContent] = useState<any[]>()

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const response = await new GraphicDataService().execute();
        setContent(response)
        var percent: IPercentProps[] = [];
        var category: any = [];
        var colors: any = [];
        response.map((value) => {
          percent.push({ y: value.percentage, x: `${value.percentage}%` });
          category.push({ category: value.type});
          colors.push(Colors[value.type - 1]);
        });
  
        setGraphicData(percent);
        setGaphicCategoryData(category);
        setgraphicColor(colors);
      })();
    }, [])
  );

  return (
    <Container>
      {graphicData != undefined && (
        <ContainerBox>
          <Title>Cores Consumidas:</Title>

          <ContainerGraphic>
            <VictoryPie
              data={graphicData}
              width={350}
              height={350}
              colorScale={graphicColor}
            />
          </ContainerGraphic>

          <LabelBox>
            {content && content.map((value, index) =>
              <Subtitles key={`${value.percent}-${index}`}>
                {graphicColor && <Rectangle color={graphicColor[index]} />}
                {graphicCategoryData && (
                  <LabelSubtitles>
                    {nameLabel[(graphicCategoryData[index].category)-1]}
                  </LabelSubtitles>
                )}
              </Subtitles>
            )}
          </LabelBox>
        </ContainerBox>
      )}
    </Container>
  );
};

export default Results;
