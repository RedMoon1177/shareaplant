
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
    const [latestPost, setLatestPost] = useState([]);
    const [mostLikedPosts, setMostLikedPosts] = useState([]);

    useEffect(() => {

        const fetchLatestPost = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}posts/latest`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setLatestPost(data);
            } catch (error) {
                console.error('There has been a problem with fetch operation:', error);
            }
        }

        const fetchMostLikedPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}posts/mostliked/${process.env.REACT_APP_NUMBER_OF_MOST_LIKED_POSTS}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setMostLikedPosts(data);
            } catch (error) {
                console.error('There has been a problem with fetch operation:', error);
            }
        }

        fetchLatestPost();
        fetchMostLikedPosts();
    }, []);
    return (
        <div>
          <Navbar />
          <Banner />
          {/* <h1>Lastest post:</h1>
          <ul>
            {latestPost.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <h1>Most liked posts:</h1>
          <ul>
            {mostLikedPosts.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul> */}

          <Footer />
        </div>
      );
    };

export default Home;