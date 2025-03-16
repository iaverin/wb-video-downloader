# Демо расширения по скачиванию видео из отзывов WB

### Условия для сборки расширения

- Node.js (v14+)
- npm (v6+)

### Установка расширения

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/iaverin/wb-video-downloader.git
   ```

2. Перейти в директорию проекта:
   ```bash
   cd wb-video-downloader
   ```

3. Установить зависимости:
   ```bash
   npm install
   ```

4. Собрать расширение
   ```bash
   npm run build
   ```

В папке `dist` будут созданы файлы расширения.

### Загрузка расширения в браузер Chrome

1. Откройте Chrome и перейдите по адресу `chrome://extensions`
2. Включите режим разработчика ("Developer mode")
3. Нажмите "Load unpacked" и выберите папку `dist` 


### Сохранение видео

- Откройте видео-отзыв 
- Нажмите **4** чтобы сохранить видео

### Используемые компоненты
- Бойлерплейт: https://github.com/RoshanPShetty/ChromeTS-Launchpad
- Функция скачивания m3u видео: https://github.com/SuperZombi/m3u8-downloader-js
