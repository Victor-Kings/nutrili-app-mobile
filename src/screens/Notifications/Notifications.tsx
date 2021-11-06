import React,{useCallback,useEffect,useState} from "react";
import { ScrollView, Text } from "react-native";
import { Container, ContainerCard, Tittle, HeaderCard, ContainerContentCard } from "./styles";
import { IContentProps } from "./Notifications.interface";
import { INotifications } from "../../services/NotificationsService/Notifications.interface";
import { NotificationsService } from "../../services/NotificationsService/Notifications";
import { useFocusEffect } from '@react-navigation/native';


const Notifications = () => {
    const [notifications, setNotifications] = useState<INotifications[]>([])
    
    const fetchNotificationsData = useCallback(async () => {
        try {
          const response = await new NotificationsService().getNotifications()
          setNotifications(response)
        } catch (err) {
          console.error('Carregamento das notificações')
        }
      }, [])
      
    useFocusEffect(
        React.useCallback(() => {
            fetchNotificationsData()
        }, [])
      );

  const handlerViewNotification = async (idNotification: string, id: number, status: boolean) => {
    try {
      await new NotificationsService().sendVisualizatedNotifications(
        idNotification
      )

      if (!status) {
        const elementChange = notifications.find((value, index) => index === id)
        
        elementChange!.status = true
        const otherElements = notifications.filter(
          (value, index) => index != id
        )
        const newNotifications = [elementChange!, ...otherElements].sort(
          (valueA, valueB) => {
            return valueA.index - valueB.index
          }
        )
        setNotifications(newNotifications)
      }
    } catch (err) {
      console.error('Envio de visualização de notificação')
    }
  }
    return (
        <Container>
            <Tittle>NOTIFICAÇÕES</Tittle>
            <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: "1%" }}>
                {
                    notifications.map((value, index) => {
                        return (
                            <ContainerCard key={`${value.senderName}-${index}`} onPress={()=>handlerViewNotification(value.id, index, value.status)}>
                                <HeaderCard>
                                    <Tittle size={'20'}>{value.senderName}</Tittle>
                                    <Tittle size={'20'} color={"#67B1F4"}>{value.status ? "":"NOVA"}</Tittle>
                                </HeaderCard>
                                <Text style={{ color: "#707070" }}>{value.message}</Text>
                            </ContainerCard>
                        )
                    })
                }
            </ScrollView>
        </Container>
    )
}

export default Notifications;