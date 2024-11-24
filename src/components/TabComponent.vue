<script>
export default {
  name: 'TabComponent',
  props: {
    facultyId: {
      type: Number,
      required: true,
    },
    form: {
      type: String,
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
  computed: {
    filteredGroups() {
      // Фильтруем группы по нужным критериям
      return this.groups.filter((group) => group.streamId === this.facultyId)
    },
    filteredStudents() {
      return (group) => {
        return this.students.filter((student) => student.groupId === group.id)
      }
    },
  },
}
</script>

<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li v-for="group in filteredGroups" :key="group.id" class="nav-item" role="presentation">
        <button
          class="nav-link"
          :id="'tab' + group.id + '-tab'"
          data-bs-toggle="tab"
          :data-bs-target="'#tab' + group.id"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          {{ group.name }}
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        v-for="group in filteredGroups"
        :key="'tab-' + group.id"
        class="tab-pane fade"
        :id="'tab' + group.id"
        role="tabpanel"
        :aria-labelledby="'tab' + group.id + '-tab'"
      >
        <table class="table">
          <thead>
            <tr>
              <th>ФИО Студента</th>
              <th>Руководитель</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in filteredStudents(group)" :key="student.id">
              <td>{{ student.fio }}</td>
              <td>{{ student.teacher ? student.teacher.fio : '-' }}</td>
              <td>{{ student.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
