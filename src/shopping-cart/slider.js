import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import { connect } from "react-redux";

class Slider extends Component {
  render() {
    let itemList = this.props.items.map(product => {
      return (
        <Carousel className="carosel" >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={product.image}
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      );
    })

    return (
      <div>
        <Carousel className="carosel" >
          {itemList}
        </Carousel>

      </div>
    );

  }
}


const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Slider);