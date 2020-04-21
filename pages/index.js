import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Layout from '../components/Layout'

class Index extends Component {
  render () {
    return <div>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </Helmet>
      <Layout {...this.props}>
        <p>here</p>
      </Layout>
    </div>
  }
}

export default Index