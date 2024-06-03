
import React from 'react';
import './MarketingPage.css';
import { Container } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import market_img from '../../assets/market_img.jpg';
import market_img1 from '../../assets/market_img2.jpg';
const MarketingPage = () => {

  // Sample data with price and month
  const data = [
    { month: "Jan", price: 200 },
    { month: "Feb", price: 50 },
    { month: "Mar", price: 40 },
    { month: "Apr", price: 100 },
    { month: "May", price: 70 },
    { month: "Jun", price: 30 },
    { month: "Jul", price: 300 },
    { month: "Aug", price: 240 },
    { month: "Sep", price: 100 },
    { month: "Oct", price: 60 },
    { month: "Nov", price: 130 },
    { month: "Dec", price: 400 }
  ];

  // Extracting month and price data from the sample data
  const categories = data.map(item => item.month);
  const seriesData = data.map(item => item.price);

  // ApexCharts options
  const options = {
    chart: {
      type: 'area',
      height: 350
    },
    xaxis: {
      categories: categories
    },
    yaxis: {
      title: {
        text: 'Price'
      }
    },
    dataLabels: {
      enabled: false
    }
  };

  return (

    <>
      <div className="about-sec-bg" >
        <h1>Market</h1>
      </div>
      <Container className='aos-init' data-aos="fade-left
" data-aos-duration="3000" data-aos-easing="ease-out-sine
">
        <div className='area-chart-container'>
          <h1>COMMODITY MARKET</h1>
          <h2>STOCK PRICE MOVEMENT</h2>
          <Chart
            options={options}
            series={[{ data: seriesData }]}
            type='area'
            width={900}
            height={400}
          />
        </div>
        <div>
          <h2>COMMODITY MARKET TABLE</h2>

          <table className='table '>
            <thead>
              <tr>
                <th>COMMODITY</th>
                <th>Price(₹)</th>
                <th>CHG(%)</th>
                <th>OPEN INTEREST(₹)</th>
                <th>Low(₹)</th>
                <th>High(₹)</th>
                <th>VOLUME(LOTS)</th>
                <th>Expiry_date</th>
              </tr>
            </thead>
            {/* <tbody>
            <tr>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
            </tr>
          </tbody> */}
          </table>

        </div>
        <div className='container_banner'>
          <div className='banner_outer'>
            <div className='col'>
              <div className='banner-box aos-init' data-aos="fade-left" data-aos-duration="3700" data-aos-easing="ease-in-out">
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
            </div>
            <div className='col'>
              <div className='sub_banner_image aos-init' data-aos="fade-right" data-aos-easing="ease-in-out">
                <img src={market_img1} alt='Banner_image' />
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='banner_outer'>
            <div className='col'>
              <div className='sub_banner_image aos-init' data-aos="fade-up" data-aos-duration="3700" data-aos-easing="ease-in-out">
                <img src={market_img} alt='Banner_image' />
              </div>
            </div>
            <div className='col'>
              <div className='banner-box aos-init' data-aos="fade-down" data-aos-duration="3700" data-aos-easing="ease-in-out">
                <h3 className='title'>Intraday Trading</h3>
                <p>Intraday trades, also known as day trading, involve buying and selling a stock within a trading session, i.e. on the same day.
                  If you do not square off your situation by the end of the day, your stock can be sold automatically at the day’s
                  closing price under assured brokerage plans.Maximum traders set up an intraday trade by
                  setting a target price for a stock and buying it if it is trading under the target price.
                  They then sell the stock if it reaches the target price or if they feel the stock won’t
                  reach the target before the market closes for the day.
                  The idea behind trading shares intraday is to make quick profits within a day.</p>
                <div className='btn_wrapper'>
                  <a className='btn' href='/'> GET STARTED</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default MarketingPage;