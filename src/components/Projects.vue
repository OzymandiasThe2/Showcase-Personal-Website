<template>
  <v-app id="inspire">
    <div
        style="background: #1E1E1E"
    >
      <v-container
      >
        <v-card
            dark
        >
          <v-container
              style="margin-bottom: 50px"
          >
            <v-row
                no-gutters
            >
              <v-col
                  v-for="p in projects"
                  :key="p"
                  cols="12"
                  sm="6"
              >
                <v-dialog
                    :fullscreen="$vuetify.breakpoint.xs"
                    transition="dialog-top-transition"
                    open-delay="0"
                    max-width="500"
                >
                  <template v-slot:activator="{ on, attrs }">

                    <v-card
                        outlined
                        min-height="500"
                        max-height="800"
                        class="pa-2 text-wrap"
                        tile
                    >
                      <v-card-title
                          class="header center"
                          style="overflow-y: auto; font-family: 'Arial Rounded MT Bold',serif;margin-bottom: -20px"
                      >
                        <p
                            style="width: 100%;min-height: 65px"
                        >
                          {{ p.type }}
                        </p>
                      </v-card-title>
                      <v-card
                          elevation="0"
                          class="mx-auto"
                      >
                        <v-card-title
                            class="center text-wrap text-center"
                            style="overflow-y: auto; height: 180px; font-family: Hack,serif"
                        >
                          <p
                              style="width: 100%"
                          >
                            {{ p.name }}
                          </p>
                        </v-card-title>

                        <v-img
                            contain
                            class="center"
                            min-height="250"
                            min-width="250"
                            max-height="250"
                            max-width="250"
                            :src="p.img"
                        >

                        </v-img>

                        <v-card-actions
                            style="max-height: 80px"
                        >
                          <v-list-item class="center">
                            <v-list-item-icon>

                              <v-btn
                                  outlined
                                  v-for="links in p.links"
                                  :key="links"
                                  icon
                                  fab
                                  dark
                                  elevation="5"
                                  color="green darken-1"

                              >

                                <a
                                    :href="links.url"
                                    text-decoration="none"
                                    style="text-decoration: none"

                                >
                                  <v-icon
                                      dark
                                      :href="links.url"
                                      x-large
                                  >
                                    {{ links.icon }}
                                  </v-icon>
                                </a>
                              </v-btn>
                            </v-list-item-icon>
                          </v-list-item>

                          <v-btn
                              outlined
                              elevation="10"
                              rounded
                              text
                              v-bind="attrs"
                              v-on="on"
                              style="font-family: 'Nirmala UI',serif;"
                          >
                            Information
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-card>
                  </template>
                  <template
                      v-slot:default="dialog"
                  >
                    <v-card
                        dark
                    >
                      <v-card-title
                          class="headline"
                          style="font-family: 'Nirmala UI',serif;"
                      >
                        {{ p.name }}
                      </v-card-title>
                      <v-card-text
                          style="font-family: 'Nirmala UI',serif;">
                        {{ p.description }}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer/>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="dialog.value = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-row>

          </v-container>
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      cycle: true,
      projects: [
        {
          "type": "Recent Project",
          "name": "BGP using Bellman-Ford Algorithm",
          "description": "A brief showcase of using the Bellman-Ford algorithmic technique for Border Gateway Protocol (BGP) weighting and how it might be routed in real world scenarios.",
          "img": "https://upload.wikimedia.org/wikipedia/commons/7/77/Bellman%E2%80%93Ford_algorithm_example.gif",
          "links":
              [
                {
                  "url": "https://github.com/OzymandiasThe2/BGP-using-Bellman-Ford-Algorithm",
                  "name": "GitHub",
                  "icon": "fab fa-github",
                },
              ],
        },
        {
          "type": "Recent Project",
          "name": "Cipher Text Generator",
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
          "img": require("@/assets/images/Fork_bomb.svg"),
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
          "description": "Final project involving developing a game (Tic-Tac-Toe) in MIPS assembly language",
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
          "description": "Made during first year of uni, just something I made for fun \n and because it was a way for me to practice \n Python and Object Oriented programming. \n Not very functional or good coding practices, might make a newer, revised version at one point with a GUI.",
          "img": require("@/assets/images/dice-twenty-faces-twenty.png"),
          "links":
              [
                {
                  "url": "https://github.com/OzymandiasThe2/DnD_Project",
                  "linktype": "GitHub",
                  "icon": "fab fa-github"
                },
              ],
        },
        {
          "type": "Capture the Flag Competition",
          "name": "UOIT's TacOps Fall 2020 CTF",
          "description": "Achieved fourth place in a capture the flag hosted by the school's networking society, Netsoc. During the competition my group displayed knowledge in databases, stenography, encryption/decryption, programming, and fundamental networking and security knowledge.",
          "img": require("@/assets/images/netsoc-tacops.jpg"),
          "links":
              [
                {
                  "url": "https://netsocot.com",
                  "linktype": "Networking Society",
                  "icon": "fas fa-award"
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
  word-break: normal

.center
  display: flex
  margin-left: auto
  margin-right: auto
  width: 90%

.Abstract
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2194%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2195)'%3e%3c/rect%3e%3cg mask='url(%26quot%3b%23SvgjsMask2197%26quot%3b)'%3e%3cpath d='M1461.5 277.5L1424.5 277.5L1387.5 277.5L1350.5 277.5L1313.5 277.5L1276.5 277.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M1267.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M1461.5 314.5L1424.5 314.5L1387.5 314.5L1350.5 314.5L1313.5 314.5L1276.5 314.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M1267.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M351.5 240.5L314.5 277.5L277.5 277.5L240.5 277.5M610.5 240.5L573.5 277.5L536.5 277.5M647.5 240.5L610.5 277.5L573.5 314.5L536.5 314.5L499.5 314.5L462.5 314.5L425.5 314.5L388.5 314.5L351.5 314.5L314.5 314.5L277.5 314.5M1128.5 240.5L1091.5 277.5L1054.5 277.5L1017.5 277.5L980.5 277.5L943.5 277.5L906.5 277.5L869.5 277.5L832.5 277.5L795.5 277.5L758.5 277.5M425.5 240.5L388.5 277.5L351.5 277.5M1239.5 240.5L1202.5 277.5L1165.5 277.5L1128.5 277.5L1091.5 314.5L1054.5 314.5L1017.5 314.5M462.5 240.5L425.5 277.5M499.5 240.5L462.5 277.5M1461.5 240.5L1424.5 240.5L1387.5 240.5L1350.5 240.5L1313.5 240.5L1276.5 240.5L1239.5 240.5L1202.5 240.5L1165.5 240.5L1128.5 240.5L1091.5 240.5L1054.5 240.5L1017.5 240.5L980.5 240.5L943.5 240.5L906.5 240.5L869.5 240.5L832.5 240.5L795.5 240.5L758.5 240.5L721.5 240.5L684.5 240.5L647.5 240.5L610.5 240.5L573.5 240.5L536.5 240.5L499.5 240.5L462.5 240.5L425.5 240.5L388.5 240.5L351.5 240.5L314.5 240.5L277.5 240.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M268.25 240.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM231.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM527.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM268.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM749.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM342.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1008.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM416.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM453.25 277.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M314.5 351.5L277.5 388.5L240.5 388.5L203.5 388.5L166.5 388.5L129.5 388.5L92.5 388.5M1239.5 351.5L1202.5 314.5L1165.5 314.5L1128.5 314.5M462.5 351.5L425.5 388.5L388.5 425.5L351.5 425.5L314.5 425.5M277.5 351.5L240.5 351.5L203.5 351.5M832.5 351.5L795.5 314.5L758.5 314.5L721.5 314.5L684.5 314.5L647.5 314.5L610.5 314.5M980.5 351.5L943.5 314.5M388.5 351.5L351.5 388.5L314.5 388.5M684.5 351.5L647.5 388.5L610.5 388.5L573.5 388.5L536.5 388.5L499.5 388.5L462.5 388.5L425.5 425.5L388.5 462.5M1461.5 351.5L1424.5 351.5L1387.5 351.5L1350.5 351.5L1313.5 351.5L1276.5 351.5L1239.5 351.5L1202.5 351.5L1165.5 351.5L1128.5 351.5L1091.5 351.5L1054.5 351.5L1017.5 351.5L980.5 351.5L943.5 351.5L906.5 351.5L869.5 351.5L832.5 351.5L795.5 351.5L758.5 351.5L721.5 351.5L684.5 351.5L647.5 351.5L610.5 351.5L573.5 351.5L536.5 351.5L499.5 351.5L462.5 351.5L425.5 351.5L388.5 351.5L351.5 351.5L314.5 351.5L277.5 351.5L240.5 314.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M231.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM83.25 388.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1119.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM305.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM194.25 351.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM601.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM934.25 314.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM305.25 388.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM379.25 462.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M943.5 203.5L906.5 166.5L869.5 166.5L832.5 166.5L795.5 166.5L758.5 166.5L721.5 166.5L684.5 166.5L647.5 166.5L610.5 166.5M425.5 203.5L388.5 166.5L351.5 129.5L314.5 92.5L277.5 92.5L240.5 92.5L203.5 92.5L166.5 92.5L129.5 92.5M351.5 203.5L314.5 166.5M499.5 203.5L462.5 166.5L425.5 166.5L388.5 129.5L351.5 92.5M1017.5 166.5L980.5 203.5M573.5 203.5L536.5 166.5L499.5 166.5L462.5 129.5L425.5 129.5M1091.5 203.5L1054.5 166.5M980.5 166.5L943.5 166.5M1461.5 203.5L1424.5 203.5L1387.5 203.5L1350.5 203.5L1313.5 203.5L1276.5 203.5L1239.5 203.5L1202.5 203.5L1165.5 203.5L1128.5 203.5L1091.5 203.5L1054.5 203.5L1017.5 166.5L980.5 166.5L943.5 203.5L906.5 203.5L869.5 203.5L832.5 203.5L795.5 203.5L758.5 203.5L721.5 203.5L684.5 203.5L647.5 203.5L610.5 203.5L573.5 203.5L536.5 203.5L499.5 203.5L462.5 203.5L425.5 203.5L388.5 203.5L351.5 203.5L314.5 203.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M305.25 203.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM601.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM120.25 92.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM305.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM342.25 92.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM971.25 203.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM416.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1045.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM934.25 166.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M1017.5 388.5L980.5 425.5L943.5 425.5L906.5 425.5M1424.5 388.5L1387.5 425.5L1350.5 425.5L1313.5 425.5M1128.5 388.5L1091.5 425.5L1054.5 462.5L1017.5 462.5L980.5 462.5M1054.5 388.5L1017.5 425.5M1461.5 388.5L1424.5 388.5L1387.5 388.5L1350.5 388.5L1313.5 388.5L1276.5 388.5L1239.5 388.5L1202.5 388.5L1165.5 388.5L1128.5 388.5L1091.5 388.5L1054.5 388.5L1017.5 388.5L980.5 388.5L943.5 388.5L906.5 388.5L869.5 388.5L832.5 388.5L795.5 388.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M786.25 388.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM897.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1304.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM971.25 462.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1008.25 425.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3cpath d='M1313.5 166.5L1276.5 129.5L1239.5 129.5L1202.5 129.5M1424.5 166.5L1387.5 129.5L1350.5 129.5M1091.5 129.5L1054.5 92.5L1017.5 92.5L980.5 129.5M1461.5 166.5L1424.5 166.5L1387.5 166.5L1350.5 166.5L1313.5 166.5L1276.5 166.5L1239.5 166.5L1202.5 166.5L1165.5 166.5L1128.5 166.5L1091.5 129.5L1054.5 129.5' stroke='url(%23SvgjsLinearGradient2196)' stroke-width='6.17'%3e%3c/path%3e%3cpath d='M1045.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1193.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM1341.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0zM971.25 129.5 a9.25 9.25 0 1 0 18.5 0 a9.25 9.25 0 1 0 -18.5 0z' fill='url(%23SvgjsLinearGradient2196)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2194'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2195'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(53%2c 26%2c 77%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1219.9679999999998' y1='-220.02399999999997' x2='220.03199999999998' y2='780.024' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2196'%3e%3cstop stop-color='%233a7cc3' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(176%2c 14%2c 96%2c 1)' offset='0.24'%3e%3c/stop%3e%3cstop stop-color='rgba(70%2c 255%2c 0%2c 1)' offset='0.41'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 127%2c 255%2c 1)' offset='0.57'%3e%3c/stop%3e%3cstop stop-color='rgba(105%2c 0%2c 255%2c 1)' offset='0.62'%3e%3c/stop%3e%3cstop stop-color='rgba(176%2c 14%2c 96%2c 1)' offset='0.72'%3e%3c/stop%3e%3cstop stop-color='rgba(176%2c 14%2c 96%2c 1)' offset='0.84'%3e%3c/stop%3e%3cstop stop-color='rgba(221%2c 120%2c 17%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cmask id='SvgjsMask2197'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3cpath d='M1271.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M1271.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M272.87 240.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM235.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM531.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM272.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM753.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM346.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1012.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM420.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM457.87 277.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M235.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM87.87 388.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1123.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM309.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM198.87 351.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM605.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM938.87 314.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM309.87 388.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM383.87 462.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M309.87 203.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM605.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM124.87 92.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM309.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM346.87 92.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM975.87 203.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM420.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1049.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM938.87 166.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M790.87 388.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM901.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1308.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM975.87 462.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1012.87 425.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M1049.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1197.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM1345.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0zM975.87 129.5 a4.63 4.63 0 1 0 9.26 0 a4.63 4.63 0 1 0 -9.26 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")

.round-card
  border-radius: 40px


.header
  text-align: center
  margin: auto
  color: white
  font-size: 30px

.v-card__text, .v-card__title
  word-break: normal
/* maybe !important  */

</style>
