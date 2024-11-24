const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Заглушки данных (надо брать из БД)
const faculties = [
    {
        id: 1,
        name: "Факультет ИТ",
        forms: [
            {
                id: 1,
                form_name: "Бакалавриат",
                profiles: [
                    {
                        id: 1,
                        profile_name: "Информационные технологии",
                        streams: [
                            {
                                id: 1,
                                name: "Поток 1",
                                full_name:
                                    "Информационные технологии (Поток 1)",
                                groups: [
                                    {
                                        id: 1,
                                        group_number: "Группа 1",
                                        template_file: "#",
                                        decanat_check: 0,
                                        comment: "",
                                    },
                                    {
                                        id: 2,
                                        group_number: "Группа 2",
                                        template_file: "#",
                                        decanat_check: 1,
                                        comment: "Все в порядке",
                                    },
                                ],
                            },
                            {
                                id: 2,
                                name: "Поток 2",
                                full_name:
                                    "Информационные технологии (Поток 2)",
                                groups: [
                                    {
                                        id: 3,
                                        group_number: "Группа 3",
                                        template_file: "#",
                                        decanat_check: 2,
                                        comment: "Требуется доработка",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "Факультет Экономики",
        forms: [
            {
                id: 2,
                form_name: "Магистратура",
                profiles: [
                    {
                        id: 2,
                        profile_name: "Экономика",
                        streams: [
                            {
                                id: 3,
                                name: "Поток 1",
                                full_name: "Экономика (Поток 1)",
                                groups: [
                                    {
                                        id: 4,
                                        group_number: "Группа 1",
                                        template_file: "#",
                                        decanat_check: 1,
                                        comment: "Принято",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

// Роут для получения факультетов
app.get("/api/faculties", (req, res) => {
    res.json(faculties);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
