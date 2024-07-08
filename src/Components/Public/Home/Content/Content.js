import React, { useEffect, useState } from "react";
import "./MainContent.scss";
import ViewMore from "../../../Globals/ViewMore";
import post1 from "../../../../assets/Images/post1.png";
import post2 from "../../../../assets/Images/post2.jpg";
import post3 from "../../../../assets/Images/post3.jpeg";
const Content = () => {
  const [count, setCount] = useState(0);
  const imageArray = [post1, post2, post3];

  // Save timer ref and return cleanup function to clear it
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount((count) => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  // `image` is derived state from the image array and current count
  // Take the count mod array length to get the correct computed index
  const image = imageArray[count % imageArray.length];

  console.log(image);
  return (
    <div className="content">
      <div className="main-image">
        <img src={image} alt="" />
      </div>

      <div className="main-text">
        <h1>POST</h1>
        <p>
          dear dear! POST company has designed an extension to make it easier to
          buy from the website of foreign stores. After installing it on your
          Chrome browser, you can register your request by directly visiting the
          website of foreign stores. . . It should be noted that, in order to
          buy from the amazon.com and amazon.ae websites, it is possible to
          place an order directly, and other websites, after activating the vpn,
          it is possible to place an order on your system.
        </p>
        <div className="view-container">
          <ViewMore />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Content;
