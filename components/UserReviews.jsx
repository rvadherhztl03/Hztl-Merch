import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const usersReviewArray = [
  {
    userName: 'Kunal Gholap',
    userFeedback:
      "Impressed with the variety of options available for men's shoes.The quality of the shoes exceeded my expectations. Definitely my new go-to for footwear!",
    userImage: 'kunalgholap.png',
  },
  {
    userName: 'Ravi Vadher',
    userFeedback:
      'Great experience shopping for shoes on this website. The range of styles catered to all occasions, from formal events to casual outings. I appreciated the user-friendly interface, making it simple to browse through the collection!',
    userImage: 'ravi.png',
  },
  {
    userName: 'Neelam Ramrakhiani',
    userFeedback:
      "I've found my new favorite destination for shoe shopping! The website layout was aesthetically pleasing and user-friendly, making the browsing experience enjoyable. The range of women's shoes available was impressive, from elegant heels to casual sneakers!",
    userImage: 'Neelam.png',
  },
  {
    userName: 'Vishal Prajapati',
    userFeedback:
      "The Custom Shoes Studio is fantastic! I loved customizing my shoes with 3D Animation. It's so easy to use, and the real-time previews helped me visualize my design perfectly. Great job!",
    userImage: 'Vishal.png',
  },
  {
    userName: 'Harsh Mithapara',
    userFeedback:
      "As someone who's picky about footwear, I was pleasantly surprised by the selection available. The website layout was clean and intuitive, allowing me to filter by colors and style effortlessly.",
    userImage: 'Harsh.png',
  },
  {
    userName: 'Nida Mirza',
    userFeedback:
      "Highly recommend this website for anyone in search of quality women's shoes. Not only was the selection extensive, but the prices were reasonable too.Overall, a fantastic shopping experience!",
    userImage: 'Nida.png',
  },
  {
    userName: 'Nikita Parmar',
    userFeedback:
      "I've found my new favorite destination for shoe shopping! The website layout was aesthetically pleasing and user-friendly, making the browsing experience enjoyable. The range of shoes available was impressive. I appreciated the sizing guide, ensuring a perfect fit. Can't wait to shop here again!",
    userImage: 'Nikita.jpeg',
  },
]

const splideOptions = {
  type: 'loop',
  autoplay: true,
  pauseOnHover: false,
  pagination: false,
  arrows: false,
  interval: 6000,
  perPage: 3,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
}

function UserReviews() {
  return (
    <section>
      <div className="bg-[#f8f8f8]">
        {/* Heading */}
        <div
          className="viewer-page MuiBox-root css-1ebnygn"
          style={{
            backgroundColor: 'transparent',
            width: '100%',
          }}
          data-aos=""
        >
          <div>
            <h3
              className="MuiTypography-root MuiTypography-h3 MuiTypography-alignCenter css-gxtnyn"
              style={{ color: '#000000' }}
            >
              <span>Warm words from users</span>
            </h3>
          </div>
        </div>
        <Splide id="splide-space" hasTrack={false} options={splideOptions}>
          <SplideTrack>
            {usersReviewArray.map((user, index) => (
              <SplideSlide key={index}>
                <div>
                  <div
                    key={index}
                    className="MuiGrid-root MuiGrid-direction-xs-column MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiBox-root css-kyjunr !max-w-[35vw] !h-[70vh]"
                    data-aos=""
                    data-name="Card"
                  >
                    <div
                      className="MuiGrid-root MuiGrid-direction-xs-column css-316kc6"
                      style={{ flexGrow: 1 }}
                    >
                      <div
                        className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1pa2qyg"
                        style={{
                          backgroundColor: '#31837A',
                          borderRadius: 10,
                          height: '100%',
                          overflow: 'visible',
                        }}
                      >
                        <div className="MuiCardContent-root flex-direction-column container-block css-xadw4u">
                          <div
                            className="MuiGrid-root flex-direction-column container-block MuiGrid-zeroMinWidth MuiGrid-direction-xs-column MuiBox-root css-1xut5k7"
                            style={{
                              zIndex: 2,
                              height: '100%',
                              flexGrow: 1,
                              display: 'flex',
                              borderRadius: 0,
                              flexWrap: 'nowrap',
                            }}
                          >
                            <div
                              className="MuiBox-root css-1sf3xto"
                              style={{
                                alignSelf: 'center',
                                position: 'relative',
                              }}
                              data-aos="flip-left"
                              data-name="Image"
                            >
                              <div style={{ display: 'block' }}>
                                <span
                                  style={{
                                    boxSizing: 'border-box',
                                    display: 'inline-block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: 'relative',
                                    maxWidth: '100%',
                                  }}
                                >
                                  <img
                                    style={{
                                      display: 'block',
                                      maxWidth: '100%',
                                      width: '15vw',
                                      height: '15vw',
                                      background: 'none',
                                      opacity: 1,
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                      borderRadius: '50%',
                                    }}
                                    alt={user.userName}
                                    aria-hidden="true"
                                    src={user.userImage}
                                  />
                                </span>
                              </div>
                            </div>

                            {/* stars */}
                            <div
                              className="MuiGrid-root MuiBox-root css-1k05pnj"
                              data-aos=""
                              data-name="Rating"
                            >
                              <span
                                className="MuiRating-root MuiRating-sizeMedium Mui-readOnly MuiRating-readOnly css-1fwwzvr"
                                role="img"
                                aria-label="5 Stars"
                              >
                                <span className="MuiRating-decimal css-79elbk">
                                  <span>
                                    <span className="MuiRating-icon MuiRating-iconFilled css-13m1if9">
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="StarIcon"
                                      >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                                <span className="MuiRating-decimal css-79elbk">
                                  <span>
                                    <span className="MuiRating-icon MuiRating-iconFilled css-13m1if9">
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="StarIcon"
                                      >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                                <span className="MuiRating-decimal css-79elbk">
                                  <span
                                    style={{
                                      width: '0%',
                                      overflow: 'hidden',
                                      position: 'absolute',
                                    }}
                                  >
                                    <span className="MuiRating-icon MuiRating-iconFilled css-13m1if9">
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="StarIcon"
                                      >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span>
                                    <span className="MuiRating-icon MuiRating-iconFilled css-13m1if9">
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="StarIcon"
                                      >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                                <span className="MuiRating-icon MuiRating-iconFilled css-13m1if9">
                                  <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="StarIcon"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                </span>
                                <span className="MuiRating-icon MuiRating-iconFilled css-13m1if9">
                                  <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="StarIcon"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="MuiBox-root css-1gpkga9" data-name="Divider">
                              <hr className="MuiDivider-root MuiDivider-fullWidth css-qt3zoq" />
                            </div>
                            <div
                              className="viewer-page MuiBox-root css-1sf3xto"
                              style={{
                                backgroundColor: 'transparent',
                                width: '100%',
                              }}
                              data-aos=""
                            >
                              <>
                                <p className="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter css-9psui4 !mb-5">
                                  {user.userFeedback}
                                </p>
                                <h6 className="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter css-3o415f">
                                  {user.userName}
                                </h6>
                              </>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </section>
  )
}

export default UserReviews
