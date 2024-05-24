import React from 'react';
import './MarketingPage.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import linegraph from '../../assets/stockimg.jpg';
import { Container } from 'react-bootstrap';

const pdata = [ 
    {
       price: 200,
       month: "Jan" 
      },
    {
       price: 40, 
      month: "March" 
    },
    { 
      price: 200,
       month: "Jan" 
      },
    {
       price: 50, 
      month: "Feb" 
    },
    { 
      price: 100,
       month: "April"
       },
    {
       price: 70, 
      month: "May" 
    },
    {
       price: 30, 
      month: "June" 
    },
    {
       price: 300,
       month: "July" 
      },
    {
       price: 240,
       month: "Aug" 
      },
    {
       price: 100,
       month: "Sep" 
      },
    {
       price: 60, 
      month: "Oct" 
    },
    {
       price: 130,
       month: "Nov" 
      },
    {
       price: 400,
       month: "Dec" 
      }
];

const MarketingPage = () => {
  return (
    <>
    <div className='container'>
      <div className='line-chart-container'>
        <h1>COMMODITY MARKET</h1>
        <ResponsiveContainer aspect={2.4}>
          <LineChart data={pdata} margin={{top:5, right:30, left:20, bottom:5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="month" interval={0}/>
            <YAxis/>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className='container_banner'>
        <div className='banner_outer'>
          <div className='col'>
            <h3 className='title'>Stock Holdings</h3>
            <p>Stock holdings refer to the number of stocks, or shares, that a person or institution owns in a company.
              These make up a portion of an investment portfolio, by futures, bonds, mutual funds and other assets. 
              Each of these is an investment that can boost in profit, generating a return for the holder.
              A different portfolio contains a range of investments across multiple sectors. 
              Rather than putting all your money in one stock, you increase it across 
              investment products that can appreciate in value in different ways.</p>
            <div className='btn_wrapper'>
              <a className='btn' href='/'> GET STARTED</a>
            </div>
          </div>
          <div className='col'>
            <div className='sub_banner_image'>
              <img src={linegraph} alt='Banner_image'/>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='banner_outer'>
          <div className='col'>
            <div className='sub_banner_image'>
              <img src={linegraph} alt='Banner_image'/>
            </div>
          </div>
          <div className='col'>
            <h3 className='title'>Intraday Trading</h3>
            <p>Intraday trades, also known as day trading, involve buying and selling a stock within a trading session, i.e. on the same day.
             If you do not square off your situation by the end of the day, your stock can be sold automatically at the day’s closing price under assured brokerage plans.
              Maximum traders set up an intraday trade by setting a target price for a stock and buying it if it is trading under the target price.
They then sell the stock if it reaches the target price or if they feel the stock won’t reach the target before the market closes for the day. 
The idea behind trading shares intraday is to make quick profits within a day.</p>
            <div className='btn_wrapper'>
              <a className='btn' href='/'> GET STARTED</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MarketingPage;
