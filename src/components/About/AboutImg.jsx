import React from 'react'
import Img from 'gatsby-image' 
import { useStaticQuery ,graphql} from 'gatsby'

function AboutImg({fileName}) {
    const image = useStaticQuery(graphql`
        query{
            aboutImage: allFile {
                edges {
                    node {
                        relativePath
                        childImageSharp{
                            fluid(maxWidth:350){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)
    const aboutImage = image.aboutImage.edges.find(n => n.node.relativePath.includes(fileName));
    return (
        <div className="about__picture">
            <Img className="about__image" fluid={aboutImage.node.childImageSharp.fluid}/>
        </div>
    )
}

export default AboutImg
