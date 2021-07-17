import React from "react";
import { StyleSheet, Text, View,Button,Image , TouchableOpacity} from 'react-native';
import {Header, Container, MenuButton,TextButton,ImagePerfil,HeaderContent,TextHeader} from './style';
import MenuLogo from '../../assets/img/menu.svg';

const MainTemplate = ({navigation, children, content}:any) =>{
     return(
       <Container>
            <Header>
                <HeaderContent>
                    <ImagePerfil source={{uri:content.perfil}}/>
                    <TextHeader>
                       {content.name}
                    </TextHeader> 
                </HeaderContent>
            </Header>
        <View style={{height: '75%'}}>
            {children}
        </View>
        <MenuButton onPress={()=>navigation.openDrawer()}>
            <MenuLogo width='40px'/>
            <TextButton>MENU</TextButton>
        </MenuButton>
       </Container>
     );
}

export default MainTemplate;