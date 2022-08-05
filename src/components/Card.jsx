import moment from "moment";
import React, { useState } from "react";
import { sampleData } from "../data/sampleData";
import Automated from "./Automated";
import ButtonGroup from "./ButtonGroup";
import Manual from "./Manual";

const Card = () => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();

  let today = new Date();

  let date =
    monthNames[d.getMonth()] +
    " " +
    today.getDate() +
    " " +
    today.getFullYear();

  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let searchData = sampleData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <div className="search">
        <div className="title">
          <h6>Search: </h6>
        </div>
        <div className="field">
          <input type="text" value={filter} onChange={searchText.bind(this)} />
        </div>
      </div>

      <div className="card_items">
        {searchData.map((curElem) => {
          const { id, name, originType, intents } = curElem;

          return (
            <div className="card_item" key={id}>
              <div className="card_header">
                {originType === "automated" ? <Automated /> : <Manual />}
              </div>
              <div className="card_body">
                <h5>{name}</h5>
                <p>{intents} Interns</p>
              </div>
              <div className="card_btn">
                <ButtonGroup />
              </div>
              <div className="card_footer">
                <small>
                  Last Updated: {date} @ {moment().format("LT")}
                </small>
                <p> </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
