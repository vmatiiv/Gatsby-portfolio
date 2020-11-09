import React from "react"

import SEO from "../components/seo"
import '../style/404.scss'
const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="wrapper">
        <video className="video"  autoPlay muted loop >
            <source src="https://preview.redd.it/0wi4mopf1zm21.gif?format=mp4&s=200288b4f3cd37eeee3b448432ebc0b3b450e4e7" type="video/mp4"/>
            browser
        </video>
        <div className="overlay">
            <div className="text">
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist. It would be better if you just </p>
                <a href="/" className="button">Go Home</a>
            </div>
        </div>


    </div>
  </>
)

export default NotFoundPage
