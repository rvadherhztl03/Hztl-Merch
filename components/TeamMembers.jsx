import React from 'react'

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

function TeamMembers() {
  return (
    <section
      className="MuiBox-root css-0"
      style={{
        backgroundColor: '#F8F8F8',
        display: 'flex',
        position: 'relative',
        minHeight: 'auto',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
      data-name="Section"
      data-aos=""
    >
      <div className="css-1l7c0cy" />
      <div className="MuiBox-root css-iee15d">
        <div className="MuiContainer-root MuiContainer-maxWidthLg MuiContainer-disableGutters css-lel51l">
          <div
            className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-o2ux9v"
            data-aos="fade-up"
          >
            <div
              className="MuiGrid-root MuiGrid-container MuiBox-root css-es48py"
              style={{
                width: '100%',
                display: 'flex',
                position: 'relative',
                minHeight: 150,
              }}
              data-name="Row"
              data-aos=""
            >
              <div
                className="MuiGrid-root flex-direction-row container-block MuiGrid-container MuiGrid-zeroMinWidth MuiBox-root css-w99kyc"
                style={{
                  zIndex: 2,
                  height: '100%',
                  flexGrow: 1,
                  display: 'flex',
                  borderRadius: 0,
                  flexWrap: 'wrap',
                }}
              >
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

                {usersReviewArray.map((user, index) => (
                  <div key={index}
                className="MuiGrid-root MuiGrid-direction-xs-column MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiBox-root css-kyjunr"
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
                        className="MuiGrid-root MuiGrid-direction-xs-column MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 MuiBox-root css-15z8dl4"
                        style={{
                          width: '100%',
                          display: 'flex',
                          position: 'relative',
                          minHeight: 50,
                        }}
                        data-name="Column"
                        data-aos=""
                      >
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
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                position: 'relative',
                              }}
                            >
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
                                <span
                                  style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    maxWidth: '100%',
                                  }}
                                >
                                  <img
                                    style={{
                                      display: 'block',
                                      maxWidth: '100%',
                                      width: 'initial',
                                      height: 'initial',
                                      background: 'none',
                                      opacity: 1,
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                    }}
                                    alt="img1"
                                    aria-hidden="true"
                                    src={''}
                                  />
                                </span>
                                <img
                                  alt=""
                                  borderradius={0}
                                  src={''}
                                  decoding="async"
                                  data-nimg="intrinsic"
                                  className=" css-ftc6fr"
                                  style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: 'border-box',
                                    padding: 0,
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                  }}
                                />
                              </span>
                            </div>
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
                                <span
                                  style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    maxWidth: '100%',
                                  }}
                                >
                                  <img
                                    style={{
                                      display: 'block',
                                      maxWidth: '100%',
                                      width: '144px',
                                      height: 'initial',
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

                                <img
                                  alt={user.userName}
                                  borderradius={0}
                                  src={user.userImage}
                                  decoding="async"
                                  data-nimg="intrinsic"
                                  className="css-ftc6fr"
                                  style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: 'border-box',
                                    padding: 0,
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    borderRadius: '50%',
                                  }}
                                />
                              </span>
                            </div>
                          </div>
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
                            <div>
                              <p
                                className="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter css-9psui4"
                                style={{ color: '#fff' }}
                              >
                                {user.userFeedback}
                              </p>
                              <p
                                className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter css-r7b31o"
                                style={{ color: '#fff' }}
                              >
                                <br />
                              </p>
                              <h6
                                className="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter css-3o415f"
                                style={{ color: '#fff' }}
                              >
                                {user.userName}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
