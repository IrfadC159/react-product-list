import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import MobilePhones from "./Data";

const Mobile = () => {
  const [items, setItems] = useState(MobilePhones);

  const incQty = (id) => {
    let newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };
  const decQty = (id) => {
    let newItem = items.map((item) => {
      //return is important here
      return item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item;
    });
    setItems(newItem);
  };
  return (
    <>
      <h2 className="bg-info"> List of Mobile Phones</h2>{" "}
      <Container className="m-3 d-flex flex-wrap align-items-center justify-content-center">
        {items.map((mobile) => (
          <div className="m-3" key={mobile.id}>
            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Img
                variant="top"
                src={mobile.image}
                style={{ height: "210px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{mobile.model}</Card.Title>
                <Card.Text>{mobile.description}</Card.Text>
                <div className="m-2">
                  Qty :{" "}
                  <Button className="m-2" onClick={() => incQty(mobile.id)}>
                    +
                  </Button>
                  {mobile.qty}
                  <Button className=" m-2" onClick={() => decQty(mobile.id)}>
                    -
                  </Button>
                </div>
                <Button variant="primary" className="p-2">
                  Order now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Mobile;
//I used vite instead of  Create React App (CRA) to build these project.Create React App is outdated.
