// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import React from 'react';
import pic4 from './../assets/images/projects/pic4.jpg'
import pic1 from './../assets/images/projects/pic1.jpg'
import pic3 from './../assets/images/projects/pic3.jpg'
import pic2 from './../assets/images/projects/pic2.jpg'
import pic5 from './../assets/images/projects/pic5.jpg'
import pic6 from './../assets/images/projects/pic6.jpg'
function Portfolio() {
  const portfolio = [
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      imageSrc: pic4,
      img: (
        <Image
          src={pic1}
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "branding"],
      imageSrc: pic4,
      img: (
        <Image
          src={pic2}
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      imageSrc: pic4,
      img: (
        <Image
          src={pic3}
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      imageSrc: pic4,
      img: (
        <Image
          src={pic4}
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: pic4,
      img: (
        <Image
          src={pic5}
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "branding", "seo"],
      imageSrc: pic4,
      img: (
        <Image
          src={pic6}
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
        <>
            <div className="site-filters style-1 clearfix center m-b40">
                <ul className="filters">
                  <li className={`btn ${filter === "all" ? "active" : ""}`}>
                    <a active={filter === "all"} onClick={() => setFilter("all")}>
                      All
                    </a>
                  </li>
                  <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
                    <a
                      active={filter === "web_design"}
                      onClick={() => setFilter("web_design")}
                    >
                      Web Design
                    </a>
                  </li>
                  <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
                    <a
                      active={filter === "web_development"}
                      onClick={() => setFilter("web_development")}
                    >
                      Web Development
                    </a>
                  </li>
                  <li className={`btn ${filter === "branding" ? "active" : ""}`}>
                    <a
                      active={filter === "branding"}
                      onClick={() => setFilter("branding")}
                    >
                      Branding
                    </a>
                  </li>
                  <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
                    <a
                      active={filter === "mobile_app"}
                      onClick={() => setFilter("mobile_app")}
                    >
                      Mobile App
                    </a>
                  </li>
                  <li className={`btn ${filter === "seo" ? "active" : ""}`}>
                    <a active={filter === "seo"} onClick={() => setFilter("seo")}>
                      SEO
                    </a>
                  </li>
                </ul>
            </div>
            <SimpleReactLightbox>
                <SRLWrapper >
                    <div className="clearfix">
                        <ul id="masonry" className="row" data-column-width="3">
                          {projects.map((item) =>
                            item.filtered === true ? (
                              <>
                                <li
                                  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                                  data-wow-duration="2s"
                                  data-wow-delay="0.1s"
                                >
                                    <div className="dlab-box style-1 m-b30">
                                        <div className="dlab-media">
                                            <a href=""> {item.img}</a> 
                                        </div>
                                    </div>
                                </li>
                              </>
                            ) : (
                              ""
                            )
                          )}
                        </ul>
                    </div>
                </SRLWrapper >      
            </SimpleReactLightbox>  
        </>
  );
}

export default Portfolio;
