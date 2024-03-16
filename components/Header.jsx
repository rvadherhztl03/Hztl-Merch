import React from 'react'

function Header() {
  return (
    <div className="header-main-class MuiBox-root css-0" name="header-main">
  <header
    className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionAbsolute css-fmkwd9"
    id="toolbar-header"
    style={{ background: "transparent", boxShadow: "none" }}
  >
    <div
      className="MuiToolbar-root MuiToolbar-regular css-drp6mn"
      style={{ minHeight: 64 }}
    >
      <div className="MuiBox-root css-18kj504">
        <a title="Home" className="css-xfkl7z" href="/">
          <h6 className="MuiTypography-root MuiTypography-h6 css-134j2s8">
            HZTL-MERCH
          </h6>
        </a>
      </div>
    </div>
  </header>
</div>

  )
}

export default Header