
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Button, Row, Col } from "react-bootstrap";
import { removeItem } from '../actions/cartActions'
class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }


    render() {
        let total = this.props.total
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {

                    return (
                        <Col xs={12} sm={4}  >
                            <div className="collection-item avatar" key={item.id}>
                                <div className="item-img" style={{height:'100px'}} >
                                    <img src={item.image} style={{height:'100px'}}  alt={item.img} className="" />
                                </div>

                                <div className="item-desc">
                                    <span className="title">{item.title}</span>
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price}</b></p>
                                    <p>
                                        <b>Quantity: {item.quantity}</b> <br />

                                    </p>
                                    <Button className="waves-effect waves-light btn pink remove btn-color " onClick={() => { this.handleRemove(item.id) }} >Remove</Button>

                                </div>


                            </div>

                            {/* MODAL START HERE */}

                            <div className="modal fade modal " id="checkoutModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title modal-heading "> Payments Details</h3>
                                            <button type="button" className="close" data-dismiss="modal">
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label for="inputsm">Buyer Name</label>
                                                    <input className="form-control input-sm" id="inputsm" type="text" />
                                                    <label for="inputsm">Cell num</label>
                                                    <input className="form-control input-sm" id="inputsm" type="text" />
                                                    <label for="inputsm">Address</label>
                                                    <input className="form-control input-sm" id="inputsm" type="text" />
                                                    <label for="inputsm">Credit Card Num</label><br />
                                                    <input className="form-control input-sm" id="inputsm" type="text" />
                                                </div></form>




                                        </div>
                                        <div className="modal-footer">
                                            <button type="button"  data-dismiss="modal" style={{backgroundColor:'white', color:'#f57224'  }} >Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* MODAL ENDS HERE */}
                        </Col>
                    )

                })
            ) :

            (
                <p>Nothing.</p>
            )

        let showPrice = this.props.items.length ?
            (
                <div className="show-Prce" >
                    <h5 className="totalPrice" >Total Price: {total} </h5>
                    <Button variant="primary" className="btn-color" data-toggle="modal" data-target="#checkoutModal"  >CHECKOUT</Button>

                </div>
            ) :
            (
                <div>

                </div>
            )


        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        <Row>
                            {addedItems}

                        </Row>
                        <Row >

                            {showPrice}
                        </Row>

                    </ul>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {

    return {
        items: state.addedItems,
        total: state.total

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)