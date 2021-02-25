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
          than that. Even as a kid, I loved messing around with computers. I just can't describe the satisfaction I felt
          when I optimized. For as long as I can remember, I've dreamt of working at large companies like Google or
          RedHat, and hope for an opportunity to make that dream come true.</p>
        <div>
          <v-simple-table
              dark
              class="FancyGrad"
          >
            <template

                v-slot:default
            >
              <thead>
              <tr>
                <th class="">
                  <h1>Requirement</h1>
                </th>
                <th>
                  <h1>Design</h1>
                </th>
              </tr>


              </thead>
              <tbody class="text-center">
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
        {"requirement": "Design", "solution": "Photoshop, Abode, GIMP, Microsoft Office Suite"},
        {"requirement": "Front-End", "solution": "Vue.js, HTML, CSS, JavaScript, Materialize"},
        {"requirement": "Back-End", "solution": "Node.js, Mongo, Firebase Firestore, PHP, Express.js"},
        {"requirement": "Scripting Languages", "solution": "Python, C++ "},
        {"requirement": "Operating Systems", "solution": "Windows, Kali Linux"},
      ]
    }
  }

}
</script>


<style lang="sass" scoped>
.text-center
  text-align: center
</style>

<style>
/*Gradient Header for the fun*/
.FancyGrad {
  background: linear-gradient(45deg, #59C173, #a17fe0,#5D26C1);
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
  }}

</style>