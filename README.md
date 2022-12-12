# Microfrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

# Навигация

Вся документация и статьи расположены в разделе `/wiki/`

- [Основные положения](https://github.com/Shertor/module-federation/blob/main/wiki/0.%20Home.md)

- [Настройка с нуля](https://github.com/Shertor/module-federation/blob/main/wiki/1.%20%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0%20%D1%81%20%D0%BD%D1%83%D0%BB%D1%8F.md)

- [Переход на динамический режим](https://github.com/Shertor/module-federation/blob/main/wiki/2.%20%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%20%D0%BD%D0%B0%20%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B5%D0%B6%D0%B8%D0%BC.md)

- [Переход на динамический режим](https://github.com/Shertor/module-federation/blob/main/wiki/3.%20%D0%9F%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B.md)

Проект разделен на основные шаблоны, котороые лежат в `/projects/`

- `/shell/` - основное приложение, в которое встраиваются:

    - `/shared/` - библиотека, в которой должны располагаться общие сервисы и т.п.
    - `/mfe-plugins/`- шаблон проекта, содержащий встраиваемые плагины (компоненты)
    - `/clock/` - пример встраиваемого модуля


# Основные команды для динамического режима

Запуск Всех модулей
```bash
npm run run:all
```

Создание пустого проекта microfrontend-example
```bash
npx new microfrontend-example --create-application false --minimal
```

Создание shell приложения
```bash
ng generate application shell --routing --style scss

ng add @angular-architects/module-federation --project shell --port 4200 --type dynamic-host
```

Создание модуля
```bash
ng generate application mfe-[name] --routing --style scss

ng add @angular-architects/module-federation --project mfe-[name] --port 4201 --type remote
```