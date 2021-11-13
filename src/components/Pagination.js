import React, { useState, useEffect } from "react";
import "./style/pagination.scss";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Pagination() {
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  var pageNumbersArray = [];

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setTotalPageNumber(response.data.total_pages);
    });
  }, []);

  
  for (let i = 1; i < totalPageNumber+1; i++) {
    pageNumbersArray.push(i)
}

  return (
    <div className="pagination">
      <div className="pagination--back">
        <IoIosArrowBack />
      </div>

      <div className="pagination--pageNumbers">
        {pageNumbersArray.map((pageNumber) => (
          <div className="pagination--pageNumbers--pageNumber" key={pageNumber}>
            {pageNumber}
          </div>
        ))}
      </div>

      <div className="pagination--forward">
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default Pagination;
