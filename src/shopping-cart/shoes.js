import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';
import { connect } from "react-redux";

class Shoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (id) => {
    this.props.addToCart(id);

  }

  render() {
    // let itemList = this.props.items.filter((p) => p.category === 'mobile').map(product => {
    let itemList = this.props.items.filter((p) => p.category === 'shoes').map(product => {
      return (
        <Col  xs={12} sm={4} key={product.id} >
          <Card style={{ margin: "5px" }}>
            <Card.Img src={product.image} style={{height:'100px'}} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>{product.price}</Card.Title>
              <Button className="btn-color" onClick={() => { this.handleClick(product.id) }} >Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <div>
        <Container className="mainImages">
          <Row className="row1">
            {itemList}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shoes);