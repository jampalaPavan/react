import React from 'react';
import './IpoDetail.css'; // Renamed the imported CSS file

const IpoDetail = ({ ipo }) => (
  <div className="ipo-card">
    <h3>{ipo.companyName}</h3>
    <p>{`Symbol: ${ipo.symbol}`}</p>
    <p>{`Price Range: ${ipo.priceRange}`}</p>
    <p>{`Filed Date: ${ipo.filedDate}`}</p>
    <p>{`First Day Close: ${ipo.firstDayClose}`}</p>
    <p>{`Lockup Period: ${ipo.lockupPeriod}`}</p>
    <p>{`Offering Date: ${ipo.offeringDate}`}</p>
    <p>{`Price Range High: ${ipo.priceRangeHigh}`}</p>
    <p>{`Price Range Low: ${ipo.priceRangelow}`}</p>
    <p>{`Shares: ${ipo.shares}`}</p>
    <p>{`Status: ${ipo.status}`}</p>
    <p>{`Volume: ${ipo.volume}`}</p>
    {/* Use a conditional rendering for underwriters */}
    {ipo.underwriters && (
      <p>{`Underwriters: ${ipo.underwriters.join(', ')}`}</p>
    )}
  </div>
);

export default IpoDetail;
