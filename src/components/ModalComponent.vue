<script>
export default {
  name: 'ModalComponent',
  props: {
    workload: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<template>
  <div
    class="modal fade"
    id="exampleModalWorkload"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Загрузка нагрузки преподавателей</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="workload" class="mb-3">
            <label for="formFile" class="form-label">Выберете xlsx файл</label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              name="teacher_workload_file"
              accept=".xlsx"
            />
          </div>
          <div v-else>
            <label for="formFile" class="form-label"
              >Загрузка уже загружена! Обратитесь к администратору</label
            >
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" :disabled="!workload">Загрузить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
