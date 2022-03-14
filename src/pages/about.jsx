import React from 'react'
import Layout from '../components/Layout'
import CardV2 from '../components/CardV2'
import Seo from '../components/seo'

const About = () => {
    const text = 'Essa página conta um pouco da nossa história'

    return(
        <Layout>
            <Seo
                title='About'
                lang='uk'
            />
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1>Sobre</h1>
                        <p>{ text }</p>
                    </div>
                </div>
            </div>

            <div className="container py-2">
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <CardV2
                            titleCard='Titulo 1'
                            textCard='Texto 1'
                            colorButton='gatsby'
                            backgroundCard='red'
                            imageCard='foto-1'
                            styleDefault={true}
                        />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <CardV2
                            titleCard='Titulo 2'
                            textCard='Texto 2'
                            colorButton='primary'
                            imageCard='foto-2'
                            styleDefault={false}
                        />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <CardV2
                            titleCard='Titulo 3'
                            textCard='Texto 3'
                            colorButton='gatsby'
                            backgroundCard='green'
                            imageCard='foto-3'
                            styleDefault={true}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About