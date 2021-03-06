<template>
  <div>

    <v-toolbar
        id="top-nav1"
        prominent
        class="Abstract"

    >

      <v-toolbar-title
          class="wrapper bordered-text shadow-text "
      >

        Networking and IT Security Undergraduate
      </v-toolbar-title>
      <v-spacer/>


      <link>
      <a
          rel="canonical"
          :href=pdfLink :download=pdfName
      >
        <button
            class="cybr-btn">
          Résumé
          <span  class="cybr-btn__glitch">Cover Letter</span>
          <span  class="cybr-btn__tag"></span>
        </button>
      </a>
    </v-toolbar>

  </div>
</template>
<script>

export default {
  name: "Topbar",
  data() {
    return {
      pdfLink: require("@/assets/ShrijiShah-Cover+Resume.pdf"),
      pdfName: "Shriji_Shah-Cover+Resume.pdf",
    }
  },
}
</script>

<style scoped>
@font-face {
  font-family: Cyber;
  src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
  font-display: swap;
}

* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  font-family: 'Cyber', sans-serif;
  background: linear-gradient(90deg, #f5ed00 70%, #e6de00 70%), #fff700;
}

body .cybr-btn + .cybr-btn {
  margin-top: 2rem;
}

.cybr-btn {
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
  --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
  --primary-hue: 0;
  --primary-lightness: 50;
  --color: hsl(0, 0%, 100%);
  --font-size: 13px;
  --shadow-primary-hue: 180;
  --label-size: 9px;
  --shadow-secondary-hue: 60;
  --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
  --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
  --border: 4px;
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
  font-family: 'Cyber', sans-serif;
  color: var(--color);
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  border: 0;
  min-width: 7em;
  height: 3em;
  line-height: 3px;
  transition: background 0.2s;
}

.cybr-btn:hover {
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%));
}

.cybr-btn:active {
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%));
}

.cybr-btn:after,
.cybr-btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip-path: var(--clip);
  z-index: -1;
}

.cybr-btn:before {
  background: var(--shadow-primary);
  transform: translate(var(--border), 0);
}

.cybr-btn:after {
  background: var(--primary);
}

.cybr-btn__tag {
  position: absolute;
  padding: 1px 4px;
  letter-spacing: 1px;
  line-height: 1;
  bottom: -5%;
  right: 5%;
  font-weight: normal;
  color: hsl(0, 0%, 0%);
  font-size: var(--label-size);
}

.cybr-btn__glitch {
  position: absolute;
  top: calc(var(--border) * -1);
  left: calc(var(--border) * -1);
  right: calc(var(--border) * -1);
  bottom: calc(var(--border) * -1);
  background: var(--shadow-primary);
  text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
  clip-path: var(--clip);
  animation: glitch 2s infinite;
  display: none;
}

.cybr-btn:hover .cybr-btn__glitch {
  display: block;
}

.cybr-btn__glitch:before {
  content: '';
  position: absolute;
  top: calc(var(--border) * 1);
  right: calc(var(--border) * 1);
  bottom: calc(var(--border) * 1);
  left: calc(var(--border) * 1);
  clip-path: var(--clip);
  background: var(--primary);
  z-index: -1;
}

@keyframes glitch {
  0% {
    clip-path: var(--clip-one);
  }
  2%, 8% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
    clip-path: var(--clip-two);
    transform: translate(0, 0);
  }
  10% {
    clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
    clip-path: var(--clip-three);
    transform: translate(0, 0);
  }
  14%, 21% {
    clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%, 45% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
    clip-path: var(--clip-six);
    transform: translate(0, 0);
  }
  55% {
    clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
    clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }
  31%, 61%, 100% {
    clip-path: var(--clip-four);
  }
}

.cybr-btn:nth-of-type(2) {
  --primary-hue: 260;
}

.bordered-text {
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: normal;
}
.Abstract {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2194%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2195)'%3e%3c/rect%3e%3cg mask='url(%26quot%3b%23SvgjsMask2197%26quot%3b)'%3e%3cpath d='M1461.5 277.5L1424.5 277.5L1387.5 277.5L1350.5 277.5L1313.5 277.5L1276.5 277.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M1267.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M1461.5 314.5L1424.5 314.5L1387.5 314.5L1350.5 314.5L1313.5 314.5L1276.5 314.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M1267.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M351.5 240.5L314.5 277.5L277.5 277.5L240.5 277.5M610.5 240.5L573.5 277.5L536.5 277.5M647.5 240.5L610.5 277.5L573.5 314.5L536.5 314.5L499.5 314.5L462.5 314.5L425.5 314.5L388.5 314.5L351.5 314.5L314.5 314.5L277.5 314.5M1128.5 240.5L1091.5 277.5L1054.5 277.5L1017.5 277.5L980.5 277.5L943.5 277.5L906.5 277.5L869.5 277.5L832.5 277.5L795.5 277.5L758.5 277.5M425.5 240.5L388.5 277.5L351.5 277.5M1239.5 240.5L1202.5 277.5L1165.5 277.5L1128.5 277.5L1091.5 314.5L1054.5 314.5L1017.5 314.5M462.5 240.5L425.5 277.5M499.5 240.5L462.5 277.5M1461.5 240.5L1424.5 240.5L1387.5 240.5L1350.5 240.5L1313.5 240.5L1276.5 240.5L1239.5 240.5L1202.5 240.5L1165.5 240.5L1128.5 240.5L1091.5 240.5L1054.5 240.5L1017.5 240.5L980.5 240.5L943.5 240.5L906.5 240.5L869.5 240.5L832.5 240.5L795.5 240.5L758.5 240.5L721.5 240.5L684.5 240.5L647.5 240.5L610.5 240.5L573.5 240.5L536.5 240.5L499.5 240.5L462.5 240.5L425.5 240.5L388.5 240.5L351.5 240.5L314.5 240.5L277.5 240.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M268.25 240.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM231.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM527.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM268.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM749.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM342.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1008.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM416.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM453.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M314.5 351.5L277.5 388.5L240.5 388.5L203.5 388.5L166.5 388.5L129.5 388.5L92.5 388.5M1239.5 351.5L1202.5 314.5L1165.5 314.5L1128.5 314.5M462.5 351.5L425.5 388.5L388.5 425.5L351.5 425.5L314.5 425.5M277.5 351.5L240.5 351.5L203.5 351.5M832.5 351.5L795.5 314.5L758.5 314.5L721.5 314.5L684.5 314.5L647.5 314.5L610.5 314.5M980.5 351.5L943.5 314.5M388.5 351.5L351.5 388.5L314.5 388.5M684.5 351.5L647.5 388.5L610.5 388.5L573.5 388.5L536.5 388.5L499.5 388.5L462.5 388.5L425.5 425.5L388.5 462.5M1461.5 351.5L1424.5 351.5L1387.5 351.5L1350.5 351.5L1313.5 351.5L1276.5 351.5L1239.5 351.5L1202.5 351.5L1165.5 351.5L1128.5 351.5L1091.5 351.5L1054.5 351.5L1017.5 351.5L980.5 351.5L943.5 351.5L906.5 351.5L869.5 351.5L832.5 351.5L795.5 351.5L758.5 351.5L721.5 351.5L684.5 351.5L647.5 351.5L610.5 351.5L573.5 351.5L536.5 351.5L499.5 351.5L462.5 351.5L425.5 351.5L388.5 351.5L351.5 351.5L314.5 351.5L277.5 351.5L240.5 314.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M231.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM83.25 388.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1119.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM305.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM194.25 351.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM601.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM934.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM305.25 388.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM379.25 462.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M943.5 203.5L906.5 166.5L869.5 166.5L832.5 166.5L795.5 166.5L758.5 166.5L721.5 166.5L684.5 166.5L647.5 166.5L610.5 166.5M425.5 203.5L388.5 166.5L351.5 129.5L314.5 92.5L277.5 92.5L240.5 92.5L203.5 92.5L166.5 92.5L129.5 92.5M351.5 203.5L314.5 166.5M499.5 203.5L462.5 166.5L425.5 166.5L388.5 129.5L351.5 92.5M1017.5 166.5L980.5 203.5M573.5 203.5L536.5 166.5L499.5 166.5L462.5 129.5L425.5 129.5M1091.5 203.5L1054.5 166.5M980.5 166.5L943.5 166.5M1461.5 203.5L1424.5 203.5L1387.5 203.5L1350.5 203.5L1313.5 203.5L1276.5 203.5L1239.5 203.5L1202.5 203.5L1165.5 203.5L1128.5 203.5L1091.5 203.5L1054.5 203.5L1017.5 166.5L980.5 166.5L943.5 203.5L906.5 203.5L869.5 203.5L832.5 203.5L795.5 203.5L758.5 203.5L721.5 203.5L684.5 203.5L647.5 203.5L610.5 203.5L573.5 203.5L536.5 203.5L499.5 203.5L462.5 203.5L425.5 203.5L388.5 203.5L351.5 203.5L314.5 203.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M305.25 203.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM601.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM120.25 92.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM305.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM342.25 92.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM971.25 203.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM416.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1045.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM934.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M1017.5 388.5L980.5 425.5L943.5 425.5L906.5 425.5M1424.5 388.5L1387.5 425.5L1350.5 425.5L1313.5 425.5M1128.5 388.5L1091.5 425.5L1054.5 462.5L1017.5 462.5L980.5 462.5M1054.5 388.5L1017.5 425.5M1461.5 388.5L1424.5 388.5L1387.5 388.5L1350.5 388.5L1313.5 388.5L1276.5 388.5L1239.5 388.5L1202.5 388.5L1165.5 388.5L1128.5 388.5L1091.5 388.5L1054.5 388.5L1017.5 388.5L980.5 388.5L943.5 388.5L906.5 388.5L869.5 388.5L832.5 388.5L795.5 388.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M786.25 388.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM897.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1304.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM971.25 462.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1008.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M1313.5 166.5L1276.5 129.5L1239.5 129.5L1202.5 129.5M1424.5 166.5L1387.5 129.5L1350.5 129.5M1091.5 129.5L1054.5 92.5L1017.5 92.5L980.5 129.5M1461.5 166.5L1424.5 166.5L1387.5 166.5L1350.5 166.5L1313.5 166.5L1276.5 166.5L1239.5 166.5L1202.5 166.5L1165.5 166.5L1128.5 166.5L1091.5 129.5L1054.5 129.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M1045.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1193.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1341.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM971.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2194'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2195'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(53%2c 26%2c 77%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1219.9679999999998' y1='-220.02399999999997' x2='220.03199999999998' y2='780.024' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2196'%3e%3cstop stop-color='%233a7cc3' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(176%2c 14%2c 96%2c 1)' offset='0.24'%3e%3c/stop%3e%3cstop stop-color='rgba(70%2c 255%2c 0%2c 1)' offset='0.41'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 127%2c 255%2c 1)' offset='0.57'%3e%3c/stop%3e%3cstop stop-color='rgba(105%2c 0%2c 255%2c 1)' offset='0.62'%3e%3c/stop%3e%3cstop stop-color='rgba(176%2c 14%2c 96%2c 1)' offset='0.72'%3e%3c/stop%3e%3cstop stop-color='rgba(176%2c 14%2c 96%2c 1)' offset='0.84'%3e%3c/stop%3e%3cstop stop-color='rgba(221%2c 120%2c 17%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cmask id='SvgjsMask2197'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3cpath d='M1271.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M1271.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M272.87 240.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM235.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM531.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM272.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM753.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM346.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1012.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM420.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM457.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M235.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM87.87 388.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1123.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM309.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM198.87 351.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM605.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM938.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM309.87 388.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM383.87 462.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M309.87 203.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM605.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM124.87 92.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM309.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM346.87 92.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM975.87 203.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM420.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1049.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM938.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M790.87 388.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM901.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1308.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM975.87 462.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1012.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M1049.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1197.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1345.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM975.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: right center;
  background-size: cover;
  background-blend-mode: normal;

}
.shadow-text {
  color: lightgreen;
  text-shadow: 1px 1px 5px #fff, 9px 8px 0 rgba(0,0,0,0.15);
}


</style>
