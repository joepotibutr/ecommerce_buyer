import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import RenderItemCheckout from '../RenderItemsCheckout'
import { totalSelector, selectedProducts , selectedSizes } from '../../selectors'
import RenderCostTotal from '../RenderCostTotal'

const OrderSummaryContainer = styled.section`
    padding: 40px;
    background: #fbfbfb;
    border-radius:6px;
    min-width:300px;
    max-width:620px;

    @media only screen and (max-width : 750px){
            max-width:100%;
    }

    .order-summary-table {

        .items-to-checkout {
            border-top:1px solid #f3f3f3;
            min-height:300px;
        }

        .order-total-price {
            border-bottom: 1px solid #f3f3f3;
        }
    }
`


const OrderSummary = ({ products,size,total }) => {
    return (
        <OrderSummaryContainer>
            <h3> OrderSummary </h3>
            <div className="order-summary-table"> 
                <div className="items-to-checkout">
                    <RenderItemCheckout 
                        products={products}
                        size={size}
                    />
                </div>
                <div className="order-total-price">
                    <RenderCostTotal 
                        total={total}
                    />
                </div>
            </div>
        </OrderSummaryContainer>
    )
}

const mapStateToProps = state => ({
    products : selectedProducts(state),
    total : totalSelector(state),
    size : selectedSizes(state),
})

export default connect(mapStateToProps)(OrderSummary)