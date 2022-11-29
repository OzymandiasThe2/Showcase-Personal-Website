<template>
  <div
      style="background: #1E1E1E"
  >
    <v-container
    >
      <v-flex>
        <v-card
            dark
        >
          <v-flex
              align-self-center
          >
          </v-flex>
          <v-card-title>
            <img
                src="@/assets/images/websiteLogo.png" alt="logo failed to load"
                style="display: block;margin-left: auto;margin-right: auto;margin-bottom: -70px"
            />
            <h2
                style="font-family: 'Nirmala UI',serif;"
            >
              About Me
            </h2>
            <v-spacer/>
            <!--        Resume Button         -->
            <a rel="canonical"
               :href=resumeLink
            >
              <button class="cybr-btn">
                Résumé
                <span class="cybr-btn__glitch">Résumé</span>
                <span class="cybr-btn__tag"></span>
              </button>
            </a>
            <template>
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog
                      transition="dialog-top-transition"
                      max-width="850"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="red lighten-2"
                          v-bind="attrs"
                          v-on="on"
                      >Course Map
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar
                            color="primary"
                            dark
                        >Course Map
                        </v-toolbar>
                        <v-card-text dark>
                          <div class="text-h2 pa-12">
                            <curriculumBox id="curriculum-box"/>
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn
                              text
                              @click="dialog.value = false"
                          >Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </template>

            <v-spacer/>
            <h1
                style="font-family: 'Nirmala UI',serif; padding-right: 70px">
              Shriji Shah
            </h1>
          </v-card-title>
          <v-card-text

          >
            <p
                style="text-indent: 50px;
                font-family: 'Nirmala UI',serif;
                font-size: large;
                margin-right: 50px;
                margin-left: 50px;
                padding-bottom: 15px">
              I am an undergraduate from the University of Ontario Institute of Technology (OnTechU) currently working
              towards a bachelors degree in Networking and IT Security, but my passion for security goes back much
              further
              than that.
              I am enthusiastic about learning cutting edge technology and I push myself to learn and be innovative. I
              really
              enjoy python development and kotlin development.
              As part of my undergraduate studies I've learned core concepts in fundamental and advanced networking,
              enterprise‑level network engineering, cloud computing, programming, scripting, and many additional
              technical
              topics.
              Eventually I want to specialize in cryptography, malware analysis, and IT forensics.
            </p>
            <v-divider/>
            <v-container
                fill-height fluid
                style="padding-left: 50px;padding-right: 50px"
            >
              <v-row class="text-center">

                <v-col
                    v-for="x in love"
                    :key="x.icon"
                >
                  <v-col>
                    <v-icon
                        x-large
                        :color="x.color"
                    >
                      {{ x.icon }}
                    </v-icon>
                  </v-col>
                  <v-col
                  >
                    <h2
                        style="font-family: 'Nirmala UI',serif;"
                    >
                      {{ x.name }}
                    </h2>
                  </v-col>
                </v-col>
              </v-row>


              <v-row class="text-center">

                <v-col
                    v-for="x in activities"
                    :key="x.icon"
                >
                  <v-col>
                    <v-icon
                        x-large
                        :color="x.color"
                    >
                      {{ x.icon }}
                    </v-icon>
                  </v-col>
                  <v-col>
                    <h2
                        style="font-family: 'Nirmala UI',serif;"
                    >
                      {{ x.name }}
                    </h2>
                  </v-col>
                </v-col>

              </v-row>
            </v-container>

            <div>

              <v-simple-table
                  style="padding-left: 50px;padding-right: 50px"

              >
                <template
                    v-slot:default
                >
                  <thead>
                  <tr class="MetalGrad">

                    <th style="border: #5D26C1">
                      <h1
                          style="font-family: Consolas,serif"
                      >
                        REQUIREMENT
                      </h1>
                    </th>

                    <th>
                      <h1
                          style="font-family: Consolas,serif"
                      >
                        DESIGN
                      </h1>
                    </th>
                  </tr>


                  </thead>
                  <tbody class="FancyGrad text-center">
                  <tr
                      v-for="x in skills"
                      :key="x.requirement"
                  >
                    <td
                        style="font-family: 'Nirmala UI',serif;"
                    >
                      {{ x.requirement }}
                    </td>

                    <td
                        style="font-family: 'Nirmala UI',serif;"
                    >
                      {{ x.solution }}
                    </td>
                  </tr>
                  </tbody>

                </template>

              </v-simple-table>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import curriculumBox from "@/components/Curriculum-Box";

export default {
  name: "AboutVue",
  components: {curriculumBox},
  data() {
    return {
      resumeLink: "https://drive.google.com/file/d/14pMjTSAvZV1we2CvbhtAXjAy6mhLTHHj/view?usp=sharing",
      skills: [
        {"requirement": "Editing", "solution": "Photoshop, Adobe, GIMP, Microsoft Office Suite"},
        {"requirement": "Front-End", "solution": "VueJS, HTML, CSS, JavaScript, Materialize"},
        {"requirement": "Back-End", "solution": "NodeJS, Mongo, Firebase Firestore, PHP, Express.js, Flask, Django"},
        {"requirement": "Scripting Languages", "solution": "Python, Kotlin, Java, C++ "},
        {"requirement": "Operating Systems", "solution": "Windows, Kali Linux"},
      ],
      love: [
        {"icon": "Things I'm Passionate About:", "color": "#fe921f"},
        {"icon": "fab fa-vuejs", "name": "VueJS", "color": "#41B883"},
        {"icon": "fab fa-html5", "name": "HTML", "color": "#fe921f"},
        {"icon": "fab fa-css3-alt", "name": "CSS", "color": "#264de4"},
        {"icon": "fab fa-js", "name": "JavaScript", "color": "#f0db4f"},
        {"icon": "fab fa-python", "name": "Python", "color": "#FFE873"},
        {"icon": "fab fa-java", "name": "Kotlin/Java", "color": "#f89820"},
        {"icon": "fab fa-linux", "name": "Linux", "color": "#E95420"},
        {"icon": "fa-dice-d20", "name": "Table Top Games", "color": "#e92020"},
        {"icon": "fab fa-linux", "name": "Linux", "color": "#E95420"},
        {"icon": "fab fa-windows", "name": "Windows OS", "color": "#00BCF2"},
      ],
      activities: [
        {"icon": "What I Like To Do:"},
        {"icon": "fab fa-python", "name": "Scripting"},
        {"icon": "fa-laptop", "name": "Virtualization"},
        {"icon": "fab fa-redhat", "name": "Security Fundamentals"},
        {"icon": "fas fa-network-wired", "name": "Networking Fundamentals"},
        {"icon": "fas fa-ticket-alt", "name": "Ticketing"},
        {"icon": "fas fa-desktop", "name": "Desktop Support"},
        {"icon": "fas fa-palette", "name": "Web Development"},
        {"icon": "fas fa-book", "name": "Technical Documentation"},
        // {"icon": "fas fa-gamepad", "name": "Game Development"},
      ],
    }
  }

}
</script>


<style lang="sass" scoped>
.text-center
  text-align: center


</style>

<style>


title {
  color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-size: 54px;
  font-weight: 300;
  line-height: 58px;
  margin: 0 0 58px;
}

* {
  box-sizing: border-box;
}


body .cybr-btn + .cybr-btn {
  margin-top: 2rem;
}

.cybr-btn {
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
  --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
  --primary-hue: 0;
  --primary-lightness: 50;
  /*--color: hsl(0, 0%, 100%);*/
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
  /*color: var(--color);*/
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

h2 {
  font-family: Georgia, serif;
}

a {
  color: #fe921f;
  text-decoration: none;
}

a:hover {
  lighting-color: blueviolet;
  color: #59C173;
}

/*Gradient Header for the fun*/
.FancyGrad {
  background: linear-gradient(45deg, #59C173, #a17fe0, #5D26C1);
  background-size: 400% 400%;
  border-bottom: 2px solid #3C4346;
  animation: gradient 15s ease infinite;
}

.MetalGrad {
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  background-size: 400% 400%;
  border-bottom: 2px solid #3C4346;
  animation: gradient 15s ease infinite;
}


@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

</style>