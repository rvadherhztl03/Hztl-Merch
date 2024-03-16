import React from 'react'

function HeroBanner() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3">
      <div className="MuiBox-root h-[91vh] pt-[10vh] css-0">
        <section
          className="MuiBox-root css-0"
          style={{
            backgroundColor: '#ffffff',
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
                <div className="MuiGrid-root flex-direction-column container-block MuiGrid-zeroMinWidth MuiGrid-direction-xs-column MuiBox-root css-122lahj">
                  {/* heading & Description */}
                  <div
                    className="viewer-page MuiBox-root css-1ebnygn"
                    style={{
                      backgroundColor: 'transparent',
                      width: '100%',
                    }}
                    data-aos=""
                  >
                    <div>
                      <h1 className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft css-15ys4xt !mb-7">
                        Design Your Perfect Product in 3D!
                      </h1>

                      <p className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignLeft css-bxl2g5">
                        Personalize your style with our cutting-edge Product customization platform.
                      </p>
                    </div>
                  </div>

                  {/* button */}
                  <div
                    className="MuiGrid-root MuiGrid-container MuiBox-root css-1qq8fe3"
                    style={{
                      width: '100%',
                      display: 'flex',
                      position: 'relative',
                      minHeight: 50,
                    }}
                    data-name="Row"
                    data-aos=""
                  >
                    <div
                      className="MuiGrid-root flex-direction-row container-block MuiGrid-container MuiGrid-zeroMinWidth MuiBox-root css-1069rdz"
                      style={{
                        height: '100%',
                        flexGrow: 1,
                        display: 'flex',
                        borderRadius: 0,
                        flexWrap: 'wrap',
                      }}
                    >
                      <div
                        className="MuiGrid-root MuiBox-root css-1aynx6h"
                        data-aos=""
                        data-name="Button"
                      >
                        <button
                          className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation css-tl0pzq"
                          tabIndex={0}
                          type="button"
                          justifycontent="undefined"
                          colorbutton="[object Object]"
                          background="#ffffff"
                          text="Create%20My%20Custom%20T-Shit"
                        >
                          <a style={{ display: 'contents' }} className="" href="/products">
                            Create Custom Product
                          </a>
                        </button>
                      </div>
                      <div
                        className="MuiGrid-root MuiBox-root css-1aynx6h"
                        data-aos=""
                        data-name="Button"
                      >
                        <button
                          className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-disableElevation css-py6qz6"
                          tabIndex={0}
                          type="button"
                          justifycontent="undefined"
                          colorbutton="[object Object]"
                          background="#ffffff"
                          text="CONTACT"
                        >
                          <a style={{ display: 'contents' }} className="font-semibold" href="/">
                            CONTACT
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className="MuiGrid-root MuiGrid-direction-xs-column MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 MuiBox-root css-179jaj5"
                style={{
                  width: '100%',
                  display: 'flex',
                  position: 'relative',
                  minHeight: 150,
                }}
                data-name="Column"
                data-aos=""
              >
                <img
                  alt="logo"
                  borderradius={0}
                  src="shoe1.png"
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
                    width: '25vw',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HeroBanner
