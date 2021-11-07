import React, {  useState, useRef } from "react";
import { Platform, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MenuLogo from "../../assets/img/menu.svg";
import * as ImagePicker from "expo-image-picker";
import {
  Container,
  MenuButton,
  TextButton,
  ImagePerfil,
  HeaderContent,
  TextHeader,
  ContainerContent,
  ContainerForm,
  ImagePerfilContainer,
  TextContentForm,
  TextTittleForm,
  ChangeButton,
  TextChangeButton,
  ChangeImg,
  InsertNumber,
  PickerContainer,
  InsertString,
} from "./styles";
import { UpdateProfileService } from "../../services/UpdateProfileService/UpdateProfileService";
import { IPayloadUpdate } from "../../services/UpdateProfileService/UpdateProfileService.interface";
import { GetDataProfile } from "../../services/GetDataProfile/GetDataProfile";
import { IGetDataProfileApi } from "../../services/GetDataProfile/GetDataProfile.interface";
import { useFocusEffect } from "@react-navigation/native";

export function Profile({ navigation, content }: any) {
  const [fieldsContent, setFieldsContent] = useState<
    IGetDataProfileApi | undefined
  >();
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const [imageProfile, setImageProfile] = useState<any>(null);

  const [myState, setMyState] = useState<any>("");

  const [response, setResponse] = useState("");

  const pickerRef = useRef<any>();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const response = await new GetDataProfile().execute();
        setFieldsContent(response);
      })();
    }, []))

  const setAge = (date:string) => {
    const currentDate = new Date();
    const correctDate = date!.split("/");
    const birthDate = new Date(
      `${correctDate![1]}/${correctDate![0]}/${correctDate![2]}`
    );

    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  function maskDate(value?: string) {
    if (value)
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1");
    return "";
  }

  function formatDate(value?: string){
    if(value){
      var date:any 
      date= value.split(" ")
      date= date[0].split('-')
      return `${date[2]}/${date[1]}/${date[0]}`
    }
    return ""
  }
  
  function formCEP(value?: string) {
    var validateCep = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
    if (value) return value.replace(/(\d{5})(\d{3})/, "$1-$2");
  }

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageProfile(result.uri);
    }
  };

  const SendToUpdate = async () => {
    setIsChanging(false);
    var payload: IPayloadUpdate = {
      gender: fieldsContent?.gender,
      birth: fieldsContent?.birth,
      weight: fieldsContent?.weight,
      height: fieldsContent?.height,
      cpf: undefined,
      crn: undefined,
      crnType: undefined,
      email: undefined,
      name: fieldsContent?.name,
      nutritionist: false,
      officeAddress: undefined,
      password: undefined,
      personalAddress: {
        cep: fieldsContent?.address?.cep
          ? fieldsContent?.address?.cep.toString().substr(0, 5) +
            "-" +
            fieldsContent?.address?.cep.toString().substr(-3)
          : undefined,
        city: fieldsContent?.address?.city || undefined,
        neighborhood: fieldsContent?.address?.neighborhood || undefined,
        number: fieldsContent?.address?.number || undefined,
        state: fieldsContent?.address?.state || undefined,
        street: fieldsContent?.address?.street || undefined,
      },
      phone: undefined,
    };
    try {
      await new UpdateProfileService().updateProfile(payload);
    } catch (e) {
      console.error("erro1", e);
    }
    if (imageProfile) {
      try {
        await new UpdateProfileService().updateProfilePick(imageProfile);
      } catch (e) {
        console.error("erro2", e);
      }
    }
  };
  const form = () => {
    if (isChanging) {
      return (
        <>
          {fieldsContent && (
            <>
              <TextTittleForm>Nome:</TextTittleForm>
              <InsertString
                onChangeText={(value) =>
                  setFieldsContent({ ...fieldsContent, name: value })
                }
                value={fieldsContent?.name}
                placeholder="Nome"
                keyboardType="default"
              />
              <TextTittleForm>Genêro:</TextTittleForm>
              <PickerContainer>
                <Picker
                  ref={pickerRef}
                  selectedValue={fieldsContent?.gender}
                  onValueChange={(itemValue, itemIndex) =>
                    setFieldsContent({ ...fieldsContent, gender: itemValue })
                  }
                  dropdownIconColor="#84878a"
                  itemStyle={{ fontSize: 20, fontWeight: "700" }}
                >
                  {["", "Masculino", "Feminino"].map((value, index) => (
                    <Picker.Item
                      label={value}
                      value={value}
                      key={index}
                      color="#84878a"
                    />
                  ))}
                </Picker>
              </PickerContainer>

              <TextTittleForm>Aniversário:</TextTittleForm>
              <InsertNumber
                onChangeText={(value) =>
                  setFieldsContent({ ...fieldsContent, birth: value })
                }
                value={maskDate(fieldsContent?.birth)}
                placeholder={fieldsContent?.birth}
                keyboardType="number-pad"
              />

              <TextTittleForm>Peso:</TextTittleForm>
              <InsertNumber
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    weight: parseInt(value),
                  })
                }
                value={`${fieldsContent?.weight}`}
                placeholder={`${fieldsContent?.weight}`}
                keyboardType="number-pad"
              />

              <TextTittleForm>Altura:</TextTittleForm>
              <InsertNumber
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    height: parseInt(value),
                  })
                }
                value={`${fieldsContent?.height}`}
                placeholder={`${fieldsContent?.height}`}
                keyboardType="number-pad"
              />

              <TextTittleForm>Idade:</TextTittleForm>
              <TextContentForm>{fieldsContent ? setAge(fieldsContent.birth) : ""}</TextContentForm>

              <TextTittleForm>CEP:</TextTittleForm>
              <InsertString
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    address: { ...fieldsContent.address, cep: value },
                  })
                }
                value={formCEP(fieldsContent?.address?.cep)}
                placeholder="CEP"
                keyboardType="numeric"
                maxLength={9}
              />
              <TextTittleForm>Rua:</TextTittleForm>
              <InsertString
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    address: { ...fieldsContent.address, street: value },
                  })
                }
                value={fieldsContent?.address?.street}
                placeholder="Rua"
                keyboardType="default"
              />
              <TextTittleForm>Número:</TextTittleForm>
              <InsertString
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    address: { ...fieldsContent.address, number: value },
                  })
                }
                value={fieldsContent?.address?.number}
                placeholder="Número"
                keyboardType="numeric"
              />

              <TextTittleForm>Cidade:</TextTittleForm>
              <InsertString
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    address: { ...fieldsContent.address, city: value },
                  })
                }
                value={fieldsContent?.address?.city}
                placeholder="Cidade"
                keyboardType="default"
              />

              <TextTittleForm>Bairro:</TextTittleForm>
              <InsertString
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    address: { ...fieldsContent.address, neighborhood: value },
                  })
                }
                value={fieldsContent?.address?.neighborhood}
                placeholder="Bairro"
                keyboardType="default"
              />

              <TextTittleForm>Estado:</TextTittleForm>
              <InsertString
                onChangeText={(value) =>
                  setFieldsContent({
                    ...fieldsContent,
                    address: { ...fieldsContent.address, state: value },
                  })
                }
                value={fieldsContent?.address?.state}
                autoCapitalize="characters"
                maxLength={2}
                placeholder="Cidade"
                keyboardType="default"
              />
            </>
          )}
        </>
      );
    }
    return (
      <>
        <TextTittleForm>Genêro:</TextTittleForm>
        <TextContentForm>
          {fieldsContent?.gender == "M" ? "Masculino" : "Feminino"}
        </TextContentForm>

        <TextTittleForm>Aniversário:</TextTittleForm>
        <TextContentForm>{formatDate(fieldsContent?.birth)}</TextContentForm>

        <TextTittleForm>Peso:</TextTittleForm>
        <TextContentForm>{fieldsContent?.weight}</TextContentForm>

        <TextTittleForm>Altura:</TextTittleForm>
        <TextContentForm>{fieldsContent?.height}</TextContentForm>

        <TextTittleForm>Idade:</TextTittleForm>
        <TextContentForm>{fieldsContent ? setAge(formatDate(fieldsContent?.birth)) : ""}</TextContentForm>

        <TextTittleForm>ENDEREÇO:</TextTittleForm>
        <TextContentForm>{`${fieldsContent?.address?.street}, ${fieldsContent?.address?.number}, ${fieldsContent?.address?.neighborhood}, ${fieldsContent?.address?.city} - ${fieldsContent?.address?.state}`}</TextContentForm>
      </>
    );
  };

  return (
    <Container>
      <ContainerContent>
        <HeaderContent>
          <ImagePerfilContainer>
            <ImagePerfil
              source={{
                uri:
                  imageProfile ||
                  "https://diariodecuiaba.nyc3.digitaloceanspaces.com/storage/webdisco/2020/06/14/1200x900/d5426f95dedf886c1c5ec4bf093815c2.jpg",
              }}
            />
          </ImagePerfilContainer>
          {isChanging && (
            <ChangeImg onPress={pickImage}>
              <TextChangeButton>ALTERAR IMAGEM</TextChangeButton>
            </ChangeImg>
          )}
          <TextHeader>{fieldsContent?.name}</TextHeader>
        </HeaderContent>
        <ContainerForm
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          {form()}
          {isChanging ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "70%",
                alignSelf: "center",
              }}
            >
              <ChangeButton theme={"approve"} onPress={SendToUpdate}>
                <TextChangeButton>APLICAR</TextChangeButton>
              </ChangeButton>
              <ChangeButton
                theme={"cancel"}
                onPress={() => setIsChanging(false)}
              >
                <TextChangeButton>CANCELAR</TextChangeButton>
              </ChangeButton>
            </View>
          ) : (
            <ChangeButton theme={"approve"} onPress={() => setIsChanging(true)}>
              <TextChangeButton>ALTERAR INFORMAÇÕES</TextChangeButton>
            </ChangeButton>
          )}
        </ContainerForm>
      </ContainerContent>

      <MenuButton onPress={() => navigation.openDrawer()}>
        <MenuLogo width="40px" />
        <TextButton>MENU</TextButton>
      </MenuButton>
    </Container>
  );
}
