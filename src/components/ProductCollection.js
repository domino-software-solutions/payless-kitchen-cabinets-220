import React from "react";
import "./ProductCollection.css";

const ProductCollection = () => {
  return (
    <div className="product-collection">
      <h1>Our Extensive Product Collection</h1>
      <div className="products-container">
        <div className="product">
          <h2>Countertops</h2>
          <p>
            Choose from quartz, granite, and other top-notch materials for your
            countertops. They come in different colors and patterns, so you can
            easily find the ones that suit your preferences and personal style.
          </p>
        </div>
        <div className="product">
          <h2>Flooring</h2>
          <p>
            Explore various flooring options, ranging from the classic wood-look
            with a brown grain and industrial-style gray flooring to more
            creative options in bright colors.
          </p>
        </div>
        <div className="product">
          <h2>Sinks</h2>
          <p>
            From single- to double-basin, undermount to top-mount, our sinks
            come in different shapes and sizes—all expertly made with durable
            materials.
          </p>
        </div>
        <div className="product">
          <h2>Backsplash</h2>
          <p>
            Choose from various backsplash options that complement your kitchen
            space. Our selection includes subway patterns, chevron styles,
            basket weave, and more.
          </p>
        </div>
        <div className="product">
          <h2>Faucets</h2>
          <p>
            Select from a range of faucets with different bodies and lever
            styles. We have spring-spout faucets as well as pull-out spray
            faucets, perfect for your kitchen sinks.
          </p>
        </div>
        <div className="product">
          <h2>Knobs</h2>
          <p>
            Browse our selection of knobs for your kitchen cabinets or bathroom
            storage. Your options include classic round knobs, straight bars,
            curved handles, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
