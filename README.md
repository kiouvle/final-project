# Yandex Praktikum Final Project - News Analyzer v0.3
https://kiouvle.github.io/final-project/

Перед вами сервис для анализа происходящих в мире событий. Его задача — установить, насколько популярны новости на определённую тему.

Этот сайт — дипломный проект студента Яндекс.Практикума. Его цель — показать, чему я научилась и какими технологиями владею. 

На данный момент выполнена адаптивная верстка проекта, по принципу mobile first и методологии БЭМ. Для сверки верстки с макетом использовался pixelperfect. Вёрстка прошла проверку в сервисе Markup Validation Service без единой ошибки.

JavaScript: сайт загружает новости и коммиты с сервера, и сохраняет во временное хранилище. На странице аналитики идет подсчет новостей за неделю и количества упоминаний в заголовках. Форма валидируется.

При создании проекта была использована сборка технологией Webpack. 

## Сборка проекта:

Для сборки необходим Node.js 8+ и выполнить следующие команды:

```bash
npm i # установить все пакеты
npm run build # собрать проект.
```

## Сайт поддерживает следующие браузеры:

- Google Chrome,
- Google Chrome Mobile,
- Yandex Browser,
- Firefox,
- Safari,
- Microsoft Edge 15+

## Установленные библиотеки:
- Webpack - для сборки проекта
- Babel - для поддержки кода старыми браузерами
- *-loader - библиотеки, позволяющие работать с файлами определенного типа
- CSSnano - минификатор CSS
- Autoprefixer - для постановки префиксов в CSS файлах, для улучшения поддержки браузеров
- gh-pages - для публикации сайта
- Webpack plugins - для оптимизации файлов определенного типа

## Планы по доработке проекта:

https://trello.com/b/DyZPMjeN/ya-praktikum-final-project