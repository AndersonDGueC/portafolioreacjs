import React from 'react'
import {FiFacebook} from 'react-icons/fi'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {FaGithubSquare} from 'react-icons/fa'

const NetsFooter =()=>{
    return(
        <footer>
            <section className="text-center">            
            <h2>
                Visatame!
            </h2>
            <article>
                <a href="https://www.facebook.com/dc1310" target="_blank"><FiFacebook size={70}/></a>
                <a href="https://www.linkedin.com/in/anderson-guerrero-984b5a193/" target="_blank"><RiLinkedinBoxLine size={70}/></a>
                <a href="https://github.com/AndersonDGueC" target="_blank"><FaGithubSquare size={70}/></a>
            </article>
            
            </section>
            <section className="text-right">
            <h3 className="p-3">Copyright Medellin-Antioquia</h3>
            </section>
        </footer>
    )
}
export default NetsFooter;