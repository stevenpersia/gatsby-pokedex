import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PokemonCard from "../components/PokemonCard"

const Pokemon = ({ location }) => (
  <Layout>
    <SEO title={location.state.pokemon.name} />
    <div className="pokemon">
      <PokemonCard pokemon={location.state.pokemon} />
      {location.state.pokemon.evolutions &&
        location.state.pokemon.evolutions.map(evolution => (
          <PokemonCard pokemon={evolution} evolution />
        ))}
      Fast attacks :
      {location.state.pokemon.attacks.fast.map(attack => {
        return (
          <p>
            {attack.name}{" "}
            <span className={`type ${attack.type.toLowerCase()}`}>
              {attack.type}
            </span>{" "}
            {attack.damage}
          </p>
        )
      })}
      Special attacks :
      {location.state.pokemon.attacks.special.map(attack => {
        return (
          <p>
            {attack.name}{" "}
            <span className={`type ${attack.type.toLowerCase()}`}>
              {attack.type}
            </span>{" "}
            {attack.damage}
          </p>
        )
      })}
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Pokemon
