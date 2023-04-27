import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({children}){
    const [favorito, setFavorito] = useState([])

    return <FavoritosContext.Provider value = {{favorito, setFavorito}}>
        {children}
    </FavoritosContext.Provider>
}

export function useFavoriteContext(){
    const {favorito, setFavorito} = useContext(FavoritosContext)

    function addFav(novo){
        const favoritoRepetido = favorito.some(item => item.id === novo.id)
        let novaLista = [...favorito]

        if(!favoritoRepetido){
            novaLista.push(novo)
            return setFavorito(novaLista)
        }

        novaLista.splice(novaLista.indexOf(novo), 1)
        return setFavorito(novaLista)
    }

    return {
        favorito,
        addFav
    }
}