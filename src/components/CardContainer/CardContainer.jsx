import React from 'react'
import './CardContainer.css'
import TotalSale from './Cards/TotalSale';
import TotalLead from './Cards/TotalLead';
import TotalProfit from './Cards/TotalProfit';
import TotalCost from './Cards/TotalCost';

const CardContainer = () => {
    return (
        <div class="row">
             <TotalSale/>
             <TotalLead/>
             <TotalProfit/>
             <TotalCost/>
        </div>
    )
}
export default CardContainer;