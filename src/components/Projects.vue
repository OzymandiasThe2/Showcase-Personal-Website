<template>
  <div>
    <v-card
        dark
        height="100vh"
        elevation="24"
    >
      <v-parallax
          height="1100"
          src="https://i.imgur.com/RnlncgD.jpg"
      >
        <v-container class="flex center round-card">
          <v-carousel
              class="round-card"
              height="1100"
              :continuous="true"
              :cycle="cycle"
              :show-arrows="false"
              delimiter-icon="mdi-minus"
          >
            <v-carousel-item
                v-for="(x) in projects"
                :key="x"
            >
              <div style="height: 50px">
                <ProjectCard v-bind:project="x"/>

              </div>

            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-parallax>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              fas fa-at
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>shrijishah@hotmail.com</v-list-item-title>
            <v-list-item-subtitle>Author</v-list-item-subtitle>
            <v-list-item-subtitle>Made with Vuetify</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

  </div>
</template>

<script>
import ProjectCard from "@/components/Project-Card";

export default {
  name: "Projects",
  components: {ProjectCard},
  data() {
    return {
      cycle: true,
      projects: [
        {
          "type": "Recent Project",
          "name": "Ciphered Text Generator",
          "description": "Encryption/Decryption algorithm made for a class project using Python, featuring multiple different ciphers from, RSA to Substitution.",
          "img": "https://i.imgur.com/sUSc7zm.png",
          "links":
              [
                {
                  "url": "https://github.com/OzymandiasThe2/Cipher-Text-Project",
                  "name": "GitHub",
                  "icon": "fab fa-github",
                },
              ],

        },
        {
          "type": "Recent Project",
          "name": "Fork-Bomb/Wabbit Virus",
          "description": "Fork bomb made as a demonstration of JavaScript XSS project for Computer Security",
          "img": require("@/assets/images/fork image.png"),
          "links":
              [
                {
                  "url": "https://github.com/OzymandiasThe2/fork-bomb",
                  "name": "GitHub",
                  "icon": "fab fa-github"
                },
              ],
        },
        {
          "type": "Recent Project",
          "name": "Tic-Tac-Toe",
          "description": "Final project involving developing a game (Tic‐Tac‐Toe) in MIPS assembly language",
          "img": require("@/assets/images/tic_tac_toe.png"),
          "links":
              [
                {
                  "url": "https://github.com/OzymandiasThe2/Tic-Tac-Toe-Game-Mips-Assembly",
                  "name": "GitHub",
                  "icon": "fab fa-github"
                },
              ],
        },
        {
          "type": "Education",
          "name": "University of Ontario Institute of Technology",
          "description": "Currently an undergrad student working toward my bachelors of Networking \n and IT Security",
          "img": require("@/assets/images/ontariotechu-og-image.png"),
          "links":
              [
                {
                  "url": "https://ontariotechu.ca/",
                  "linktype": "GitHub",
                  "icon": "fas fa-graduation-cap"

                },
              ],
        },
        {
          "type": "Personal Hobby Project",
          "name": "Dungeons and Dragons - Random Generator",
          "description": "Made during first year of uni, just something I made for fun \n and because it was a way for me to practice \n Python and Object Oriented programming. \n Not very functional or good coding practices, might make a newer, functional and revised version at one point with a GUI.'¯\\_(ツ)_/¯'",
          "img": require("@/assets/images/dice-twenty-faces-twenty.png"),
          "links":
              [
                {
                  "url": "https://github.com/OzymandiasThe2/DnD",
                  "linktype": "GitHub",
                  "icon": "fab fa-github"
                },
              ],
        },

      ],
    }
  },
}

</script>

<style lang="sass" scoped>
code
  overflow-wrap: break-word

.center
  display: flex
  margin-left: auto
  margin-right: auto
  width: 90%

.round-card
  border-radius: 40px

</style>