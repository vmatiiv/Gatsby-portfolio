import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery,graphql} from 'gatsby'
const  ProjectImage =({filename}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt='' fluid={imageFluid} />;
    }}
  />
)

export default ProjectImage
// const ProjectImg = ({ filename }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(maxWidth: 1366) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => {
//       const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

//       if (!image) return null;

//       const imageFluid = image.node.childImageSharp.fluid;
//       return <Img alt='' fluid={imageFluid} />;
//     }}
//   />
// );