import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Image = (props) => {
    const { foto1, foto2, foto3 } = useStaticQuery(graphql`
        query {
            foto1: file(relativePath: { eq: "foto-1.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: DOMINANT_COLOR
                        formats: [AUTO, WEBP]
                    )
                }
            },
            foto2: file(relativePath: { eq: "foto-2.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: DOMINANT_COLOR
                        formats: [AUTO, WEBP]
                    )
                }
            },
            foto3: file(relativePath: { eq: "foto-3.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: DOMINANT_COLOR
                        formats: [JPG]
                    )
                }
            }
        }
    `)

    return(
        <>
            {(() => {
                switch (props.name){
                    case 'foto-1':
                        return <GatsbyImage image={foto1.childImageSharp.gatsbyImageData} alt="Foto 01" />
                    case 'foto-2':
                        return <GatsbyImage image={foto2.childImageSharp.gatsbyImageData} alt="Foto 02" />
                    case 'foto-3':
                        return <GatsbyImage image={foto3.childImageSharp.gatsbyImageData} alt="Foto 03" />
                    default:
                        return null
                }
            })()}
        </>
    )
}

export default Image