import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faSeedling, faTree } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h3 className="pt-4">About Life</h3>
            <p className="p-3 fs-5">
              Animal life refers to the diverse and fascinating world of living
              creatures that inhabit land, air, and water. From tiny insects to
              massive whales, animals play essential roles in ecosystems. They
              exhibit unique behaviors, survival instincts, and adaptations.
              Animal life contributes to biodiversity, supports food chains, and
              reflects the beauty and complexity of nature on Earth.
            </p>

            <p className="p-3 fs-5">
              Animals are essential to healthy ecosystems. Herbivores maintain
              plant balance, predators control population, and scavengers clean
              the environment. Bees pollinate flowers, and earthworms enrich
              soil. Each species contributes to nature’s harmony. Disruption to
              one group can impact many others, highlighting the importance of
              protecting animal life for ecological sustainability and the
              future of our planet.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="mb-5 text-center">Key Rules of Animal Life</h2>

        <div className="row g-4 p-4">
          <div className="col-md-4">
            <div className="text-center shadow-lg rounded p-4 border">
              <i className="fs-2 text-primary">
                <FontAwesomeIcon icon={faTree} />
              </i>
              <h4 className="pt-3">Adapt to their Habitats</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center shadow-lg rounded p-4 border">
              <i className="fs-2 text-success">
                <FontAwesomeIcon icon={faSeedling} />
              </i>
              <h4 className="pt-3">Grow and Develop</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center shadow-lg rounded p-4 border">
              <i className="fs-2 text-warning">
                <FontAwesomeIcon icon={faBrain} />
              </i>
              <h4 className="pt-3">Respond to Environment</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
