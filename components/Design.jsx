import React from 'react'

function Design() {
  return (
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
            <div
              className="MuiGrid-root MuiGrid-direction-xs-column MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 MuiBox-root css-ci1th1"
              style={{
                width: '100%',
                display: 'flex',
                position: 'relative',
                minHeight: 150,
              }}
              data-name="Column"
              data-aos=""
            >
              <div
                className="MuiGrid-root flex-direction-column container-block MuiGrid-zeroMinWidth MuiGrid-direction-xs-column MuiBox-root css-gdmx1f"
                style={{
                  zIndex: 2,
                  height: '100%',
                  flexGrow: 1,
                  display: 'flex',
                  borderRadius: 0,
                  flexWrap: 'nowrap',
                }}
              >
                <div>
                  <h2 className="MuiTypography-root MuiTypography-h2 MuiTypography-alignLeft css-gfak5e">
                    Design Your Style, Your Way!
                  </h2>
                  <p className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft css-k3ipun !mb-5"></p>
                  <p className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignLeft css-bxl2g5">
                    Personalize your Products with ease using our interactive 3D design tools.
                  </p>
                  <p className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft css-k3ipun !mb-5"></p>
                  <p className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft css-k3ipun">
                    Explore endless creative options and see your unique vision come to life in
                    real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design
