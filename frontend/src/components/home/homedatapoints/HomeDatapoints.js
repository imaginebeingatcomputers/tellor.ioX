import React, { useState, useEffect } from "react";
import "./HomeDatapoints.scss";
import Datapoint from "../../shared/Datapoint/Datapoint";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomeDatapoints() {
  //Component State
  const [homeDataPoints, setHomeDataPoints] = useState([]);
  const [dataPointsTotal, setDataPointsTotal] = useState(0);
  const eventsFromRedux = useSelector((state) => state.graphEvents.eventsData);
  console.log("FROM COMPONENT", eventsFromRedux);

  useEffect(() => {
    if (eventsFromRedux) {
      setHomeDataPoints(eventsFromRedux.slice(0, 5));
      setDataPointsTotal(eventsFromRedux.length);
    }
  }, [eventsFromRedux]);

  return (
    <div className="HomeDatapoints">
      <div className="Datapoints">
        {homeDataPoints &&
          homeDataPoints.map((data, i) => {
            return <Datapoint key={i} data={data} />;
          })}
      </div>
      <div className="btns">
        <Link to="/usetellor">
          <Button size="large" className="bigbutton fxw">
            use tellor’s datapoints
          </Button>
        </Link>
        <Link to="/requestnew">
          <Button size="large" className="bigbutton fxw">
            request new datapoint
          </Button>
        </Link>
        {/* <Link to="/live" className="linktotal">
          see all datapoints ({dataPointsTotal})
        </Link> */}
      </div>
    </div>
  );
}
