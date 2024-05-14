import React from "react";
import css from "./Dashboard.module.css";
import Statistics from "../../Components/Statistics/Statistics";
import {
  cardsData,
  ordersData,
  groupNumber,
  INITIAL_EVENTS,
  userData,
  boardData,
} from "../../data/data";
import { FcStatistics } from "react-icons/fc";
import Orders from "../../Components/Orders/Orders";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead}  them-container`}>
          <div className={css.head}>
         

            
          </div>

          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div key={index} className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
         <Statistics/>
       
      </div>

      <Orders/>
     
    </div>
  );
};

export default Dashboard;