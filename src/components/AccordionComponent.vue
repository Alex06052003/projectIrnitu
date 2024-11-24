<script>
import TabComponent from './TabComponent.vue'

export default {
  name: 'AccordionComponent',
  components: {
    TabComponent,
  },
  props: {
    faculties: {
      type: Array,
      required: true,
    },
    formEducation: {
      type: Array,
      required: true,
    },
    profiles: {
      type: Array,
      required: true,
    },
    streams: {
      type: Array,
      required: true,
    },
    groups: {
      type: Array,
      required: true,
    },
    students: {
      type: Array,
      required: true,
    },
    teacherScore: {
      type: Array,
      required: true,
    },
    templates: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div v-for="faculty in faculties" :key="faculty.id">
      <h3>{{ faculty.name }}</h3>
      <div v-for="form in formEducation" :key="form">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="'heading-' + form + faculty.id">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse-' + form + faculty.id"
              aria-expanded="false"
              :aria-controls="'collapse-' + form + faculty.id"
            >
              {{ form }}
            </button>
          </h2>
          <div
            :id="'collapse-' + form + faculty.id"
            class="accordion-collapse collapse"
            :aria-labelledby="'heading-' + form + faculty.id"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <TabComponent
                :faculty-id="faculty.id"
                :form="form"
                :profiles="profiles"
                :streams="streams"
                :groups="groups"
                :students="students"
                :teacherScore="teacherScore"
                :templates="templates"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
