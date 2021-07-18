import React from 'react'
import {IntroCard, Features, Menu, ProductInfo, Banner, Layout} from '../components'
import Content from './content/home.json'

const IndexPage = () => {
    return (
            <div>
              <Layout>
                <IntroCard data = {Content.introCard}/>
                <Features data = {Content.features}/>
                <Menu data = {Content.menu}/>
                <ProductInfo data = {Content.productInfo}/>
                <Banner data = {Content.banner}/>
              </Layout>
            </div>
 
    )
}

export default IndexPage
