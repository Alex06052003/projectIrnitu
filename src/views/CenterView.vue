<script>
import axios from "axios";

export default {
    data() {
        return {
            faculties: [],
            showingComment: null,
        };
    },
    methods: {
        fetchFaculties() {
            axios
                .get("http://localhost:3000/api/faculties")
                .then((response) => {
                    this.faculties = response.data;
                })
                .catch((error) => {
                    console.error("Error fetching faculties:", error);
                });
        },
        statusClass(status) {
            switch (status) {
                case 0:
                    return "text-warning";
                case 1:
                    return "text-success";
                case 2:
                    return "text-danger";
                default:
                    return "";
            }
        },
        statusText(status) {
            switch (status) {
                case 0:
                    return "Не проверено";
                case 1:
                    return "Принято";
                case 2:
                    return "Переделать";
                default:
                    return "";
            }
        },
        showComment(groupId) {
            this.showingComment = groupId;
        },
    },
    mounted() {
        this.fetchFaculties();
    },
};
</script>

<template>
    <div class="accordion" id="accordionInstitute">
        <div
            v-for="faculty in faculties"
            :key="faculty.id"
            class="accordion-item"
        >
            <h2 class="accordion-header" :id="'heading' + faculty.id">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + faculty.id"
                    aria-expanded="false"
                    :aria-controls="'collapse' + faculty.id"
                >
                    {{ faculty.name }}
                </button>
            </h2>
            <div
                :id="'collapse' + faculty.id"
                class="accordion-collapse collapse"
                :aria-labelledby="'heading' + faculty.id"
                data-bs-parent="#accordionInstitute"
            >
                <div class="accordion-body">
                    <div
                        v-for="form in faculty.forms"
                        :key="form.id"
                        class="accordion"
                        :id="'accordionFormat' + form.id"
                    >
                        <div
                            v-for="(form_rus, form_key) in form.form_name"
                            :key="form_key"
                            class="accordion-item"
                        >
                            <h2
                                class="accordion-header"
                                :id="'heading' + form_key + faculty.id"
                            >
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    :data-bs-toggle="'collapse'"
                                    :data-bs-target="
                                        '#collapse' + form_key + faculty.id
                                    "
                                    aria-expanded="false"
                                    :aria-controls="
                                        'collapse' + form_key + faculty.id
                                    "
                                >
                                    {{ form_rus }}
                                </button>
                            </h2>
                            <div
                                :id="'collapse' + form_key + faculty.id"
                                class="accordion-collapse collapse"
                                :aria-labelledby="
                                    'heading' + form_key + faculty.id
                                "
                                :data-bs-parent="'#accordionFormat' + form.id"
                            >
                                <div class="accordion-body">
                                    <div
                                        v-for="profile in form.profiles"
                                        :key="profile.id"
                                        class="accordion"
                                    >
                                        <div
                                            v-for="stream in profile.streams"
                                            :key="stream.id"
                                            class="accordion-item"
                                        >
                                            <h2
                                                class="accordion-header"
                                                :id="
                                                    'headingStream' + stream.id
                                                "
                                            >
                                                <button
                                                    class="accordion-button collapsed"
                                                    type="button"
                                                    :data-bs-toggle="'collapse'"
                                                    :data-bs-target="
                                                        '#collapseStream' +
                                                        stream.id
                                                    "
                                                    aria-expanded="false"
                                                    :aria-controls="
                                                        'collapseStream' +
                                                        stream.id
                                                    "
                                                >
                                                    {{ stream.name }} -
                                                    {{ stream.full_name }}
                                                </button>
                                            </h2>
                                            <div
                                                :id="
                                                    'collapseStream' + stream.id
                                                "
                                                class="accordion-collapse collapse"
                                                :aria-labelledby="
                                                    'headingStream' + stream.id
                                                "
                                                :data-bs-parent="
                                                    '#accordionStream' +
                                                    stream.id
                                                "
                                            >
                                                <div class="accordion-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Группа</th>
                                                                <th>
                                                                    Шаблон
                                                                    приказа
                                                                </th>
                                                                <th>Статус</th>
                                                                <th>
                                                                    Действие
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr
                                                                v-for="group in stream.groups"
                                                                :key="group.id"
                                                            >
                                                                <td>
                                                                    {{
                                                                        group.group_number
                                                                    }}
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        :href="
                                                                            group.template_file
                                                                        "
                                                                        class="btn btn-link"
                                                                        >Файл</a
                                                                    >
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        :class="
                                                                            statusClass(
                                                                                group.decanat_check
                                                                            )
                                                                        "
                                                                    >
                                                                        {{
                                                                            statusText(
                                                                                group.decanat_check
                                                                            )
                                                                        }}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        @click="
                                                                            showComment(
                                                                                group.id
                                                                            )
                                                                        "
                                                                    >
                                                                        Комментарий
                                                                    </button>
                                                                    <textarea
                                                                        v-if="
                                                                            showingComment ===
                                                                            group.id
                                                                        "
                                                                        v-model="
                                                                            group.comment
                                                                        "
                                                                        rows="1"
                                                                        placeholder="Комментарий"
                                                                    ></textarea>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Стили аккордеона и таблицы */
.accordion-item {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 3px;
    margin: 1px;
}

.accordion-button {
    cursor: pointer;
    font-size: 14px;
}

.table th,
.table td {
    text-align: center;
}

.text-warning {
    color: #cd6200;
}

.text-success {
    color: #1f9254;
}

.text-danger {
    color: #f23a11;
}
</style>
