import { useState } from 'react';
import style from '../../styles/app.module.css';
import { useSelector } from 'react-redux';
import { Parallax } from 'react-scroll-parallax';

const Travels = () => {
  const posts = useSelector((state) => state.posts);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Parallax speed={-10} className={style.travels}>
      <article className={style.travelsIntro}>
        <h3>All My Travels!</h3>
        <p>
          Explore the wonders of my travels as I take you on a captivating journey across the globe.
          From the enchanting streets of Rome to the imperial splendor of Vienna, the charming canals of Amsterdam to the vibrant energy of London,
          join me in discovering the diverse cultures, breathtaking landscapes, and unforgettable experiences that have shaped my adventures.
          Through vivid storytelling and captivating photographs, this page invites you to embark on a virtual voyage, immersing yourself in the beauty of each destination and inspiring your own wanderlust.
          Get ready to explore the world through my eyes and ignite your passion for travel.
        </p>
      </article>

      <div className={`input-group mb-5`}>
        <span className="input-group-text" id="basic-addon1">
          Search for a post
        </span>
        <input
          className="form-control"
          type="text"
          placeholder="Roma"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={style.travelPostsCard}>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <a
                className="nav-link d-flex justify-content-between align-items-baseline"
                data-bs-toggle="collapse"
                href={`#${post.id}`}
                role="button"
                aria-expanded="false"
                aria-controls={post.id}
            >
                <h3>{post.name}</h3>
                <h5>{post.date}</h5>
            </a>

            <div className="collapse" id={post.id}>
                <div className="mb-3">
                    <div className="row g-0">
                    <div className="col-lg-4 text-center p-3">
                        <img src={post.image} className="img-fluid rounded" alt={post.name} />
                    </div>
                    <div className="col-lg-8">
                        <div className="card-body p-3">
                        <h5>My thoughts:</h5>
                        <p className="card-text">{post.description}</p>
                        <small>{post.date}</small>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </Parallax>
  );
};

export default Travels;
