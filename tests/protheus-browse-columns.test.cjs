const {test} = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const context = {window: {}, document: {getElementById: () => ({})}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../public/solucoes/protheus-mega-brain/assets/js/browse-columns.js'), 'utf8'), context);
const build = context.window.ProtheusBrowseColumns.build;
const column = {title: 'Solicitante', field: 'Z04_USER', mode: 'user', expression: ''};

test('gera nome de usuario e colunas multiplas no mesmo SetFields', () => {
  const result = build('Z04', [column, {...column, title: 'Aprovador', field: 'Z04_APROVA'}]);
  assert.equal(result.error, '');
  assert.match(result.code, /FwGetUserName\(Z04->Z04_USER\)/);
  assert.match(result.code, /FwGetUserName\(Z04->Z04_APROVA\)/);
  assert.equal(result.code.split('SetFields').length, 2);
});
test('sem colunas mantem fonte original e entradas incompletas nao geram trecho parcial', () => {
  assert.equal(build('Z04', []).code, '');
  for (const columns of [[{...column, title: ''}], [column, {...column, field: ''}]]) {
    const result = build('Z04', columns);
    assert.notEqual(result.error, '');
    assert.equal(result.code, '');
  }
  assert.notEqual(build('INVALIDO', [column]).error, '');
});
test('suporta campo direto, expressao e aspas no titulo', () => {
  assert.match(build('Z04', [{...column, mode: 'field'}]).code, /cValToChar\(Z04->Z04_USER\)/);
  const custom = build('Z04', [{...column, title: 'Nome "completo"', mode: 'expression', expression: 'Upper(Z04->Z04_USER)'}]);
  assert.equal(custom.error, '');
  assert.match(custom.code, /Upper\(Z04->Z04_USER\)/);
  assert.match(custom.code, /Chr\(34\)/);
});

test('produto consulta SB1 com Posicione e alias informado, sem resolver usuario', () => {
  const result = build('ZA4', [{title: 'Produto', field: 'ZA4_PROD', mode: 'product', expression: ''}]);
  assert.equal(result.error, '');
  assert.ok(result.code.includes('Posicione("SB1", 1, xFilial("SB1") + ZA4->ZA4_PROD, "B1_DESC")'));
  assert.ok(!result.code.includes('FwGetUserName'));
  assert.ok(!result.code.includes('ZA1->'));
});

test('alias do utilitario vem do campo Alias do painel direito', () => {
  const field = {value: ' za4 '};
  context.document.getElementById = id => {
    assert.equal(id, 'legend-alias');
    return field;
  };
  assert.equal(context.window.ProtheusBrowseColumns.getAlias(), 'ZA4');
  context.window.ProtheusBrowseColumns.setAlias('Z04');
  assert.equal(field.value, 'Z04');
});
