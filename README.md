Особенности приложения:

1. Разработано с React и Material-UI.
Данные, необходимые приложению, хранятся в локальном хранилище браузера.
Полностью адаптивно, при изменение размера шрифта в браузере макет не ломается.
После запроса прогноза погоды для определенного города, иной запрос для того же города можно сделать лишь спустя два часа. По истечению двух часов соотвутствующая кнопка становится активной.
Города можно добавлять в избранный список для облегчения доступа к ним.
2. При первом запуске:
  1. Делает два запроса: первый, чтобы узнать местоположение пользователя, второй - получить погоду.
  2. Используется тема устройства с которого приложение было запущено, в дальнейшем она может быть изменена независимо.
