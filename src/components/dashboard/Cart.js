import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from 'react-stripe-checkout';

class Cart extends Component {

    onToken = (token, addresses) => {
        this.props.cart.map(item => {
            this.props.deleteFromCart(item.id)
        })
    };
    render() {

        const { cart, deleteFood, id, addToCart, deleteFromCart } = this.props;
        const total = 300;
        const quantity = 1;
        console.log(cart);

        var found = false;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].title == "New food ") {
                found = true;
                break;
            }
        }
        console.log(found);
        return (
            <div className="container">
                <div className="row">
                    <div className="col s9">
                        <h5>Your foods </h5>
                        <hr></hr>
                        <div className="food-list section">
                            {cart && cart.map(item => {
                                const handleDelete = () => {
                                    deleteFromCart(item.id)
                                }
                                if (item) {
                                   

                                    return (
                                        <div className="row">
                                            <div className="col s3">
                                                <div className="card">
                                                    <img width="100%" height="80%" src={item.url} />
                                                </div>
                                            </div>
                                            No item exist 
                                            <div className="col s9">
                                                <h5>{item.title}</h5>
                                                <p>${item.price}</p>
                                                <p>{item.content}</p>
                                                <p>Quantity: {quantity}</p>
                                                <button className="btn" onClick={() => handleDelete()}>Remove</button>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="row">
                                            <div className="col s3">
                                                No item exist 
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="col s3">
                        <div>
                            <h5>Subtotal</h5>
                            <hr></hr>
                            $ {
                                cart.reduce((accumulator, current) => parseInt(accumulator) + parseInt(current.price), 0)
                                //Object.keys(cart).length
                            }
                        </div>
                        <StripeCheckout
                            amount={cart.reduce((accumulator, current) => parseInt(accumulator) + parseInt(current.price), 0) + '00'}
                            billingAddress
                            description="Awesome Product"
                            image="https://yourdomain.tld/images/logo.svg"
                            locale="auto"
                            name="YourDomain.tld"
                            stripeKey="pk_live_DJsB0FirIFbXuHp4Gau70AID"
                            token={this.onToken}
                            zipCode
                        />
                    </div>

                </div >
            </div >
        );
    }
}

export default compose(
    firestoreConnect(props => {
        return [{
            collection: "users",
            doc: `${props.id}`,
            subcollections: [{ collection: "cart" }],
            storeAs: `${props.ui}-cart`
        }];
    }),
    connect(({ firestore }, props) => {

        return {
            cart: firestore.ordered[`${props.ui}-cart`] || []
        };
    })
)(Cart);


