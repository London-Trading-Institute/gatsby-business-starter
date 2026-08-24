import React from 'react'
import {ContactForm, Layout} from '../components/'

const Contact = () => {
    return (
        <Layout title={"Contact Us"} description={"Get in touch with London Trading Institute about our trading courses, mentorship and Auto Strategy Club."}>
            <ContactForm />
        </Layout>
    )
}

export default Contact;
