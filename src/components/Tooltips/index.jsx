import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./style.css";
function Tooltips() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <p className="based">
        You are seeing this ad based on the product’s relevance to your search
        query. Let us know
      </p>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button className="
Sponsored-btn">
Sponsored</button>
    </OverlayTrigger>
  );
}

export default Tooltips;
