import React, { FC } from "react";
import Button from "../../components/button/button";
import { AboutText, Banner, BannerContainer, BannerContents } from "./home.styles";
import { Link } from "react-router-dom";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div>
      <BannerContainer>
        <div className="container">
          <BannerContents>
            <div>
              <h2>Design the now</h2>
              <p>
                Modern creators know that pace rivals perfection. Tools need to
                be fast yet limitless. To design with immediacy and relevancy at
                the speed of culture. To design the now.
              </p>

              <Button>Start creating now</Button>
            </div>
            <div>
              <img src="/images/aboutus.webp" />
            </div>
          </BannerContents>
        </div>
      </BannerContainer>
      <div className="container">
        <AboutText>
          Picsart exists to give everyone a creative edge- offering a platform
          that provides creators with the power to advance their passions
          through intuitive tools and exclusive content. With easy-to-use
          editing tools powered by AI, one of the world’s largest open-source
          content collections, customizable templates, and a simple user
          interface, anyone can create engaging images and videos in minutes. On
          our platform, creators make everything from brand logos and podcast
          covers to e-commerce shop visuals, trending social media content, and
          merch. Using the world’s largest digital creation platform with 150M+
          active monthly users, a top 20 most downloaded app worldwide for 2021,
          and in over 30 languages, you can design the now, too.
        </AboutText>
      </div>
      <div className="container">
        <Banner>
          <h2>Empowering creators of all stripes</h2>
          <p>
            Design your success with Picsart's AI-powered photo and video
            <br />
            editing tools. No graphic design degree needed.
          </p>
          <Button>
            <Link to="/users">Creators List</Link>
          </Button>
        </Banner>
      </div>
    </div>
  );
};

export default Home;
