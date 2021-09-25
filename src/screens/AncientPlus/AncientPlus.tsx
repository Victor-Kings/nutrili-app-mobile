import React, { useState, useEffect } from "react";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate";
import {
  ICurrentQuestionContent,
  IpayloadResponses,
  IPayloadUser,
} from "../LoginQuestions/LoginQuestions.interface";
import {
  ButtonTouch,
  Container,
  ContainerButtons,
  ContainerSearch,
  TextButton,
  TextCustom,
  TextCustomLittleSize,
} from "./styles";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { formFindNutritionist } from "../../../__mocks__/form";
import { Text, View } from "react-native";
import { RegisterDataUserService } from "../../services/RegisterDataUserService/RegisterDataUserService";
import { Questions } from "../../components/Questions/Questions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_AUTH_TOKEN } from "../../configs/const";
import { IAuthProps } from "../../context/authContext.interface";
import { ButtonSearch } from "../../components/ButtonSearch/ButtonSearch";
import IconFinder from "../../assets/img/iconFinder.svg";
import IconLocale from "../../assets/img/iconLocale.svg";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { ModalSearchNutritionist } from "../../components/ModalSearchNutritionist";



function QuestionsLocale({ handleOK }: any) {
  const registerDataUserService = new RegisterDataUserService();
  const [startedQuestions, setStartedQuestions] = useState(false);
  const [endQuestions, setEndQuestions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [payloadResponses, setPayloadResponses] = useState<
    IpayloadResponses[] | null
  >(null);
  const [currentQuestionContent, setCurrentQuestionContent] =
    useState<ICurrentQuestionContent>({
      question: "Vamos fazer algumas perguntas para cadastro",
      previousQuestion: 1,
      isLastQuestion: false,
    });


  console.log(endQuestions);

  const handlerBackQuestion = () => {
    setCurrentQuestion(currentQuestionContent.previousQuestion - 1);
  };

  const handleOnClickStart = () => {
    setStartedQuestions(true);
  };

  useEffect(() => {
    if (endQuestions != false) {
      (async () => {
        try {
          await registerDataUserService.sendResponseQuestions(payloadResponses);
          if (handleOK) {
            handleOK(true);
          }
        } catch (error) {
          console.log("deu ruim", error);
        }
      })();
      console.log("TERMINOU AS QUESTÕES");
    }
  }, [endQuestions]);

  const paramsQuestions = {
    payloadResponses: payloadResponses,
    setPayloadResponses: setPayloadResponses,
    form: formFindNutritionist,
    currentQuestion: currentQuestion,
    setCurrentQuestion: setCurrentQuestion,
    currentQuestionContent: currentQuestionContent,
    setCurrentQuestionContent: setCurrentQuestionContent,
    startedQuestions: startedQuestions,
    setStartedQuestions: setStartedQuestions,
    endQuestions: endQuestions,
    setEndQuestions: setEndQuestions,
  };

  const questionsTemp = startedQuestions ? (
    <Questions Params={paramsQuestions} />
  ) : (
    <>
      <Text>
        Precisamos fazer algumas perguntas adicionais, antes de escolher o
        nutricionista, para que possamos ser precisos em sua análise
      </Text>
      <ContainerButtons>
        <ButtonTouch color="#4197E5" onPress={handleOnClickStart}>
          <TextButton>COMEÇAR</TextButton>
        </ButtonTouch>
      </ContainerButtons>
    </>
  );

  return (
    <QuestionsTemplate
      handler={handlerBackQuestion}
      IconBack={IconBack}
      isActiveBackButton={startedQuestions}
    >
      {questionsTemp}
    </QuestionsTemplate>
  );
}


function Search() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>('');

  const handlerModal = () => {
    setModalOpen(false);
  };

  const handlerButtonSearch = (type:string) => {
    setType(type);
    setModalOpen(true);
    console.log("CLICOU");
  };

  return (
    <QuestionsTemplate>

      <ContainerSearch>
        <TextCustom>AGORA VAMOS ESCOLHER O SEU NUTRIOCINISTA PLUS!</TextCustom>
        <TextCustomLittleSize>PROCURE O SEU:</TextCustomLittleSize>
        <ButtonSearch
          buttonLabel="PESQUISA POR NOME"
          IconButton={<Octicons name="search" size={35} color="#4197E5"/>}
          handlerClick={()=>handlerButtonSearch("name")}
        />
         <ButtonSearch
          buttonLabel="PESQUISA POR CIDADE"
          IconButton={<MaterialCommunityIcons name="map-marker-circle" size={50} color="#4197E5" />}
          handlerClick={()=>handlerButtonSearch("city")}
        />
      </ContainerSearch>
      {modalOpen&&<ModalSearchNutritionist closeModal={handlerModal}  modalOpen={modalOpen} requisitionType={type}/>}
    </QuestionsTemplate>
  );
}

export function AncientPlus({ ...props }) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
        if (auth_token) {
          const auth: IAuthProps = JSON.parse(auth_token);
          setValue(auth.isRegisteredComplete);
        }
      } catch (error) {
        console.log("deu ruim", error);
      }
    })();
  }, []);

  const render = value ? <QuestionsLocale handleOK={setValue} /> : <Search />;

  return <Container>{render}</Container>;
}
