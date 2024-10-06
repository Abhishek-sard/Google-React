import "../Stylesheet/about.css";

function About() {
  return (
    <div id="about-section">
      <h1 id="first">About Us</h1>
      <p class="intro-text">
        Welcome to Book Haven, your go-to destination for all things books!
        Founded in 2024, <br />
        our platform is dedicated to providing readers with a curated selection
        of the best literature from around the world. <br />
        Whether you're looking for new releases, academic textbooks, or timeless
        classics, <br />
        we've got you covered.
      </p>
      <div id="second" class="content-box">
        <p>
          Our mission is to nurture a community of book enthusiasts by offering
          a <br />
          diverse range of genres at prices everyone can afford. With a passion
          for <br />
          literature and a commitment to customer satisfaction, we aim to
          inspire a <br />
          love of reading in people of all ages.
        </p>
      </div>
      <div id="third" class="content-box">
        <p>
          Feel free to browse our collection and discover your next great read.{" "}
          <br />
          If you have any questions, suggestions, or would like to know more,
          <br />
          drop us a message at{" "}
          <a href="mailto:link@bookhaven.com" class="email-link">
            contact@bookhaven.com
          </a>
          . Happy reading!
        </p>
      </div>
    </div>
  );
}

export default About;
