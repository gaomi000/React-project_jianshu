import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
    @font-face {
      font-family: 'iconfont';
      src: url('iconfont.eot');
      src: url('./iconfont.eot?#iefix') format('embedded-opentype'),
          url('./iconfont.woff2') format('woff2'),
          url('./iconfont.woff') format('woff'),
          url('./iconfont.ttf') format('truetype'),
          url('./iconfont.svg#iconfont') format('svg');
    }

    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
`;






