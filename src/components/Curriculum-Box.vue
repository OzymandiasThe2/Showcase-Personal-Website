<template>
  <v-data-table
      :headers="headers"
      :items="course_names"
      item-key="name"
      sort-by="name"
      group-by="category"
      class="elevation-1"
      show-group-by
  ></v-data-table>
</template>

<script>
export default {
  name: "curriculumBox",
  data () {
    return {
      headers: [
        {
          text: 'Courses',
          align: 'start',
          value: 'name',
          groupable: false,
        },
        { text: 'Category', value: 'category', align: 'right' },
      ],
      course_names: [
        {
          name: 'Introduction to Networking',
          category: '1st Year',
        },
        {
          name: 'Discrete Mathematics',
          category: '1st Year',
        },
        {
          name: 'Introduction to Programming (ENGR 1200U)',
          category: '1st Year',
        },
        {
          name: 'Business Communications',
          category: '1st Year',
        },
        {
          name: 'Management of the Enterprise',
          category: '1st Year',
        },
        {
          name: 'Introduction to Networking II',
          category: '1st Year',
        },
        {
          name: 'Introductory Calculus (MATH 1010U)',
          category: '1st Year',
        },
        {
          name: 'Object Oriented Programming',
          category: '1st Year',
        },
        {
          name: 'Computer Architecture',
          category: '1st Year',
        },
        {
          name: 'Collaborative Leadership',
          category: '1st Year',
        },
        {
          name: 'Advanced Networking I',
          category: '2nd Year',
        },
        {
          name: 'Web and Script Programming',
          category: '2nd Year',
        },
        {
          name: 'Introduction to Computer Security',
          category: '2nd Year',
        },
        {
          name: 'Statistics and Probability for I.T.',
          category: '2nd Year',
        },
        {
          name: 'Advanced Networking II',
          category: '2nd Year',
        },
        {
          name: 'Algorithms and Data Structures',
          category: '2nd Year',
        },
        {
          name: 'Law and Ethics of I.T.',
          category: '2nd Year',
        },
        {
          name: 'Operating Systems',
          category: '2nd Year',
        },
        {
          name: 'General Elective (Physics 1010U)',
          category: '2nd Year',
        },
        {
          name: 'Advanced Networking III',
          category: '3rd Year',
        },
        {
          name: 'Introduction to Cloud Services',
          category: '3rd Year',
        },
        {
          name: 'Cryptography and Network Security',
          category: '3rd Year',
        },
        {
          name: 'Machine Learning',
          category: '3rd Year',
        },
        {
          name: 'Introduction to Project Management',
          category: '3rd Year',
        },
        {
          name: 'Operating System Security',
          category: '3rd Year',
        },
        {
          name: 'Basics of Digital Transmission',
          category: '3rd Year',
        },
        {
          name: 'Database Systems',
          category: '3rd Year',
        },
        {
          name: 'System & Network Administration',
          category: '3rd Year',
        },
        {
          name: 'General Elective (COMM 1050U)',
          category: '3rd Year',
        },
        {
          name: 'I.T. Security Policies and Procedures',
          category: '4th Year/Current',
        },
        {
          name: 'Introductions to Penetration Testing',
          category: '4th Year/Current',
        },
        {
          name: 'Special Topics in IT – Mobile App',
          category: '4th Year/Current',
        },
        {
          name: 'Special Topics in IT – Trust Systems',
          category: '4th Year/Current',
        },
        {
          name: 'Capstone (Replaced with 2022 Summer Internship)',
          category: '4th Year/Current',
        },
        {
          name: 'I.T Forensics',
          category: '4th Year/Current',
        },
        {
          name: 'Introduction to Entrepreneurship',
          category: '4th Year/Current',
        },
      ],
    }
  },
}
</script>
