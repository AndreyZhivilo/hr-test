## Демо

[http://hrtest-hr-test-next-js-3aed6f-c76d23-45-155-204-21.traefik.me/](http://hrtest-hr-test-next-js-3aed6f-c76d23-45-155-204-21.traefik.me/)

## 🚀 Инструкция по запуску

1. Переименовываем файл `.env.example` в `.env.local`

2. Устанавливаем зависимости 
```bash 
npm install
```
3. Запускаем приложение
```bash 
npm run dev
```

## 🛠 Как это работает?

### 1. Структура

`shared` - инициализации, конфиги, библиотеки, UI-kit

`features` - бизнес логика разбитая на модули.

`_pages` - готовые страницы и layout которые потом реэкспортируются из соответствующих файлов app. Нужна исключительно ради плоской структуры, в которой легче ориентироваться. 

`app` - роутинг, провайдеры и лоадеры. 

Я вдохновлялся [FSD](https://feature-sliced.design/ru/docs), но для такого маленького приложения, она слишком избыточна, поэтому я сильно упрощал.

### 2. Авторизация и аутентификация

Аутентификацией заведуют роуты `/app/api/auth/login`, `/app/api/auth/logout` и `/app/api/auth/refresh`. Там мы получаем от бэкенда access и refresh токены. После этого refresh сохраняется в httpOnly куках, а access отсылается на клиент. Для простоты я храню его в LocalStorage. 

На старте приложения сессия загружается с сервера в компоненте `app/app-loader`. После этого она храниться в Zustand-сторе, который создается при каждой загрузке и пробрасывается на все приложение через React Context. 

### 3. Верстка

Признаюсь, у меня не хватило времени на PixelPerfect. Сверстал "на глаз" но максимально близко к оригиналу. Из интересных фишечек: 
- Горизонтальное меню пользователя, которое постепенно убирается в поповер и свайпается на мобильных
- Таблица с сортировкой по датам. Прокручивается влево/вправо на мобильных
- Список пользователей с выпадашкой в сайдбаре

## **ВАЖНО**
Мне очень нужна твоя обратная связь. Поэтому пожалуйста напиши мне в ТГ [@stargazer87](https://t.me/stargazer87) коротко о своих впечатлениях от этого приложения: Что получилось хорошо? Что можно улучшить? Что нужно переделать? Буду очень тебе признателен 👍
