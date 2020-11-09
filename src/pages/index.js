import React from "react"


import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav"
import About from '../components/About'
import Projects from "../components/Projects"
import Technologies from "../components/Technologies"
import Contact from "../components/Contact"
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../style/main.scss'
import {projects,about,contacts,technologies,header,nav} from '../data/data'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header header={header}/>
      <main>
        <Nav nav={nav}/>
        <About about={about}/>
        <Technologies technologies={technologies}/>
        <Projects projects={projects}/>
        <Contact contacts={contacts}/>
      </main>
    <Footer/>
  </>
)

export default IndexPage
