"use client";
import React from "react";
import "./Category.css"; // make sure to import the CSS file

type CategoryItem = {
  title: string;
  image: string;
};

const categories: CategoryItem[] = [
  {
    title: "Nature",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NhYy6OTlaCSlUm8CH6EriMQHgmumL8lgIQ&s",
  },
  {
    title: "Culture",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidmc1IFhcF2spcboe83UH2satSJA2oipAuA&s",
  },
  {
    title: "Island",
    image:
      "https://www.waca.or.jp/en/wp-content/uploads/2021/02/Song-Saa-Private-Island-1-860x510.jpg",
  },
  {
    title: "Adventure",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2o-kP_kcqcriifhtktjWS_ABhL6tY5FEsFA&s",
  },
  {
    title: "Mountain",
    image:
      "https://indotrek.com/wp-content/uploads/2023/08/kampong-speu-cambodia-mountains-f-1024x680.jpg",
  },
  {
    title: "Wildlife",
    image:
      "https://www.elephantnaturepark.org/enp/jomres/uploadedimages/49/property/0/Cambodia_Wildlife_Sanctuary_22.jpg",
  },
];

const Category: React.FC = () => {
  return (
    <div className="container my-8">
      <h2 className="mb-4">Explore More</h2>

      <div className="row g-4">
        {categories.map((item, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="explore-card">
              <img src={item.image} alt={item.title} />
              <div className="explore-overlay">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
