import React from "react";
import Story from "./Story";
import { useStateValue } from "./StateProvider";

import "./storyFeed.css";

function StoryFeed() {
  const [{ user }] = useStateValue();
  return (
    <div className='storyFeed'>
      <Story img={user.photoURL} src={user.photoURL} title={user.displayName} />
      <Story
        img='https://www.amolink.com/blog/images/article/mark-zuckerberg-love-story-pic-2-1.jpg'
        src='https://cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/283a85f1-4e94-4f5d-a0c1-dc81a4a5c2d8/797f1b6b-dbe1-48c5-a6cd-d53e326f23a9/1280x720/match/image.jpg'
        title='Mark Zuckerberg'
      />
      <Story
        img='https://www.jansatta.com/wp-content/uploads/2021/07/Narendra-modi-funny-crop-680x453-1.jpg'
        src='https://img.etimg.com/thumb/msid-91547243,width-1200,height-900,imgsize-46420,overlay-economictimes/photo.jpg'
        title='Narendra Modi'
      />
      <Story
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Rahul_Gandhi_%28portrait_crop%29.jpg/800px-Rahul_Gandhi_%28portrait_crop%29.jpg'
        img='https://www.scrolldroll.com/wp-content/uploads/2021/09/maza-aaya-rahul-gandhi-meme-template.jpg'
        title='Rahul Gandhi'
      />
      <Story
        img='https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/hitler-960x700.jpg?h=07f9aabd'
        src='https://cdn2.wwnorton.com/wwnproducts/TRADE/0/5/9780393320350/9780393320350_300.jpeg'
        title='Adolf Hitler'
      />
    </div>
  );
}

export default StoryFeed;
