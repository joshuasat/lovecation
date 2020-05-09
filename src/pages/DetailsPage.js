import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";

import itemDetails from "json/itemDetails";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription
                  data={itemDetails}
                ></PageDetailDescription>
              </Fade>
            </div>
            <div className="col-5">Booking Form</div>
          </div>
        </section>
      </>
    );
  }
}
