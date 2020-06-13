# Готовая сборка webpack 


В ней есть оптимизация и минимизация:

1. JavaScript (babel)
2. SCSS
3. HTML
4. Сжатие картинок
5. **Проверка кода ESLint**
6. Webpack-dev-server 
7. Поддержка **jest** с покрытием кода



## Установка

Клонируем к себе репозиторий 

#### Сделайте `git clone`

#### Смените директорию `cd webpack`

#### Запустите: ` npm install`



***Для разработки:***

 *1. ставим в файле .env переменную APP_ENV=dev*

 *2. даем команду npm run dev*

 *http://localhost:3000/*

 *Получаем комфортную среду для отладки, есть карты кода (source maps)*



***Для продакшена:***

даем команду *npm run prod*

или

 *1. ставим в файле .env переменную APP_ENV=prod*

 *2. даем команду npm run build*

Получаем минимизированный / сжатый код

 

***Для проведения теста:***

  *npm run test*

в папке проекта появится /coverage/index.html – это полная сводка покрытия вашего кода (HTML) 



***Для проверки правильности кода:***

  *npm run lint*
