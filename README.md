# fundraiseup_test
Решение [тестового задания](https://www.notion.so/Fullstack-test-b500e565cb89462b88003dd60927ab82) от Fundraise Up  

Папка `frontend` - содержит исходники клиентского приложения на VueJS  
Папка `backend` - содержит исходники серверной части приложения

# Зависимости
Перед сборкой необходимо установить след. зависимости:
* nodejs (npm)
* mongodb

# Сборка и запуск
### frontend
```shell script
npm install --prefix ./frontend
npm run build --prefix ./frontend
```
### backend
```shell script
npm install --prefix ./backend
npm run start --prefix ./backend
```
Далее приложение будет доступно по адресу http://localhost:3000

# Запуск (имеющихся) тестов
### frontend
```shell script
npm run test:unit --prefix ./frontend
```
### backend
TODO
