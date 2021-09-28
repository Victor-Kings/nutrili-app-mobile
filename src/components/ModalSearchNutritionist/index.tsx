import React, { useState, useEffect } from "react";
import { Modal, Text, View } from "react-native";
import { IModalProps } from "./ModalSearchNutritionist.interface";
import { ContainerModal, ContainerCards } from "./styles";
import { SearchBar } from "./components/SearchBar";
import { CardNutritionist } from "./components/CardNutritionist";
import { ISearchNutritionist } from "../../model/ModelSearchNutritionist.interface";
import { SearchNutritionistService } from "../../services/SearchNutritionistService/SearchNutritionistService";

const cardsNutritionist: ISearchNutritionist[] = [
  {
    id: 1,
    score: 8,
    name: "Orlando Brakus",
    city: "Campinas",
    state: "SP",
    profilePicture:
      "https://t.ctcdn.com.br/qm2BM7n0HifXNF4aKxmcTt3nuv8=/512x288/smart/i400479.jpeg",
    phone: "(19) 99999-9999",
  },
  {
    id: 2,
    score: 3,
    name: "Linda Murphy",
    city: "Monte Azul",
    state: "FM",
    profilePicture:
      "https://t.ctcdn.com.br/qm2BM7n0HifXNF4aKxmcTt3nuv8=/512x288/smart/i400479.jpeg",
    phone: "(19) 99999-9999",
  },
  {
    id: 3,
    score: 6,
    name: "Elton Milles",
    city: "End World",
    state: "Acre",
    profilePicture:
      "https://t.ctcdn.com.br/qm2BM7n0HifXNF4aKxmcTt3nuv8=/512x288/smart/i400479.jpeg",
    phone: "(19) 99999-9999",
  },
];
export const ModalSearchNutritionist = ({
  closeModal,
  modalOpen,
  requisitionType,
}: IModalProps) => {
  const [list, setList] = useState<ISearchNutritionist[]|[]>();
  const [valueInput, setValueInput] = useState<string>("");

  const renderCards = ({ item }: any) => {
    return (
      <CardNutritionist
        city={item.city}
        name={item.name}
        phone={item.phone}
        score={item.score}
        state={item.state}
        profilePicture={item.profilePicture}
      />
    );
  };

  const eventSearchNutritionist = async()=>{
    try {
        const response = await new SearchNutritionistService().execute(
          valueInput,
          requisitionType
        );        
        setList(response);
      } catch (error) {
          console.error("Search API error", error)
    }
  }

  useEffect(() => {
    if (valueInput.length % 2 !== 0) {
      (async () => {
        await eventSearchNutritionist()
      })();
    }
  }, [valueInput]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalOpen}
      statusBarTranslucent={true}
      onRequestClose={closeModal}
    >
      <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <ContainerModal>
          <SearchBar onChange={setValueInput} onClickButton={eventSearchNutritionist}/>
          <Text>{valueInput}</Text>
          <ContainerCards
            data={list}
            renderItem={renderCards}
            keyExtractor={(item: any) => `${item.id}`}
          />
        </ContainerModal>
      </View>
    </Modal>
  );
};
