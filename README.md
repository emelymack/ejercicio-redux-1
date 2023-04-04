# Ejercicio introducción Redux

# Proyecto final: 
https://main--centropokemon-redux-typescript.netlify.app/

## Objetivo
Debemos lograr que la búsqueda de Pokemones muestre sus resultados en el Pokédex.

## Consigna
Ya hemos utilizado previamente React Query en nuestro centro Pokémon y hemos integrado TypeScript en nuestro inventario Pokémon. Ahora, utilizaremos esos conocimientos para entender cómo funciona el Pokédex que nos dejó el profesor Oak, e implementaremos un buscador, aun con prop drilling.
A raíz de esto, te proponemos resolver los siguientes puntos:
- En primer lugar, deberás agregar la lógica para capturar el input del usuario dentro del componente BuscarPokemon.tsx.
- En segundo lugar, con la lógica inicial del buscador ya hecha, deberás compartir el nombre buscado con el componente ListadoPokemons.tsx
- Finalmente, en ListadoPokemons.tsx,  deberás hacer el fetch (puedes utilizar React Query para esta petición)  a la API  para traer los pokemones que coincidan con el nombre buscado, mapearlos y renderizarlos.

- En relación con la búsqueda, la API de Pokémones no permite búsquedas por nombres incompletos o que no sean exactos, por eso hemos realizado unos ajustes en la API. ¿Te animás a descubrir cómo funciona? 

### Bonus track
- ¿Quieres ir por más? Si te sientes cómodo con el flujo de Redux y su implementación podes probar integrarlo en esta mesa de trabajo.

----

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emelymack)
