// Global
import Head from 'next/head'

// @TODO: We could at some point make this accept an array of font names, paths and formats but for
// now we good.
const Fonts = (): JSX.Element => {
  const fontFaceStyles = `
    @font-face {
      font-display: swap;
      font-family: Modern Era;
      font-weight: 400;
      src: url(/fonts/ModernEra-Regular.woff2) format('woff2'),
        url(/fonts/ModernEra-Regular.woff) format('woff');
    }
    @font-face {
      font-display: swap;
      font-family: Modern Era;
      font-weight: 700;
      src: url(/fonts/ModernEra-Bold.woff2) format('woff2'),
        url(/fonts/ModernEra-Bold.woff) format('woff');
    }
    @font-face {
      font-display: swap;
      font-family: Modern Era;
      font-weight: 900;
      src: url(/fonts/ModernEra-Black.woff2) format('woff2'),
        url(/fonts/ModernEra-Black.woff) format('woff');
    }`

  return (
    <Head>
      {/* Preload our two most heavily used webfonts, reduce chacen of FOUT */}
      <link
        rel="preload"
        href={`/fonts/ModernEra-Black.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={`/fonts/ModernEra-Regular.woff2`}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/*
        Load all of our @font-face declarations directly so we have absolute paths
        and fonts load everywhere.
      */}
      <style>{fontFaceStyles}</style>
    </Head>
  )
}

export default Fonts
