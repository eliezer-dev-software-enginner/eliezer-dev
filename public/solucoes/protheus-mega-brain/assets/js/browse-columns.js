(() => {
  const rows = document.getElementById('browse-column-rows');
  const quote = text => '"' + String(text).replaceAll('"', '" + Chr(34) + "').replace(/[\r\n]/g, ' ') + '"';
  function add(column = {}) {
    const row = document.createElement('div');
    row.className = 'card-body stack';
    for (const [key, label, value] of [
      ['title', 'Título da coluna', column.title || ''],
      ['field', 'Campo de origem (ex.: Z04_USER)', column.field || ''],
      ['expression', 'Expressão ADVPL (somente no modo personalizado)', column.expression || '']
    ]) {
      const wrapper = document.createElement('label');
      wrapper.textContent = label;
      const input = document.createElement('input');
      input.dataset.columnKey = key;
      input.value = value;
      wrapper.append(input);
      row.append(wrapper);
    }
    const label = document.createElement('label');
    label.textContent = 'Conteúdo exibido';
    const mode = document.createElement('select');
    mode.dataset.columnKey = 'mode';
    mode.add(new Option('Valor do campo', 'field'));
    mode.add(new Option('Nome do usuário — FwGetUserName (código de usuário)', 'user'));
    mode.add(new Option('Descrição de produto — Posicione (SB1)', 'product'));
    mode.add(new Option('Expressão personalizada (retorno caractere)', 'expression'));
    mode.value = column.mode || 'field';
    label.append(mode);
    row.append(label);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'small-button';
    remove.textContent = 'Remover coluna';
    remove.onclick = () => { row.remove(); changed(); };
    row.append(remove);
    rows.append(row);
  }
  function read() {
    return [...rows.children].map(row => Object.fromEntries(
      [...row.querySelectorAll('[data-column-key]')].map(input => [input.dataset.columnKey, input.value.trim()])));
  }
  function build(alias, columns = read()) {
    if (!columns.length) return {code: '', error: ''};
    if (!/^[A-Z][A-Z0-9]{2}$/.test(alias)) return {code: '', error: 'Informe um alias de três caracteres.'};
    const definitions = [];
    for (const [index, column] of columns.entries()) {
      const field = column.field.toUpperCase();
      if (!column.title || (column.mode !== 'expression' && !/^[A-Z][A-Z0-9_]{0,9}$/.test(field)) ||
          (column.mode === 'expression' && (!column.expression || /[\r\n]/.test(column.expression)))) {
        return {code: '', error: `Complete o título e o campo ou expressão da coluna ${index + 1}.`};
      }
      const expression = column.mode === 'user' ? `FwGetUserName(${alias}->${field})`
        : column.mode === 'field' ? `cValToChar(${alias}->${field})`
          : column.mode === 'product' ? `Posicione("SB1", 1, xFilial("SB1") + ${alias}->${field}, "B1_DESC")`
            : column.expression;
      definitions.push(`    { ${quote(column.title)}, {|| ${expression}}, 'C', '@!', 1, 60, 0 }`);
    }
    return {code: `oBrowse:SetFields({ ;\n${definitions.join(', ;\n')} ;\n})`, error: ''};
  }
  function changed() { document.dispatchEvent(new Event('browse-columns-change')); }
  document.getElementById('browse-column-add').onclick = () => { add(); changed(); };
  window.ProtheusBrowseColumns = {
    read, build,
    getAlias() { return document.getElementById('utility-table').value.trim().toUpperCase(); },
    setAlias(alias) { document.getElementById('utility-table').value = alias; },
    set(columns) { rows.replaceChildren(); columns.forEach(add); }
  };
})();
