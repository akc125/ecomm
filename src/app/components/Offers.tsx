"use client";
import React from "react";
import { Card } from "react-bootstrap";

const offersData = [
  { id: 1, description: "50% off on all products", image: "/card3.jpg" },
  { id: 2, description: "Buy 1 get 1 free", image: "/card4.jpg" },
  { id: 3, description: "Season sale", image: "/card5.jpg" },
  {
    id: 4,
    description: "Min. 40% off | Fun toys & games",
    image: "/card1.jpg",
  },
  {
    id: 5,
    description: "Free shipping on orders over $50",
    image: "/card7.jpg",
  },
  {
    id: 6,
    description: "Upto 60% off on all products",
    image: "/card6.jpg",
  },
];

export default function Offers() {
  return (
    <div className="container mt-4">
      <div className="row">
        {offersData.map((offer) => (
          <div key={offer.id} className="col-md-4">
            <Card
              className="mb-3"
              style={{ height: "450px", fontWeight: "bold" }}
            >
              <Card.Body>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Img src={offer.image} />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
