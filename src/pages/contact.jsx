import React from 'react'
import Layout from '../components/Layout'
import * as Styled from '../styles/pages/contactStyes'
import Seo from '../components/seo'

const Contact = () => {
    const text = 'Use essa página para entrar em contato'

    return(
        <Layout>
            <Seo
                title='Contact'
            />
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1>Contato</h1>
                        <p>{ text }</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <form name='contact' method='post' data-netlify='true'>
                            <input type='hidden' name='form-name' value='contact' />
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputName" name="name" placeholder="Nome" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail" name="email" placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTexta" name="message" placeholder="Mensagem" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Enviar</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Styled.EmailWrapper danger/> anderson@numai.com.br
                            </li>
                            <li className="list-group-item">
                                <Styled.PhoneWrapper danger /> (54) 99184.2588git 
                            </li>
                            <li className="list-group-item">
                                <Styled.LocationWrapper danger /> Localização
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact