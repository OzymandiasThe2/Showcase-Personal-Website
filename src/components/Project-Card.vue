<template>

  <v-card
      style="max-width:98%; word-break: break-word"
      class="flex round-card"
  >
    <v-img
        style="margin-top: 10%; max-width: 500px; max-height: 500px; position: inherit; top: 20px"
        contain
        :src="project.img"
        class="center FancyGrad round-card"
        height=500
    >
    </v-img>

    <v-list one-line>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <h1 class="center bordered-text">
              {{ project.type }}
            </h1>
          </v-list-item-title>
        </v-list-item-content>


      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <h2 class="bordered-text Inset-Text">
              {{ project.name }}
            </h2>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider/>

      <v-list-item>

        <v-list-item-content>
          <v-list-item-title class="bordered-text">
            {{ project.description }}
          </v-list-item-title>
        </v-list-item-content>

      </v-list-item>

      <v-divider/>

      <v-list-item class="center" v-for="link in project.links" :key="link">
        <v-list-item-icon>
          <v-hover v-slot="{ hover }">
            <v-btn
                icon
                class="FancyGrad"
                style="text-decoration:none"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{on}">
                  <a
                      style="text-decoration:none"
                      :href="link.url">
                    <v-icon
                        style="text-decoration:none"
                        x-large v-on="on"
                        :color="changeColour(hover)"
                    >
                      {{ link.icon }}
                    </v-icon>

                  </a>
                </template>
                <span>
                  {{ link.name }}
                </span>
              </v-tooltip>
            </v-btn>
          </v-hover>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>

</template>

<script>
export default {
  name: "Project-Card",
  props: {project: Array},
  methods: {
    changeColour(hover) {
      return hover ? "red" : "black"
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

.round-card
  border-radius: 25px

.center
  display: flex
  margin-left: auto
  margin-right: auto
  width: 90%

code
  overflow-wrap: break-word

</style>

<style>
/*Gradient are fun*/
.FancyGrad {
  background: linear-gradient(45deg, #59C173, #a17fe0, #5D26C1);
  background-size: 400% 400%;
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
  }
}


</style>