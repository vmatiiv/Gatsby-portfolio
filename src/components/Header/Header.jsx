import React from 'react'
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image' 
import { useStaticQuery ,graphql} from 'gatsby'

function Header({header}) {
    const data = useStaticQuery(graphql`
    query {
      images: file(relativePath: { eq: "baner6.jpg" }) {
        childImageSharp {
          fluid(quality: 90,maxWidth:1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `); 
    return (
        <header id="header" className='header'>
            <div className='header_overlay'/>
            <Img className='header_baner'  fluid={data.images.childImageSharp.fluid} alt=""/>
            <Fade left delay={500} duration={1000}>
                <h1 className='header_text'>
                    Hi, my name is <span className='header_text__modified'> {header.name} </span><br/> 
                    I'm the <span className='header_text__modified'> {header.develop} </span> Developer
                </h1>
            </Fade>

        </header>
    )
}

export default Header