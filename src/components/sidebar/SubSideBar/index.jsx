import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function SubSideBar(props) {
  const { isMenu, handleMenuClose } = props;
  return (
    <>
      <Offcanvas show={isMenu} onHide={handleMenuClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SubSideBar;
