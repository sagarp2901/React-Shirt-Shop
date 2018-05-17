import React, { Component } from 'react';
import './ShirtInCart.css';

import { Row, Col } from 'reactstrap';

// const ShirtInCartImg = require('../../images/MensShirtDesigns-1.jpg');

class ShirtInCart extends Component {

    constructor(props) {
        super(props);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    updateQuantity = (event) => {
        let shirt = this.props.shirt;
        let quantity = parseInt(event.target.value, 10);
        shirt.quantity = isNaN(quantity) ? 0 : quantity;
        this.props.updateQuantity(shirt);
    }

    removeFromCart = () => {
        this.props.removeFromCart(this.props.shirt);
    }
    render() {
        return (
            <Row className="shirt-in-cart-container">
                <Col xs="4">
                    <div className="shirt-in-cart-img">
                        <img className="img-fluid" src={require(`../../images/${this.props.shirt.image}`)} alt="shirt in cart" />
                    </div>
                </Col>
                <Col xs="7" className="shirt-in-cart-middle">
                    <div className="shirt-in-cart-title">{this.props.shirt.name}</div>
                    <div className="shirt-in-cart-description">{this.props.shirt.description}</div>
                    <select className="form-control form-control-sm size-select">
                        <option value="">Select</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                    </select>
                    <Row className="quantity-row">
                        <input type="text" maxLength="3" className="form-control form-control-sm quantity" value={this.props.shirt.quantity} onChange={this.updateQuantity} />
                        <div className="price-txt">@{this.props.shirt.price}</div>
                    </Row>
                </Col>
                <Col xs="1">
                    <div className="text-center">
                        <button type="submit" className="primary-btn btn-close" onClick={() => { this.removeFromCart(); }}>X</button>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ShirtInCart;