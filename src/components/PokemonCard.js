import React from "react"
import { Link } from "gatsby"

const PokemonCard = ({ pokemon, evolution }) => {
  const { image, name, number } = pokemon

  return (
    <Link to="/pokemon" state={{ pokemon: pokemon }} key={pokemon.id}>
      <div className="pokemon-card">
        <img src={image.childImageSharp.fluid.src} alt={name} />
        <span className="name">{name}</span>
        <span className="number">#{number}</span>
        <div className="type-container">
          <span
            className={`type ${pokemon.attacks.special[0].type.toLowerCase()}`}
          >
            {pokemon.attacks.special[0].type}
          </span>
        </div>
        <div className="weight">
          {evolution && `${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard
