import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bgImg from "../assets/images/background-image.jpg"

const NewsPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bgContainer">
      <div className="h1Container_desktop">
        <h1>News</h1>
      </div>
      <img src={bgImg} alt="Basketball player dunking." className="bgImage" />
    </div>
    <div className="container-fluid">
      <div className="h1Container">
        <h1>News</h1>
      </div>
      <div className="pContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id magni ad
          est eveniet sint in ducimus velit! Itaque amet non tempore quis, a
          sequi culpa doloribus consequatur fuga optio quod consectetur nam
          tenetur dolorem ipsum officia illum repellendus aliquam, nostrum
          laboriosam veritatis. Sequi explicabo facere odit minus voluptatum quo
          non corporis? Totam voluptas eaque id, hic, ut et accusamus suscipit
          excepturi laboriosam, omnis soluta. Doloribus, ex. Libero delectus
          quasi blanditiis laborum placeat rerum enim numquam ullam atque, vel
          cupiditate nam.
        </p>
      </div>
    </div>
  </Layout>
)

export default NewsPage
