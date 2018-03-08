import React from 'react';

// Images
import images from'./images';

const aboutimg = images.about;

const About = () => {
  return (
    <div className="about">
      <div id="about" className="about-container container">
        <div className="about-text">
          <h1>
            What is Tex-Mex?
          </h1>
          <p>
            Tex-Mex is a fusion of Mexican and American cuisines, deriving from the culinary creations of Tejanos. It has spread from border states such as Texas and others in the Southwestern United States to the rest of the country as well as Canada. Tex-Mex is most popular in Texas and some parts of Mexico.
          </p>
        </div>
        <div className="about-image"
          style={{backgroundImage: "url(" + aboutimg + ")", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
        >
        </div>
      </div>
    </div>
  )
}

export default About;
