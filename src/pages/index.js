import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./styles.css"
import PokemonCard from "../components/PokemonCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="pokemons">
      <StaticQuery
        query={query}
        render={data =>
          data.dataJson.pokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} />
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
        id
        number
        name
        image {
          childImageSharp {
            fluid {
              src
            }
          }
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
        evolutions {
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }

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
