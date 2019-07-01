import React, { Component } from 'react';
import './Today.css'
import axios from 'axios'

class Today extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor () {
        super();
        this.state = {
            btcprice: '',
            ltcprice: '',
            ethprice: ''
        };
    }
    // This is called when an instance of a component is being created and inserted into the DOM.
    componentWillMount () {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
            .then(response => {
                // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                this.setState({ btcprice: response.data.BTC.USD });
                this.setState({ ethprice: response.data.ETH.USD });
                this.setState({ ltcprice: response.data.LTC.USD });
            })
            // Catch any error here
            .catch(error => {
                console.log(error)
            })
    }
    // The render method contains the JSX code which will be compiled to HTML.
    render() {
        return (
            <div className="Today">
                <h2>Current Price</h2>
                <div className="today-prices">
                    <div className="today-price right-line">
                        <h5>${this.state.btcprice}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="today-price right-line">
                        <h5>${this.state.ethprice}</h5>
                        <p>1 ETH</p>
                    </div>
                    <div className="today-price">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 LTC</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today;