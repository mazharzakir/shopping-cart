import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { addToCart } from '../actions/cartActions';

class Watches extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (id) => {
    this.props.addToCart(id);

  }

  render() {
    // let itemList = this.props.items.filter((p) => p.category === 'mobile').map(product => {
    let itemList = this.props.items.filter((p) => p.category === 'watch').map(product => {
      return (
        <Col  xs={12} sm={4} key={product.id} >
          <Card style={{ margin: "5px" }}>
            <Card.Img src={product.image} style={{height:'200px'}} />
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
          <Row >
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

export default connect(mapStateToProps, mapDispatchToProps)(Watches);

