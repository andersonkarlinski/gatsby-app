import * as React from "react"
import Layout from "../components/Layout"
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo
      title='404: Not found'
    />
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
