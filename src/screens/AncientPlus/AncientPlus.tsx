import React, { useState, useEffect } from "react";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate";
import {
  ICurrentQuestionContent,
  IpayloadResponses,
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
import { Text } from "react-native";
import { RegisterDataUserService } from "../../services/RegisterDataUserService/RegisterDataUserService";
import { Questions } from "../../components/Questions/Questions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_AUTH_TOKEN } from "../../configs/const";
import { IAuthProps } from "../../context/authContext.interface";
import { ButtonSearch } from "../../components/ButtonSearch/ButtonSearch";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { ModalSearchNutritionist } from "../../components/ModalSearchNutritionist";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SearchNutritionistService } from "../../services/SearchNutritionistService/SearchNutritionistService";
import { AuthService } from "../../services/AutheService/AuthService";



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

  const handlerBackQuestion = () => {
    setCurrentQuestion(currentQuestionContent.previousQuestion - 1);
  };

  const handleOnClickStart = () => {
    setStartedQuestions(true);
  };
  const sendResponse = async () => {
    
    try {
      await registerDataUserService.sendResponseQuestions(payloadResponses);
      if (handleOK) {
        handleOK(false);
      }
    } catch (error) {
      console.error("ERRO AncientPlus--: ", error);
    }
  }
  useEffect(() => {
    if (endQuestions != false) {
      sendResponse()
      // TODO: Loading para entrada no app
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
      <TextCustom style={{paddingBottom: 20}}>
        Precisamos fazer algumas perguntas adicionais, antes de escolher o
        nutricionista, para que possamos ser precisos em sua análise
        </TextCustom>
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
type ISearchProps = {
  handlerSelectPatient:(id:string)=>void
}

function Search({handlerSelectPatient}:ISearchProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>('');

  const handlerModal = () => {
    setModalOpen(false);
  };

  const handlerButtonSearch = (type:string) => {
    setType(type);
    setModalOpen(true);
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
      {modalOpen&&<ModalSearchNutritionist closeModal={handlerModal}  modalOpen={modalOpen} requisitionType={type} handlerSelectPatient={handlerSelectPatient}/>}
    </QuestionsTemplate>
  );
}
export function AncientPlus() {
  const navigation = useNavigation()
  const [value, setValue] = useState(false);

  const handlerSelectPatient = async (id:string) => {
    try{
      await new SearchNutritionistService().acceptNutritionist(id)
      alert("Solicitação enviada para o nutricionista selecionado, fique de olho nas notificações")
      navigation.navigate("Home" as never,{} as never)
    }catch(err){
        console.error("HandlerSelectPatient",err);
        
    }
  } 

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        try {
          const auth_token = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
          if (auth_token) {
            const auth: IAuthProps = JSON.parse(auth_token);
            setValue(auth.isRegisteredComplete);
            const data = await new AuthService().verifyIsUser(auth.access_token);
            if(!data.ableToSearchNutritionist){
              alert("Não é qualificado para buscar um nutricionista")
              navigation.navigate("Home" as never,{} as never)
            }
          }
  
        } catch (error) {
          console.error("Falha ao entrar na opção de Ancient Plus", error);
        }
      })();
    }, []))

  const render = !value ? <Search handlerSelectPatient={handlerSelectPatient} /> : <QuestionsLocale handleOK={setValue} />;

  return <Container>{render}</Container>;
}
