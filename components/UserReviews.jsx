import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const usersReviewArray = [
  {
    "userName": "Kunal Gholap",
    "userFeedback": "Impressed with the variety of options available for men's shoes.The quality of the shoes exceeded my expectations. Definitely my new go-to for footwear!",
    "userImage": "kunalgholap.png"
  },
  {
    "userName": "Ravi Vadher",
    "userFeedback": "Great experience shopping for shoes on this website. The range of styles catered to all occasions, from formal events to casual outings. I appreciated the user-friendly interface, making it simple to browse through the collection!",
    "userImage": "ravi.png"
  },
  {
    "userName": "Nida Mirza",
    "userFeedback": "Highly recommend this website for anyone in search of quality women's shoes. Not only was the selection extensive, but the prices were reasonable too.Overall, a fantastic shopping experience!",
    "userImage": "Nida.png"
  },
  {
    "userName": "Neelam Ramrakhiani",
    "userFeedback": "I've found my new favorite destination for shoe shopping! The website layout was aesthetically pleasing and user-friendly, making the browsing experience enjoyable. The range of women's shoes available was impressive, from elegant heels to casual sneakers!",
    "userImage": "Neelam.png"
  },
  {
    "userName": "Dhrumil Mehta",
    "userFeedback": "As a fashion enthusiast, I was thrilled to try out Custom Shoes Studio. The customization options are impressive, and the 3D technology adds a whole new level of excitement. Definitely recommending it to my friends!",
    "userImage": "Dhrumil.png"
  },
  {
    "userName": "Harsh Mithapara",
    "userFeedback": "As someone who's picky about footwear, I was pleasantly surprised by the selection available. The website layout was clean and intuitive, allowing me to filter by colors and style effortlessly.",
    "userImage": "Harsh.png"
  },
  {
    "userName": "Rushi Patel",
    "userFeedback": "I'm not usually into online shopping, but Custom Shoes Studio caught my attention. The 3D customization feature is addictive—I couldn't stop experimenting with different colors and styles. It's a game-changer for sure!",
    "userImage": "Rushi.png"
  },
  {
    "userName": "Vishal Prajapati",
    "userFeedback": "The Custom Shoes Studio is fantastic! I loved customizing my shoes with 3D Animation. It's so easy to use, and the real-time previews helped me visualize my design perfectly. Great job!",
    "userImage": "Vishal.png"
  },
  {
    "userName": "Nikita Parmar",
    "userFeedback": "I've found my new favorite destination for shoe shopping! The website layout was aesthetically pleasing and user-friendly, making the browsing experience enjoyable. The range of women's shoes available was impressive, from elegant heels to casual sneakers. I appreciated the sizing guide, ensuring a perfect fit. Can't wait to shop here again!",
    "userImage": "Nikita.jpg"
  }
];

const splideOptions = {
  type: "loop",
  autoplay: true,
  pauseOnHover: false,
  pagination: false,
  arrows: false,
  interval: 10000,
  perPage: 3,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
};

function UserReviews() {
  return (
    <section>
      <h2>User Reviews Slider</h2>
      <Splide
        id="splide-space"
        hasTrack={false}
        options={splideOptions}
      >
        <SplideTrack>
          {usersReviewArray.map((user, index) => (
            <SplideSlide key={index}>
              <div>
                <div><img src={user.userImage} alt={user.userName} /></div>
                {user.userFeedback}
                <div>{user.userName}</div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </section>
  )
}

export default UserReviews
