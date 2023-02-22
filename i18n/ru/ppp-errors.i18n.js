export default function (i18n) {
  i18n.extend({
    $pppErrors: {
      E_REQUIRED_FIELD: 'Это поле обязательно',
      E_BAD_FORM: 'Форма заполнена некорректно или не полностью',
      E_UNKNOWN: 'Неизвестная ошибка'
    },
    $exceptions: {
      EndpointDuplicateKey: 'Конечная точка с таким методом и маршрутом уже существует',
      FunctionDuplicateName: 'Функция с таким именем уже существует',
      InvalidParameter: 'Неверный параметр облачной функции MongoDB Realm',
      FunctionExecutionError: 'Ошибка выполнения облачной функции MongoDB Realm',
      OperationError: 'Не удалось дешифровать данные, проверьте мастер-пароль',
      MongoDBError: 'Ошибка MongoDB Realm, подробности в консоли браузера',
      InvalidCharacterError: 'Данные для декодирования содержат ошибки',
      SyntaxError: 'Синтаксическая ошибка в коде или данных'
    }
  });
}