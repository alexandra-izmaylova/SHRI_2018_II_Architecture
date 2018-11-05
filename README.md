dispatcher.js

В классе Dispatcher описаны 3 метода: register(), dispatch(),
unregister().

register(callback) - регистрирует подписчика на события.
dispatch(payload) - отправляет событие подписчикам.
unregister(callback) - удаляет подписчика на события.


store.js

В классе Store описаны 3 метода: processPayload(), 
addListener(), removeListener().

Аргументы конструктора:
dispatcher - экземпляр Dispatcher.
event - название события (строка).
initialState - начальное состояние хранилища.

processPayload(state, payload) - реализуется на стороне пользователя,
в дочерних классах. Возвращает новое состояние.
Аргументы:
state - текущее состояние.
payload - событие, которое надо обработать.

addListener(listener) - добавляет слушателя состояния.

removeListener(listener) - удаляет слушателя состояния.


eventEmitter.js

В классе EventEmitter описаны 3 метода: addEventListener(),
removeEventListener(), emit().

addEventListener(event, listener) - добавляет слушателя
события с именем event.

removeEventListener(event, listener) - удаляет слушателя
события с именем event.

emit(event, ...args) - отправляет событие с параметрами args
всем подписчикам на событие с именем event.