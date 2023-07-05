import { Fragment } from 'react';
import style from '../../styles/app.module.css';
import { Parallax } from 'react-scroll-parallax';

const Profile = () => {
  return (
    <Parallax speed={-10}>
      <div className={`row ${style.profileRow}`}>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <img
            className={style.profileImage}
            src="https://images.unsplash.com/photo-1506787497326-c2736dde1bef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80"
            alt=""
          />
        </div>
        <div className="col-lg-8">
          <h3>About Me</h3>
          <p className="m-0">
            Hi there! I'm a passionate traveler and a dedicated writer,
            and I couldn't be more thrilled to combine my two greatest passions into one
            exciting adventure. From a young age, I've been captivated by the wonders of the world,
            constantly seeking new experiences and immersing myself in different cultures.
            Traveling has become the essence of who I am, and I believe that every journey is
            an opportunity for personal growth and discovery.
            <br />
            <br />
            As I embark on various expeditions,
            I make it a point to document my experiences through captivating articles and stories.
            Through my writing, I aim to transport readers to the very destinations I've explored,
            providing them with a glimpse into the magic, beauty, and diversity that exists beyond
            their own horizons. Whether it's savoring the tantalizing flavors of local cuisine, hiking
            through breathtaking landscapes, or engaging with fascinating locals,
            I strive to convey the essence of each place I visit.
          </p>
        </div>
      </div>

      <div className={style.profileDescUnder}>
        <h3>Another Section About Me</h3>
          <p className="m-0">
            Beyond just sharing my adventures, I aspire to inspire others to embark on their own
            transformative journeys. I believe that travel has the power to break down barriers,
            broaden perspectives, and foster a deeper understanding and appreciation for the world
            we live in. Through my articles, I hope to ignite a sense of wanderlust within my readers
            and empower them to step out of their comfort zones, embrace new cultures, and create lasting
            memories.
            So, join me as we traverse the globe together through the written word.
            Let's uncover hidden gems, delve into the rich tapestry of different cultures,
            and embrace the incredible diversity that our world has to offer. Together, let's
            embark on an extraordinary adventure filled with wonder, inspiration, and endless
            possibilities.
          </p>
        </div>
      
      <div
        id="carouselExampleSlidesOnly"
        className={`carousel slide ${style.pofileCarousel}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1571555788467-71d9e3add426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="rounded d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1687684422877-2cc358c18028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80"
              className="rounded d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1685691407128-3642004de6e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              className="rounded d-block w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Profile;
