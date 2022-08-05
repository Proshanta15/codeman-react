import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

const CommonCard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <div className="all_body">
              <div className="card_part">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonCard;
