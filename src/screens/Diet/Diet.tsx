import React from "react";
import { SectionList, StyleSheet, ScrollView, Text, View } from "react-native";
import { Container, Title, listStyle } from "./styles";
import { foods } from "../../../__mocks__/diet";

const Diet = () => {
  return (
    <View style={listStyle.container}>
      <Title>DIETA</Title>
      <Container>
        <SectionList
          style={{
            flex: 1,
            width: "100%",
            paddingHorizontal: "1%",
            paddingTop: "5%",
          }}
          sections={[
            {
              title: "CAFÉ DA MANHÃ",
              data: ["• Devin", "• Dan", "• Dominic", "• a", "• a", "• b", "• c", "• x", "• c"],
            },
            {
              title: "ALMOÇO",
              data: ["Devin", "Dan", "Dominic", "a", "a", "b", "c", "x", "c"],
            },
            {
              title: "JANTA",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie",
                "m",
                "n",
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={listStyle.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={listStyle.sectionHeader}>{section.title}</Text>
          )}
        />
      </Container>
    </View>
  );
};

export default Diet;
