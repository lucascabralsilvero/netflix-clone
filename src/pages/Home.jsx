import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from "../Request"

const Home = () => {
  return (
    <>
        <Main />
        <Row title="Up Coming" fetchUrl={requests.requestUpcoming} />
        <Row title="Popular" fetchUrl={requests.requestPopular} />
        <Row title="Top Rated" fetchUrl={requests.requestTopRated} />
        <Row title="Trending" fetchUrl={requests.requestTrending} />
        <Row title="Horror" fetchUrl={requests.requestHorror} />
    </>
  )
}

export default Home