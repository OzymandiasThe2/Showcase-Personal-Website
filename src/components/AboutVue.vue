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
            <h1
                style="font-family: 'Nirmala UI',serif; padding-right: 70px">
              Shriji Shah
            </h1>
          </v-card-title>
          <v-card-text

          >
            <p
                style="text-indent: 50px;font-family: 'Nirmala UI',serif; font-size: large;margin-right: 50px;margin-left: 50px;padding-bottom: 15px"
            >
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
              Eventually I want to specialize in cryptography, IT policies, malware analysis, and IT forensics.
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
export default {
  name: "AboutVue",
  data() {
    return {
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
        {"icon": "fab fa-windows", "name": "Windows OS", "color": "#00BCF2"},
      ],
      activities: [
        {"icon": "Additional Skills:"},
        {"icon": "fab fa-python", "name": "Scripting"},
        {"icon": "fab fa-redhat", "name": "Security Fundamentals"},
        {"icon": "fas fa-network-wired", "name": "Networking Fundamentals"},
        {"icon": "fas fa-ticket-alt", "name": "Ticketing"},
        {"icon": "fas fa-desktop", "name": "Desktop Support"},
        {"icon": "fas fa-palette", "name": "Web Development"},
        {"icon": "fas fa-book", "name": "Technical Documentation"},
        {"icon": "fas fa-gamepad", "name": "Game Development"},
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