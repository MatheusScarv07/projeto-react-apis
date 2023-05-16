 import react, { useEffect, useState } from 'react'


import axios, { all } from 'axios'

import { Containerlist, Displaynone } from './listStyled'
import {Details}  from '../PokemonDetailPage/Detail'
import { getColors } from '../../utils/getColors'
import { getTypes } from '../../utils/getTypes'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import Header from '../../components/header/Header'



export const List =(props)=>{
    const cardColor = getColors
    const pokeType = getTypes
    const [pokemons, setPokemons] = useState([])
 useEffect(()=>{
    getPokemons()
    },[])
    const getPokemons=()=>{
        const endpoints = []
        for (let i = 1;i<31; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        const response = axios.all(endpoints.map((endpoint)=> axios.get(endpoint))).then((res)=>setPokemons(res))
        return response
    }
    return(
        <div>
            <Header/>
            <Containerlist>
                {pokemons.map((pokemons)=>{return(<PokemonCard pokemons={pokemons} cardColor={cardColor} getTypes={pokeType}/>)})}
            </Containerlist>
            <Displaynone>
            <Details pokemons={pokemons} cardColor={cardColor} getTypes={pokeType}/>
            </Displaynone>
        </div>
    )
}  