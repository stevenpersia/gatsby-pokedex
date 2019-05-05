import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="pokemons">
      <StaticQuery
        query={query}
        render={data =>
          data.dataJson.pokemons.map(pokemon => (
            <Link to="">
              <div className="pokemon">
                <img src={pokemon.image} alt={pokemon.name} />
                {pokemon.name}
                <div className="number">#{pokemon.number}</div>
                <div className="type">{pokemon.attacks.special[0].type}</div>
              </div>
            </Link>
          ))
        }
      />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const query = graphql`
  query {
    dataJson {
      pokemons {
        number
        name
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
            special {
              name
              type
              damage
            }
          }
        }
      }
    }
  }
`

export default IndexPage
