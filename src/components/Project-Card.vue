<template>
  <v-parallax
      class="center"
      height="1000"
      src= "https://i.imgur.com/RnlncgD.jpg"

  >
    <v-card
        max-width="500"
        class=""
    >
      <v-img
          style="margin: 40px 20px"
          contain
          :src="project.img"
          class="FancyGrad"
          height="400px"
      >
      </v-img>

      <v-list class="" one-line>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <h1 class="center">
              {{ project.type }}
              </h1>
            </v-list-item-title>
          </v-list-item-content>


        </v-list-item>

        <v-list-item >
          <v-list-item-content >
            <v-list-item-title>
              <h2 class="bordered-text Inset-Text">
                {{ project.name }}
              </h2>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ project.subtype }}
            </v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>

        <v-divider />

        <v-list-item>

          <v-list-item-content>
            <v-list-item-title class="bordered-text">
              {{ project.description }}
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-divider />

        <v-list-item class="center" v-for="link in project.links" :key="link" >
          <v-list-item-icon class="" >
            <v-hover v-slot:default="{ hover }" >
            <v-btn icon >
            <v-tooltip bottom >
              <template v-slot:activator="{on}"  >
                <a :href="link.url" style="text-decoration:none">

                  <v-icon
                    x-large v-on="on"
                    :color="changeColour(hover)"
                  >
                    {{link.icon}}
                  </v-icon>

                </a>
                </template>
                <span>
                  {{link.name}}
                </span>
            </v-tooltip>
            </v-btn>
            </v-hover>

            <!--            <v-tooltip>-->
<!--              <a :href="x.url">-->
<!--                <v-btn icon >-->
<!--                  <v-icon x-large>-->
<!--                      {{x.icon}}-->
<!--                  </v-icon>-->
<!--                </v-btn>-->
<!--              </a>-->
<!--            </v-tooltip>-->

          </v-list-item-icon>

<!--          <v-list-item-content style="margin: auto 30px">-->
<!--            <v-list-item-title>-->
<!--              <h1>-->
<!--              {{ x.linktype }}-->
<!--              </h1>-->
<!--            </v-list-item-title>-->
<!--          </v-list-item-content>-->
        </v-list-item>
      </v-list>
    </v-card>

  </v-parallax>
</template>

<script>
export default {
  name: "Project-Card",
  props: {project: Array},
  methods: {
    changeColour(hover) {
      return hover?"red": "white"
    }
  }
}

</script>

<style lang="sass" scoped>
.center
  display: flex
  justify-content: center

.text-block
  white-space: pre

.bordered-text
  display: flex
  justify-content: center
  text-align: center
  white-space: normal

.Inset-Text
  font: bold 20px arial
  background-color: burlywood
  color: transparent
  text-shadow: 0.5px 0px 2px rgba(255, 255, 255, 0.5)
  -webkit-background-clip: text

</style>

<style>
/*Gradient are fun*/
.FancyGrad {
  background: linear-gradient(45deg, #59C173, #a17fe0,#5D26C1);
  background-size: 400% 400%;
  border-bottom: 2px solid #3C4346;
  animation: gradient 10s ease infinite;
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
  }}

</style>