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
          data.dataJson.pokemons.map(pokemon => {
            const { image, name, number } = pokemon
            return (
              <Link to="/pokemon" state={{ name: name }}>
                <div className="pokemon">
                  <img
                    src={image && image.childImageSharp.fluid.src}
                    alt={name}
                  />
                  <span className="name">{name}</span>
                  <span className="number">#{number}</span>
                  <div className="type-container">
                    <span
                      className={`type ${pokemon.attacks.special[0].type.toLowerCase()}`}
                    >
                      {pokemon.attacks.special[0].type}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })
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
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        attacks {
          special {
            type
          }
        }
      }
    }
  }
`

export default IndexPage
