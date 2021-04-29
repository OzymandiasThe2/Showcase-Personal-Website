<template>
  <v-flex>
    <v-card
        dark
    >
      <v-flex
          align-self-center
      >
      </v-flex>
      <v-card-title>
        <v-avatar>
          <v-icon style="justify-content: center" class="fas fa-user-secret"></v-icon>
        </v-avatar>
        <p>About Me</p>
        <v-spacer/>
        <h1>Shriji Shah</h1>
      </v-card-title>
      <v-card-text>
        <p> I am an undergraduate from the University of Ontario Institute of Technology (OnTechU) currently working
          towards a bachelors degree in Networking and IT Security, but my passion for security goes back much further
          than that.
          I am enthusiastic about learning cutting edge technology and I push myself to learn and innovative. I really
          enjoy python development and kotlin development.
          As part of my undergraduate studies I've learned core concepts in fundamental and advanced networking,
          enterprise‑level network engineering, cloud computing, programming, scripting, and many additional technical
          topics.
          Eventually I want to specialize in cryptography, IT policies, malware analysis, and IT forensics.
        </p>
        <v-divider/>
        <v-container fill-height fluid>
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
              <v-col>
                {{ x.name }}
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
                {{ x.name }}
              </v-col>
            </v-col>

          </v-row>
        </v-container>


        <div>

          <v-simple-table

          >
            <template
                v-slot:default
            >
              <thead>
              <tr class="MetalGrad">

                <th style="border: #5D26C1">
                  <h1>REQUIREMENT</h1>
                </th>

                <th>
                  <h1>DESIGN</h1>
                </th>
              </tr>


              </thead>
              <tbody class="FancyGrad text-center">
              <tr
                  v-for="x in skills"
                  :key="x.requirement"
              >
                <td>
                  {{ x.requirement }}
                </td>

                <td>
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
</template>

<script>
export default {
  name: "AboutVue",
  data() {
    return {
      skills: [
        {"requirement": "Editing", "solution": "Photoshop, Abode, GIMP, Microsoft Office Suite"},
        {"requirement": "Front-End", "solution": "VueJS, HTML, CSS, JavaScript, Materialize"},
        {"requirement": "Back-End", "solution": "NodeJS, Mongo, Firebase Firestore, PHP, Express.js"},
        {"requirement": "Scripting Languages", "solution": "Python, Kotlin, Java, C++ "},
        {"requirement": "Operating Systems", "solution": "Windows, Kali Linux"},
      ],
      love: [
        {"icon": "Things I'm Passionate About:", "color": "#fe921f"},
        {"icon": "fab fa-vuejs", "name": "VueJS", "color": "#41B883"},
        {"icon": "fab fa-html5", "name": "HMTL", "color": "#fe921f"},
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
        {"icon": "fas fa-palette", "name": "Web Design"},
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