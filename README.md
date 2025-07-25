# Villageinfo India Village Parser 2019

Проект предназначен для автоматизированного парсинга данных о деревнях Индии с портала [Mission Antyodaya](https://missionantyodaya.nic.in).

## Оглавление
- [Описание](#описание)
- [Установка](#установка)
- [Использование](#использование)
- [Структура](#структура)

## Описание
Скрипт использует методы `IMPORTXML` и `IMPORTHTML` для извлечения данных о деревнях, штатах и других административных единицах. Данные сохраняются в Google Sheets.

## Установка
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-username/Villageinfo_india-village-parser_2019.git

##Структура
Villageinfo_india-village-parser_2019/
├── src/                     # Исходный код
│   └── villageParser.js     # Основной скрипт
├── data/                    # Данные
│   └── example_data.xlsx    # Пример данных
├── README.md                # Описание проекта
└── .gitignore               # Игнорируемые файлы