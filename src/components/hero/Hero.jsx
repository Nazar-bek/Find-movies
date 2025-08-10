import React from "react";
import "./hero.scss";
import image from "/image1.svg"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__info">
        <h2>FIND MOVIES</h2>
        <h1>Tv shows and more </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus repellendus corporis optio tempore maiores voluptatum ex tenetur cumque, omnis, provident quaerat dolores libero odio esse modi necessitatibus consequatur excepturi.
        </p>
        <button className="btn btn-primary">Detailes</button>
      </div>
      <div className="hero__movie">
        <img src={image} alt="Image" />
        <div className="hero__movie-descr">
        <h2>Madeline</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nulla cum magni, perferendis facilis et eveniet maiores aperiam voluptas totam ea ratione autem non reprehenderit quo accusantium fugiat illum culpa!</p>
        <div>
            <button className="btn btn-secondary">Random Movie</button>
            <button className="btn btn-secondary">Details</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
