import React, { useEffect, useState, useRef } from "react";
import "./../../App.css";
import CryptoList from "./CryptoList/CryptoList";
import Pagination from "./Pagination/Pagination";

const FrontendPagination = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coinData = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        );

        const coinDataToJson = await coinData.json();
        setCoinsData(coinDataToJson);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (hasFetched.current) return;
    fetchCoins();
    hasFetched.current = true;
  }, []);

  const lastPostIndex = currentPage * postsPerPage; // 1*8=8; 2*8 = 16
  const firstPostIndex = lastPostIndex - postsPerPage; // 8-8 = 0, 16-8 = 8
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="frontend-pagination">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default FrontendPagination;
