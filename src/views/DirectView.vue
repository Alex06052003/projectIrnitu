<script>
import ModalComponent from '../components/ModalComponent.vue';
import AccordionComponent from '../components/AccordionComponent.vue';

export default {
  name: 'DirectView',
  components: {
    ModalComponent,
    AccordionComponent
  },
  data() {
    return {
      // Данные, которые приходят с бэкенда (пока заглушки)
      workload: true, // Для примера
      faculties: [
        { id: 1, name: 'Факультет 1' },
        { id: 2, name: 'Факультет 2' }
      ],
      formEducation: ['Бакалавриат', 'Магистратура'],
      profiles: [],
      streams: [],
      groups: [],
      students: [],
      teacherScore: [],
      templates: []
    };
  }
};
</script>

<template>
  <div>
    <!-- Кнопка для открытия модального окна -->
    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalWorkload">
      Загрузить нагрузку преподавателей
    </button>

    <!-- Модальное окно -->
    <ModalComponent :workload="workload" />

    <!-- Аккордеон для факультетов и форм образования -->
    <AccordionComponent
      :faculties="faculties"
      :formEducation="formEducation"
      :profiles="profiles"
      :streams="streams"
      :groups="groups"
      :students="students"
      :teacherScore="teacherScore"
      :templates="templates"
    />
  </div>
</template>

<style scoped></style>