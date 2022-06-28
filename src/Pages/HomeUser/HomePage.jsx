import React from "react";
import "./HomePage.css";    
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NavBar from "../../Components/NavBAr/ResponsiveAppBar";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const HomePage = () => {
  return (
    <section className="container-menu">
      <NavBar />
      <div className="carousel">
        <Carousel responsive={responsive} autoPlaySpeed={10000} infinite={true}>
          <div
            id="Home"
            className="p-7 text-center bg-image"
            style={{
              //to change backgrounde, switch here
              backgroundImage:
                "url('image/vazamento.jpg')",
              height: 636,
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: 636 }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div
                  className="px-4 py-5 my-5 text-center home__banner-text"
                  style={{ color: "white" }}
                >
                  <h4 className="texto-central" data-aos="fade-right">
                    IT Creative Solution Moz
                  </h4>
                  <p>
                    Empresa Moçambicana, que aposta em jovens com talento
                    técnico para complementar nossa Missão
                  </p>
                  <strong className="display-5 fw-bold text-uppercase text-center  d-flex flex-column align-items-center home__banner-text-animated">
                    <a
                      href="#Quemsomos"
                      className="subtitle btn btn-transparent"
                    >
                      <span>Quem Somos</span>
                    </a>
                  </strong>
                  <h5>Trazemos para si Soluções Criativas E Inovadoras</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-7 text-center bg-image"
            style={{
              //to change backgrounde, switch here
              backgroundImage:
                "url('https://blog.brkambiental.com.br/vazamento-de-agua/')",
              height: 636,
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: 636 }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div
                  className="px-4 py-5 my-5 text-center home__banner-text"
                  style={{ color: "white" }}
                >
                 
                  <strong className="display-5 fw-bold text-uppercase text-center  d-flex flex-column align-items-center home__banner-text-animated">
                    <a
                      href="#projectos"
                      className="subtitle btn btn-transparent"
                    >
                      
                    </a>
                  </strong>
                </div>
              </div>
            </div>
          </div>

         
         
        </Carousel>
      </div>
      <div className="container-grid">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={6}>
            <div className="container-1 a">
              {" "}
              <a href="#">Pagamento online</a>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="container-1 a">
              {" "}
              <a href="/denunciar">Vazamento</a>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="container-1 a">
              {" "}
              <a href="#">Estou sem agua</a>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="container-1 a">
              {" "}
              <a href="#">Qualidade da agua</a>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="container-1 a">
              {" "}
              <a href="#">Pressoa da Agua</a>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="container-1 a">
              {" "}
              <a href="#">Guia de servicos</a>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
export default HomePage;
