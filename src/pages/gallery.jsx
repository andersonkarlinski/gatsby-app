import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const Gallery = () => {
    const { gallery } = useStaticQuery(graphql`
        query MyQuery {
            gallery: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/images/"}}) {
                nodes {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                        )
                    }
                    id
                }
            }
        }
    `)

    return(
        <Layout>
            <Seo
                title='Gallery'
            />
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1 class="mb-4">Gallery</h1>
                    </div>
                </div>
                <div className="row">
                    { gallery.nodes.map(image => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                            <GatsbyImage className='rounded' image={image.childImageSharp.gatsbyImageData} key={image.id} alt="Gallery" />
                        </div>
                    )) }
                </div>
            </div>
        </Layout>
    )
}

export default Gallery