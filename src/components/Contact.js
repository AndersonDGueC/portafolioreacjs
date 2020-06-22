import React from 'react'
import {FiFacebook} from 'react-icons/fi'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {FaGithubSquare} from 'react-icons/fa'
const Contact =()=>{
    return(
        <footer>
            <section className="text-center">
            <h1>
                Contactame!
            </h1>
            <article>
                <FiFacebook size={50}/>
                <RiLinkedinBoxLine size={50}/>
                <FaGithubSquare size={50}/>
            </article>
            </section>
            <section id="pie" className="text-right">
            <h2>Copyright Medellin-Antioquia</h2>
            </section>
        </footer>
    )
}
export default Contact;