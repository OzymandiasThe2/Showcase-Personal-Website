<template>
  <div class="sticky-footer">
    <v-card class="text-center" dark>
      <v-row class="text-center justify-center">
        <v-col v-for="(url, index) in urls" :key="index" cols="12" sm="4">
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon dark>{{ url.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ url.lineOne }}</v-list-item-title>
                <v-list-item-subtitle>
                  <a :href="url.hyperLink" class="link">{{ url.lineTwo }}</a>
                  <p class="alt-line">{{ url.altLineTwo }}</p>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      urls: [
        {
          icon: "fas fa-at",
          lineOne: "shrijishah@hotmail.com",
          altLineTwo: "Made with Vue",
        },
        {
          icon: "fab fa-linkedin",
          lineOne: "LinkedIn",
          lineTwo: "https://www.linkedin.com/in/shriji-shah-92771019a",
          hyperLink: "https://www.linkedin.com/in/shriji-shah-92771019a",
        },
        {
          icon: "fab fa-github",
          lineOne: "GitHub",
          lineTwo: "https://github.com/OzymandiasThe2",
          hyperLink: "https://github.com/OzymandiasThe2",
        },
      ],
    };
  },
};
</script>
<style scoped>
.link {
  color: white;
  text-decoration: none;
}

.alt-line {
  margin-top: 5px;
}
</style>