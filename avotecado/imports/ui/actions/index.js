export const SELECT_POLITICIAN = 'SELECT_POLITICIAN';

export const selectPolitician = (politician) => {
  console.log('\n', 'selectPolitician @ action: ', politician, '\n');
  return { type: SELECT_POLITICIAN, payload: politician };
};
