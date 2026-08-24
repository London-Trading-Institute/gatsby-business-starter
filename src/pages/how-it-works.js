import React from 'react'
import {Layout, HIWCard} from '../components'
import Content from './content/how-it-works.json'

const HowItWorks = () => {
    return (
        <Layout title={"How It Works"} description={"Learn how London Trading Institute's trading education and mentorship programmes work, and how to get started."}>
            <HIWCard data = {Content} />
        </Layout>
    )
}

export default HowItWorks