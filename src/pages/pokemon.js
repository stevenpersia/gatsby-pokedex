import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Pokemon = ({ location }) => (
  <Layout>
    <SEO title={location.state.name} />
    <StaticQuery
      query={query}
      render={data => (
        <div className="pokemon">
          <img src={data.image} alt={data.name} />
          {data.name}
          <div className="number">#{data.number}</div>
          <div className="type">{data.attacks.special[0].type}</div>
        </div>
      )}
    />
    <Link to="/">Go back to the homepage</Link>
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

export default Pokemon
