import React from 'React'
import * as Styled from './styled.js'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
    const {
        site: {
            siteMetadata: {
                socialMedia: {
                    github,
                    instagram,
                    facebook,
                },
                copyright,
                description
            }
        }
    } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                socialMedia {
                    github
                    instagram
                    facebook
                }
                copyright
                description
                }
            }
        }
    `)

    return(
        <div className="bg-dark">
            <div className="container">
                <div className="row text-white py-4 mt-5">
                    <div className="col-md-6 mb-3">
                        {description}
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                        <a href={github} rel="noopener noreferrer" target='_blank'>
                            <Styled.GithubIcon />
                        </a>
                        <a href={facebook} rel="noopener noreferrer" target='_blank'>
                            <Styled.FacebookIcon />
                        </a>
                        <a href={instagram} rel="noopener noreferrer" target='_blank'>
                            <Styled.InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row bg-gray-dark text-white p-3">
                    <div className="col-12 d-flex justify-content-center">
                        {copyright}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer