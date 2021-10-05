import React from "react";
import { ContainerIconSearch, ContainerSearchBar, SearchBarInput } from "./styles";
import IconSearch from "../../../../assets/img/iconSearch.svg"

interface SearchBarProps {
    onChange:(value: string)=>void
    onClickButton: ()=>void
}

export const SearchBar = ({onChange, onClickButton}:SearchBarProps) =>{
    return(
        <>
        <ContainerSearchBar>
            <ContainerIconSearch onPress={()=>onClickButton()}>
                <IconSearch width={'80%'}/>
            </ContainerIconSearch>
            <SearchBarInput placeholder="Orlando Brakus" placeholderTextColor="#9ECEF9" onChangeText={onChange}/>
        </ContainerSearchBar>
        </>
    )
}