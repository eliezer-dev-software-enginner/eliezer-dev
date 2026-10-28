(() => {
  const card = document.getElementById('legendas-card');
  const rows = card.querySelector('#legend-rows');
  const colors = { GREEN: 'BR_VERDE', YELLOW: 'BR_AMARELO', RED: 'BR_VERMELHO', BLUE: 'BR_AZUL', GRAY: 'BR_CINZA', ORANGE: 'BR_LARANJA' };
  const quote = value => '"' + value.replaceAll('"', '" + Chr(34) + "').replace(/[\r\n]/g, ' ') + '"';
  function addRow(code = '', color = 'GREEN', label = '') {
    const row = document.createElement('div');
    row.className = 'field-grid';
    for (const [name, value] of [['Código', code], ['Descrição', label]]) {
      const field = document.createElement('label');
      field.textContent = name;
      const input = document.createElement('input');
      input.value = value;
      input.dataset.name = name;
      field.append(input);
      row.append(field);
    }
    const field = document.createElement('label');
    field.textContent = 'Cor';
    const select = document.createElement('select');
    Object.keys(colors).forEach(color => select.add(new Option(color, color)));
    select.value = color;
    field.append(select);
    row.append(field);
    const remove = document.createElement('button');
    remove.type = 'button'; remove.className = 'small-button'; remove.textContent = 'Remover';
    remove.onclick = () => { row.remove(); render(); };
    row.append(remove); rows.append(row);
  }
  function render() {
    const alias = card.querySelector('#legend-alias').value.trim().toUpperCase();
    const field = card.querySelector('#legend-field').value.trim().toUpperCase();
    const fn = card.querySelector('#legend-function').value.trim().toUpperCase();
    const valid = /^[A-Z][A-Z0-9]{2}$/.test(alias) && /^[A-Z][A-Z0-9_]{0,9}$/.test(field) && /^[A-Z][A-Z0-9_]{0,9}$/.test(fn);
    card.querySelector('#legend-error').textContent = valid ? '' : 'Informe alias de 3 caracteres e nomes válidos de campo/função (até 10 caracteres).';
    const entries = [...rows.children].map(row => ({code: row.querySelector('[data-name="Código"]').value, label: row.querySelector('[data-name="Descrição"]').value, color: row.querySelector('select').value}));
    const outputs = {
      'legend-browse': entries.map(e => `oBrowse:AddLegend(${quote(`${field} == '${e.code.replaceAll("'", "' + Chr(39) + '")}'`)}, '${e.color}', ${quote(e.label)})`).join('\n'),
      'legend-menu': `ADD OPTION aRotina TITLE 'Legenda' ACTION 'U_${fn}' OPERATION 2 ACCESS 0`,
      'legend-dialog': `User Function ${fn}()\n    Local aLegenda := { ;\n${entries.map(e => `        { '${colors[e.color]}', ${quote(e.label)} }`).join(', ;\n')}${entries.length ? ' ;' : ''}\n    }\n    BrwLegenda('Cadastro ${alias}', 'Legenda', aLegenda)\nReturn NIL`
    };
    for (const [id, code] of Object.entries(outputs)) card.querySelector('#' + id).textContent = valid && entries.length ? code : '';
  }
  [['1', 'GREEN', 'Disponível'], ['2', 'YELLOW', 'Em uso'], ['3', 'RED', 'Baixado']].forEach(args => addRow(...args));
  card.querySelector('#legend-add').onclick = () => { addRow(); render(); };
  card.addEventListener('input', render);
  card.addEventListener('change', render);
  render();
})();
