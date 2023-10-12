import ErrorRepository from '../map';

test('поиск по коду выдает описание ошибки', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(404)).toEqual('page not found');
});

test('в случае отсутствия кода в контейнере возникает ошибка', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(405)).toEqual('Unknown error');
});
