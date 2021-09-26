import React from "react";
import { ContainerIconSearch, ContainerSearchBar, SearchBarInput } from "./styles";
import IconSearch from "../../../../assets/img/iconSearch.svg"

export const SearchBar = () =>{
    return(
        <>
        <ContainerSearchBar>
            <ContainerIconSearch onPress={()=>console.log("CLICK")}>
                <IconSearch width={'80%'}/>
            </ContainerIconSearch>
            <SearchBarInput placeholder="Orlando Brakus" placeholderTextColor="#9ECEF9"/>
        </ContainerSearchBar>
        </>
    )
}