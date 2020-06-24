import React from 'react'
import NavBar from './NavBar'
import NetsFooter from './NetsFooter'
import {FaFacebookMessenger,FaLinkedinIn,FaGithub,FaWhatsapp} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {AiOutlineNumber} from 'react-icons/ai'
const Contact=()=>{
    return(
        <section className="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"> 
            <NavBar/> 
            </div>
            <div  className="col-9 text-center">
                <article className=" bg-dark p-5"> 
            <h1>Hola!</h1>
            <br/>
            <p><strong>No dudes en comunicarte</strong> </p>
            <h2>Facebook <a href="https://www.facebook.com/dc1310" target="_blank"><FaFacebookMessenger/></a></h2>
            <h2>LinkedIn <a href="https://www.linkedin.com/in/anderson-guerrero-984b5a193/" target="_blank"><FaLinkedinIn/></a></h2>
            <h2>GitHub <a href="https://github.com/AndersonDGueC" target="_blank"><FaGithub/></a></h2>
            <h2><AiOutlineNumber/> Phone <a href="(+57 3197775473)" target="_blank"><FaWhatsapp/></a></h2>
            <h2> Email <a href="adguerreroc@unal.edu.co" target="_blank"><MdEmail/></a></h2>
            </article>
            </div>

        </div>
        <NetsFooter/>
        </div>
        </section>
    )
}

export default Contact;