<template>
  <div style="background: #1E1E1E">
    <v-container>
      <v-flex>
        <v-card dark>
          <v-flex align-self-center>
          </v-flex>
          <v-card-title>
            <div class="bio-wrapper" style="display: grid; grid-template-columns: auto 1fr;">
              <div class="logo-wrapper" style="padding-right: 1rem;">
                <img src="@/assets/images/notion-avatar.webp" alt="Logo" class="logo" />
              </div>
              <div class="bio-text" style="word-break: break-word;">
                <h1 class="font-serif mb-4">About Me: Shriji Shah</h1>
                <p class="font-size ">Welcome to my website! My name is Shriji Shah and I am a recent cyber security graduate with a passion for technology, gaming, and all things geeky. I have always been fascinated by the way technology works and how it can be used to solve complex problems. I am also an avid gamer and Dungeons & Dragons enthusiast. I love the creativity and imagination that goes into games and it's something that I find incredibly inspiring. But it's not just about the fun and games for me. I truly believe that technology and gaming can be used to make a positive impact on the world. So, whether I'm working on securing networks or battling dragons in a virtual world, I approach everything with the same level of passion and dedication. I am always striving to learn and grow, and I am excited to see where my journey will take me.</p>
                <v-btn color="blue" class="resume-btn" :href="resumeLink" title="View Resume">Resume</v-btn>
                <a href="https://blog.shrijishah.com" target="_blank" title="Visit Blog"><v-btn color="blue" class="blog-btn">Blog</v-btn></a>
                <v-dialog transition="dialog-top-transition" max-width="850">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="red lighten-2" v-bind="attrs" v-on="on" aria-label="View Course Map">Course Map</v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="primary" dark>Course Map</v-toolbar>
                      <v-card-text dark><curriculum-box id="curriculum-box" class="text-h2 pa-12" /></v-card-text>
                      <v-card-actions class="justify-end"><v-btn text @click="dialog.value = false">Close</v-btn></v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </div>
          </v-card-title>

          <v-card-text>
            <v-divider/>
            <v-container fill-height fluid style="padding: 0 50px;">
              <v-row class="text-center">
                <v-col v-for="x in love" :key="x.icon">
                  <v-icon x-large :color="x.color">{{ x.icon }}</v-icon>
                  <h2 style="font-family: 'Nirmala UI', serif;">{{ x.name }}</h2>
                </v-col>
              </v-row>

              <v-row class="text-center">
                <v-col v-for="x in activities" :key="x.icon">
                  <v-icon large :color="x.color">{{ x.icon }}</v-icon>
                  <h2 style="font-family: 'Nirmala UI', serif;">{{ x.name }}</h2>
                </v-col>
              </v-row>
            </v-container>



            <div>

              <v-simple-table style="padding-left: 50px;padding-right: 50px">
                <template v-slot:default>
                  <thead>
                  <tr class="MetalGrad">
                    <th style="border: #5D26C1">
                      <h1 style="font-family: Consolas,serif"> REQUIREMENT </h1>
                    </th>
                    <th>
                      <h1 style="font-family: Consolas,serif"> DESIGN </h1>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="FancyGrad text-center">
                  <tr v-for="x in skills" :key="x.requirement">
                    <td style="font-family: 'Nirmala UI',serif;"> {{ x.requirement }} </td>
                    <td style="font-family: 'Nirmala UI',serif;"> {{ x.solution }} </td>
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
      resumeLink: "https://drive.google.com/file/d/1C8sxH96b_nPo0irWmihMFcG97SW2__VT/view?usp=share_link",
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
        {"icon": "fas fa-server", "name": "Hyper-V", "color": "#E95420"},
        {"icon": "fab fa-windows", "name": "Windows OS", "color": "#00BCF2"},
      ],
      activities: [
        {"icon": "What I Do:"},
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

<style>
.logo {
  display: block;
  margin: auto;
  margin-bottom: 1rem;
}

.resume-btn,
.blog-btn {
  margin-right: 1rem;
}

.bio-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.title {
  padding-right: 70px;
}
</style>

