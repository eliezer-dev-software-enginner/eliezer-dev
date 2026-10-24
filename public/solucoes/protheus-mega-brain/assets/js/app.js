(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const value = (id) => $(id).value.trim();
  const upper = (id) => value(id).toUpperCase();
  const show = (id, visible) => { $(id).hidden = !visible; };
  const put = (id, text) => { $(id).textContent = text; };
  const state = { init: 'getsxenum', valid: 'existcpo', trigger: 'posicione' };
  let fieldRecords = [];
  let currentFieldId = null;
  let primaryKeyFields = [];
  const utilityState = { init: 'getsxenum', valid: 'positivo' };
  let loadingField = false;
  const tables = {
    SB1: 'B1_DESC', SA1: 'A1_NOME', SA2: 'A2_NOME', SA3: 'A3_NOME',
    SC5: 'C5_CLIENTE', SC6: 'C6_DESCRI', SC7: 'C7_DESCRI',
    SD1: 'D1_DESCRI', SD2: 'D2_DESCRI', SE1: 'E1_NOMCLI',
    SE2: 'E2_NOMFOR', SF1: 'F1_DOC', SF2: 'F2_DOC',
    SRA: 'RA_NOME', CTT: 'CTT_DESC01', SED: 'ED_DESCRIC'
  };
  const tableNames = {
    SB1: 'Tabela de produtos', SA1: 'Tabela de clientes',
    SA2: 'Tabela de fornecedores', SA3: 'Tabela de vendedores',
    SC5: 'Pedidos de venda', SC6: 'Itens do pedido de venda',
    SC7: 'Pedidos de compra', SD1: 'Itens da nota fiscal de entrada',
    SD2: 'Itens da nota fiscal de saída', SE1: 'Contas a receber',
    SE2: 'Contas a pagar', SF1: 'Cabeçalho da nota fiscal de entrada',
    SF2: 'Cabeçalho da nota fiscal de saída', SRA: 'Funcionários',
    CTT: 'Centro de custo', SED: 'Naturezas'
  };
  const tableLabel = (code) => `${code} - ${tableNames[code] || 'Outra tabela'}`;
  const tableCode = (id) => $(id).value === '__custom__' ? upper(`${id}-custom`) : upper(id);
  const tablePrefix = () => upper('table-prefix').replace(/\s+/g, '') || 'ZA1';

  function fullField() {
    const base = upper('base').replace(/\s+/g, '');
    const prefix = tablePrefix();
    return base ? `${prefix}_${base}` : prefix;
  }

  function limitBaseName() {
    const base = $('base');
    const available = Math.max(1, 10 - tablePrefix().length - 1);
    base.maxLength = available;
    base.value = base.value.replace(/\s+/g, '').slice(0, available);
  }

  function editorFieldName() {
    const base = upper('base').replace(/\s+/g, '');
    const prefix = tablePrefix();
    return base ? `${prefix}_${base}` : prefix;
  }

  function readFieldRecord() {
    return {
      id: currentFieldId,
      custom: true,
      prefix: tablePrefix(),
      base: upper('base').replace(/\s+/g, ''),
      hasInit: $('has-init').checked,
      hasValid: $('has-valid').checked,
      title: value('title'),
      type: value('field-type'),
      size: value('size'),
      decimals: value('decimals'),
      init: { template: state.init, table: value('init-table'), field: value('init-field'), userMode: value('init-user-mode'), branchMode: value('init-branch-mode'), branchTable: value('init-branch-table'), fixed: value('init-fixed'), criavarField: value('init-criavar-field'), mvParam: value('init-mv-param'), free: value('init-free') },
      valid: { template: state.valid, table: value('valid-table'), tableCustom: value('valid-table-custom'), field: value('valid-field'), order: value('valid-order'), withField: $('valid-with-field').checked, list: value('valid-list'), free: value('valid-free'), slot: value('valid-slot') },
      relation: { hasTrigger: $('has-trigger').checked, destination: upper('destination'), type: value('trigger-type'), sequence: value('sequence'), seek: value('trigger-seek') },
      trigger: { template: state.trigger, table: value('trigger-table'), tableCustom: value('trigger-table-custom'), order: value('trigger-order'), key: value('trigger-key'), keyMode: value('trigger-key-mode'), returnField: value('trigger-return'), free: value('trigger-free') }
    };
  }

  function syncCurrentField() {
    if (loadingField) return;
    if (!currentFieldId) currentFieldId = `field-${Date.now()}`;
    const record = readFieldRecord();
    record.id = currentFieldId;
    const index = fieldRecords.findIndex((item) => item.id === currentFieldId);
    if (index === -1) fieldRecords.push(record);
    else fieldRecords[index] = record;
  }

  function applyFieldRecord(record) {
    loadingField = true;
    $('base').value = record.base;
    $('has-init').checked = record.hasInit === true;
    $('has-valid').checked = record.hasValid === true;
    $('title').value = record.title;
    $('field-type').value = record.type;
    $('size').value = record.size;
    $('decimals').value = record.decimals;
    Object.assign(state, { init: record.init.template || 'getsxenum', valid: record.valid.template || 'existcpo', trigger: record.trigger.template || 'posicione' });
    $('init-table').value = record.init.table || '';
    $('init-field').value = record.init.field || '';
    $('init-user-mode').value = record.init.userMode || 'cusername';
    $('init-branch-mode').value = record.init.branchMode || 'cfilant';
    $('init-branch-table').value = record.init.branchTable || '';
    $('init-fixed').value = record.init.fixed || '';
    $('init-criavar-field').value = record.init.criavarField || '';
    $('init-mv-param').value = record.init.mvParam || '';
    $('init-free').value = record.init.free || '';
    $('valid-table').value = record.valid.table || '';
    $('valid-table-custom').value = record.valid.tableCustom || '';
    $('valid-field').value = record.valid.field || '';
    $('valid-order').value = record.valid.order || '1';
    $('valid-with-field').checked = record.valid.withField !== false;
    $('valid-list').value = record.valid.list || '123';
    $('valid-free').value = record.valid.free || '';
    $('valid-slot').value = record.valid.slot || 'X3_VALID';
    $('destination').value = record.relation.destination || `${record.prefix || 'Z05'}_DESC`;
    $('has-trigger').checked = record.relation.hasTrigger === true;
    $('trigger-type').value = record.relation.type || 'P';
    $('sequence').value = record.relation.sequence || '001';
    $('trigger-seek').value = record.relation.seek || 'N';
    $('trigger-table').value = record.trigger.table || 'SB1';
    $('trigger-table-custom').value = record.trigger.tableCustom || '';
    $('trigger-order').value = record.trigger.order || '1';
    $('trigger-key').value = record.trigger.key || '';
    $('trigger-key-mode').value = record.trigger.keyMode || 'fwfldget';
    $('trigger-return').value = record.trigger.returnField || 'B1_DESC';
    $('trigger-free').value = record.trigger.free || '';
    loadingField = false;
  }

  function renderFieldList() {
    const list = $('field-list');
    list.replaceChildren();
    for (const [index, record] of fieldRecords.entries()) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'field-list-item';
      button.dataset.fieldId = record.id;
      button.setAttribute('aria-pressed', String(record.id === currentFieldId));
      const name = recordFieldName(record) || `Campo ${index + 1}`;
      const nameElement = document.createElement('strong');
      nameElement.textContent = name;
      const metaElement = document.createElement('small');
      metaElement.textContent = `${record.title || 'Sem título'} · tipo ${record.type || 'C'} · ${record.relation.hasTrigger === false ? 'sem gatilho' : 'com gatilho'}`;
      button.append(nameElement, metaElement);
      list.append(button);
    }
  }

  function recordFieldName(record) {
    const base = (record.base || '').replace(/\s+/g, '').toUpperCase();
    const prefix = tablePrefix();
    return base ? `${prefix}_${base}` : prefix;
  }

  function primaryKeyValue() {
    const fields = [`${tablePrefix()}_FILIAL`, ...primaryKeyFields.filter((field) => field !== `${tablePrefix()}_FILIAL` && fieldRecords.some((record) => recordFieldName(record) === field))];
    return fields.join('+');
  }

  function renderPrimaryKeyChoices() {
    put('mvc-primary-key', primaryKeyValue());
    const container = $('mvc-primary-key-choices');
    container.replaceChildren();
    for (const record of fieldRecords) {
      const name = recordFieldName(record);
      if (!name) continue;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'small-button';
      button.dataset.primaryKeyField = name;
      button.setAttribute('aria-pressed', String(primaryKeyFields.includes(name)));
      button.textContent = name;
      container.append(button);
    }
  }

  function createNewField() {
    syncCurrentField();
    const prefix = tablePrefix();
    const record = {
      id: `field-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      custom: true, prefix, base: 'CAMPO', title: 'Novo campo', type: 'C', size: '15', decimals: '0',
      hasInit: false, hasValid: false,
      init: { template: 'getsxenum', table: '', field: '', userMode: 'cusername', branchMode: 'cfilant', branchTable: '', fixed: '', criavarField: '', mvParam: '', free: '' },
      valid: { template: 'existcpo', table: '', tableCustom: '', field: '', order: '1', withField: true, list: '123', free: '', slot: 'X3_VALID' },
      relation: { hasTrigger: false, destination: `${prefix}_DESC`, type: 'P', sequence: '001', seek: 'N' },
      trigger: { template: 'posicione', table: 'SB1', tableCustom: '', order: '1', key: '', keyMode: 'fwfldget', returnField: 'B1_DESC', free: '' }
    };
    fieldRecords.push(record);
    currentFieldId = record.id;
    applyFieldRecord(record);
    render();
    openFieldModal();
  }

  function initializeFieldModal() {
    const body = $('field-modal-body');
    const settings = $('modal-settings');
    const toggleByHeading = {
      'heading-init': 'has-init-toggle',
      'heading-valid': 'has-valid-toggle',
      'heading-relation': 'has-trigger-toggle'
    };
    for (const headingId of ['heading-name', 'heading-props', 'heading-init', 'heading-valid', 'heading-relation', 'heading-trigger']) {
      const card = document.querySelector(`[aria-labelledby="${headingId}"]`);
      if (card) {
        const toggle = toggleByHeading[headingId] ? document.querySelector(`#${toggleByHeading[headingId]}`) : null;
        if (toggle) body.append(toggle);
        body.append(card);
      }
    }
    settings?.remove();
  }

  function openFieldModal() {
    const modal = $('field-editor-modal');
    put('field-modal-title', `Editar ${editorFieldName() || 'novo campo'}`);
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeFieldModal() {
    syncCurrentField();
    render();
    const modal = $('field-editor-modal');
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
  }

  function initializeSuggestions() {
    for (const [table, field] of Object.entries(tables)) {
      for (const [list, optionValue] of [['tables', table], ['fields', field]]) {
        const option = document.createElement('option');
        option.value = optionValue;
        $(list).append(option);
      }
      for (const selectId of ['valid-table', 'trigger-table']) {
        const option = document.createElement('option');
        option.value = table;
        option.textContent = tableLabel(table);
        $(selectId).append(option);
      }
    }
    for (const selectId of ['valid-table', 'trigger-table']) {
      const option = document.createElement('option');
      option.value = '__custom__';
      option.textContent = 'Outra tabela...';
      $(selectId).append(option);
    }
    $('trigger-table').value = 'SB1';
    for (const suffix of ['DESCRI', 'DESC', 'NOME']) {
      const option = document.createElement('option');
      option.dataset.suffix = suffix;
      $('destinations').append(option);
    }
    for (const table of Object.keys(tables).slice(0, 12)) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'table-button mono';
      button.dataset.table = table;
      button.textContent = table;
      $('frequent-tables').append(button);
    }
  }

  function initializer(field, prefix) {
    const table = upper('init-table') || prefix || 'TABELA';
    const target = upper('init-field') || field || 'CAMPO';
    switch (state.init) {
      case 'getsxenum': return `GetSXENum("${table}", "${target}")`;
      case 'getsx8num': return `GetSX8Num("${table}", "${target}")`;
      case 'data': return 'dDataBase';
      case 'hora': return 'Time()';
      case 'usuario': return value('init-user-mode') === 'retcodusr' ? 'RetCodUsr()' : 'cUserName';
      case 'filial': return value('init-branch-mode') === 'xfilial'
        ? `xFilial("${upper('init-branch-table') || prefix || 'TABELA'}")` : 'cFilAnt';
      case 'fixo': {
        const fixed = value('init-fixed');
        if (!fixed) return '""';
        if (/^-?\d+(?:[.,]\d+)?$/.test(fixed) || /^(['"]).*\1$/.test(fixed)) return fixed;
        return `"${fixed.replace(/"/g, '""')}"`;
      }
      case 'positivo': return 'Positivo()';
      case 'criavar': return `CriaVar("${upper('init-criavar-field') || field || 'CAMPO'}")`;
      case 'getmv': return `GetMv("${upper('init-mv-param') || 'MV_'}")`;
      default: return value('init-free');
    }
  }

  function validation(field, triggerTable) {
    const table = tableCode('valid-table') || triggerTable || 'SB1';
    const target = upper('valid-field') || field || 'CAMPO';
    switch (state.valid) {
      case 'existcpo': return $('valid-with-field').checked
        ? `ExistCpo("${table}", M->${target}, ${value('valid-order') || '1'})`
        : `ExistCpo("${table}")`;
      case 'existchav': return `ExistChav("${table}", M->${target})`;
      case 'pertence': return `Pertence("${value('valid-list') || '123'}")`;
      case 'naovazio': return 'NaoVazio()';
      case 'positivo': return 'Positivo()';
      default: return value('valid-free');
    }
  }

  function utilityField() {
    return upper('utility-field').replace(/\s+/g, '') || 'CAMPO';
  }

  function utilityTable() {
    return upper('utility-table').replace(/\s+/g, '') || tablePrefix();
  }

  function utilityParameter(fallback = '') {
    return value('utility-parameter') || fallback;
  }

  function utilityFixedValue() {
    const parameter = utilityParameter('');
    if (!parameter) return '""';
    if (/^-?\d+(?:[.,]\d+)?$/.test(parameter) || /^(['"]).*\1$/.test(parameter)) return parameter;
    return `"${parameter.replace(/"/g, '""')}"`;
  }

  function utilityInitializer() {
    const table = utilityTable();
    const field = utilityField();
    switch (utilityState.init) {
      case 'getsx8num': return `GetSX8Num("${table}", "${field}")`;
      case 'data': return 'dDataBase';
      case 'dtos': return 'DToS(dDataBase)';
      case 'hora': return 'Time()';
      case 'usuario': return 'cUserName';
      case 'retcodusr': return 'RetCodUsr()';
      case 'filial': return 'cFilAnt';
      case 'xfilial': return `xFilial("${table}")`;
      case 'getmv': return `GetMv("${utilityParameter('MV_')}")`;
      case 'criavar': return `CriaVar("${field}")`;
      case 'zero': return '0';
      case 'blank': return '""';
      case 'true': return '.T.';
      case 'false': return '.F.';
      case 'fixed': return utilityFixedValue();
      case 'positivo': return 'Positivo()';
      default: return `GetSXENum("${table}", "${field}")`;
    }
  }

  function utilityValidation() {
    const table = utilityTable();
    const field = utilityField();
    switch (utilityState.valid) {
      case 'naovazio': return 'NaoVazio()';
      case 'existcpo': return `ExistCpo("${table}", M->${field}, 1)`;
      case 'existchav': return `ExistChav("${table}", M->${field})`;
      case 'pertence': return `Pertence("${utilityParameter('123')}")`;
      case 'optional-existcpo': return `Empty(M->${field}) .Or. ExistCpo("${table}", M->${field}, 1)`;
      case 'empty': return `Empty(M->${field})`;
      case 'notempty': return `!Empty(M->${field})`;
      case 'nonnegative': return `M->${field} >= 0`;
      case 'max-length': return `Len(AllTrim(M->${field})) <= ${utilityParameter('10')}`;
      case 'uppercase': return `M->${field} == Upper(M->${field})`;
      case 'lowercase': return `M->${field} == Lower(M->${field})`;
      case 'equals': return `M->${field} == ${utilityFixedValue()}`;
      case 'different': return `M->${field} <> ${utilityFixedValue()}`;
      default: return 'Positivo()';
    }
  }

  function renderUtilities() {
    const initDescriptions = {
      getsxenum: 'Gera numeração sequencial pela tabela SXE para o campo informado.',
      getsx8num: 'Gera numeração sequencial alternativa pela tabela SX8.',
      data: 'Preenche o campo com a data base atual do sistema.',
      dtos: 'Converte a data base atual para texto no formato AAAAMMDD.',
      hora: 'Preenche o campo com a hora atual do sistema.',
      usuario: 'Preenche o campo com o usuário conectado na sessão.',
      retcodusr: 'Obtém o código do usuário conectado na sessão.',
      filial: 'Preenche o campo com a filial atualmente em uso.',
      xfilial: 'Obtém a filial da tabela/alias informado.',
      getmv: 'Lê o conteúdo de um parâmetro do dicionário SX6.',
      criavar: 'Usa o valor padrão do campo informado no dicionário.',
      zero: 'Inicializa o campo numérico com zero.',
      blank: 'Inicializa o campo de caracteres vazio.',
      true: 'Inicializa o campo lógico como verdadeiro.',
      false: 'Inicializa o campo lógico como falso.',
      fixed: 'Inicializa com o valor informado em Parâmetro / valor.',
      positivo: 'Retorna um valor numérico positivo para usar como valor inicial.'
    };
    const validDescriptions = {
      positivo: 'Garante que o valor numérico informado seja sempre positivo.',
      naovazio: 'Exige que o campo seja preenchido antes de gravar.',
      existcpo: 'Verifica se o conteúdo existe no campo e índice da tabela informada.',
      existchav: 'Verifica a existência da chave informada na tabela.',
      pertence: 'Aceita somente caracteres presentes na lista informada.',
      'optional-existcpo': 'Permite valor vazio; caso preenchido, exige que ele exista na tabela.',
      empty: 'Aceita apenas valor vazio no campo informado.',
      notempty: 'Exige que o campo informado tenha conteúdo.',
      nonnegative: 'Garante que o valor numérico seja maior ou igual a zero.',
      'max-length': 'Limita o conteúdo ao tamanho informado em Parâmetro / valor.',
      uppercase: 'Garante que o conteúdo esteja somente em letras maiúsculas.',
      lowercase: 'Garante que o conteúdo esteja somente em letras minúsculas.',
      equals: 'Exige que o conteúdo seja igual ao valor informado.',
      different: 'Exige que o conteúdo seja diferente do valor informado.'
    };
    put('utility-init-preview', utilityInitializer());
    put('utility-valid-preview', utilityValidation());
    put('utility-init-description', initDescriptions[utilityState.init]);
    put('utility-valid-description', validDescriptions[utilityState.valid]);
    for (const button of document.querySelectorAll('[data-utility-init]')) {
      button.setAttribute('aria-pressed', String(button.dataset.utilityInit === utilityState.init));
    }
    for (const button of document.querySelectorAll('[data-utility-valid]')) {
      button.setAttribute('aria-pressed', String(button.dataset.utilityValid === utilityState.valid));
    }
  }

  function trigger(field) {
    if (state.trigger === 'livre') return value('trigger-free');
    const table = tableCode('trigger-table') || 'SB1';
    const key = upper('trigger-key') || field || 'CAMPO';
    const keyExpression = value('trigger-key-mode') === 'mvar' ? `M->${key}` : `FwFldGet("${key}")`;
    return `Posicione("${table}", ${value('trigger-order') || '1'}, xFilial("${table}") + ${keyExpression}, "${upper('trigger-return') || 'B1_DESC'}")`;
  }

  function mvcFields() {
    syncCurrentField();
    return fieldRecords.map((record) => ({ nome: recordFieldName(record), tipo: record.type || 'C' })).filter((field) => /^[A-Z][A-Z0-9_]+$/.test(field.nome));
  }

  function mvcConfig() {
    const alias = upper('table-prefix').replace(/\s+/g, '') || 'ZA1';
    const functionName = upper('mvc-function').replace(/\s+/g, '') || `${alias}MVC`;
    const title = value('mvc-title') || `Cadastro ${alias}`;
    put('mvc-alias-preview', alias);
    const fields = mvcFields();
    const primaryKey = primaryKeyValue().split('+').filter(Boolean);
    const registros = {};
    for (const field of fields) registros[field.nome] = field.tipo === 'N' ? 0 : '';
    return { alias, functionName, title, fields, primaryKey, registros };
  }

  function mvcJson(config) {
    return JSON.stringify({
      parametros: [],
      tabelas: [{ [config.alias]: { campos: config.fields, registros: [] } }],
      funcoes: [],
      ambiente: [],
      dialogos: [],
      especificidadesPrw: [],
      consultas: [],
      cenariosMvc: []
    }, null, 2);
  }

  function mvcPrw(config) {
    const key = config.primaryKey.length ? config.primaryKey : [`${config.alias}_FILIAL`, `${config.alias}_COD`];
    const keyCode = key.map((field) => `"${field}"`).join(', ');
    return `#Include "TOTVS.CH"\n#Include "FWMVCDef.ch"\n\nUser Function ${config.functionName}()\n    Local oBrowse := FWMBrowse():New()\n\n    oBrowse:SetAlias( '${config.alias}' )\n    oBrowse:SetDescription( GetTitle() )\n    oBrowse:Activate()\n\nReturn\n\nStatic Function MenuDef()\n    Local aRotina := {}\n\n    ADD OPTION aRotina TITLE 'Visualizar' ACTION 'VIEWDEF.${config.functionName}' OPERATION 2 ACCESS 0\n    ADD OPTION aRotina TITLE 'Incluir'    ACTION 'VIEWDEF.${config.functionName}' OPERATION 3 ACCESS 0\n    ADD OPTION aRotina TITLE 'Alterar'    ACTION 'VIEWDEF.${config.functionName}' OPERATION 4 ACCESS 0\n    ADD OPTION aRotina TITLE 'Excluir'    ACTION 'VIEWDEF.${config.functionName}' OPERATION 5 ACCESS 0\nReturn aRotina\n\nStatic Function ModelDef()\n    Local oModel  := Nil\n    Local oStruct := FWFormStruct(1, "${config.alias}")\n\n    oModel := MPFormModel():New( 'MODEL_${config.alias}', , { | oModel | fVldSalvar( oModel ) } )\n    oModel:AddFields( '${config.alias}MASTER', /*cOwner*/, oStruct )\n    oModel:SetPrimaryKey({ ${keyCode} })\n    oModel:SetDescription( GetTitle() )\n\nReturn oModel\n\nStatic Function ViewDef()\n    Local oModel  := FWLoadModel("${config.functionName}")\n    Local oStruct := FWFormStruct(2, "${config.alias}")\n    Local oView   := Nil\n\n    oView := FWFormView():New()\n    oView:SetModel( oModel )\n    oView:AddField( 'VIEW_${config.alias}', oStruct, '${config.alias}MASTER' )\n    oView:CreateHorizontalBox( 'BOX_${config.alias}', 100 )\n    oView:SetOwnerView( 'VIEW_${config.alias}', 'BOX_${config.alias}' )\nReturn oView\n\nStatic Function GetTitle()\nReturn "${config.title.replace(/"/g, '""')}"\n\nStatic Function fVldSalvar( oModel )\n    Local aErros := {}\n\n    //TODO: FAZER AS VALIDACOES\n\nReturn( Len( aErros ) == 0 )\n`;
  }

  function renderMvc() {
    const config = mvcConfig();
    put('mvc-json-preview', mvcJson(config));
    put('mvc-prw-preview', mvcPrw(config).replace('//TODO: FAZER AS VALIDACOES', '//TODO: FAZER AS VALIDAÇÕES'));
  }

  function updateChoiceFields() {
    const hasTrigger = $('has-trigger').checked;
    const hasInit = $('has-init').checked;
    const hasValid = $('has-valid').checked;
    const initCard = document.querySelector('[aria-labelledby="heading-init"]');
    const validCard = document.querySelector('[aria-labelledby="heading-valid"]');
    const relationCard = document.querySelector('[aria-labelledby="heading-relation"]');
    if (initCard) initCard.hidden = !hasInit;
    if (validCard) validCard.hidden = !hasValid;
    if (relationCard) relationCard.hidden = !hasTrigger;
    $('frequent-tables-card').hidden = !hasTrigger;
    const number = ['getsxenum', 'getsx8num'].includes(state.init);
    show('init-number-fields', number);
    show('init-user-fields', state.init === 'usuario');
    show('init-branch-fields', state.init === 'filial');
    show('init-fixed-fields', state.init === 'fixo');
    show('init-criavar-fields', state.init === 'criavar');
    show('init-mv-fields', state.init === 'getmv');
    show('init-free-fields', state.init === 'livre');
    show('valid-lookup-fields', ['existcpo', 'existchav'].includes(state.valid));
    show('valid-table-custom', value('valid-table') === '__custom__');
    show('valid-order-field', state.valid === 'existcpo' && $('valid-with-field').checked);
    show('valid-with-row', state.valid === 'existcpo');
    show('valid-list-fields', state.valid === 'pertence');
    show('valid-free-fields', state.valid === 'livre');
    show('trigger-lookup-fields', hasTrigger && state.trigger === 'posicione');
    show('trigger-table-custom', value('trigger-table') === '__custom__');
    show('trigger-free-fields', hasTrigger && state.trigger === 'livre');
    const triggerCard = document.querySelector('[aria-labelledby="heading-trigger"]');
    if (triggerCard) triggerCard.hidden = !hasTrigger;
    $('trigger-summary-card').hidden = !hasTrigger;
    for (const group of document.querySelectorAll('[data-choice-group]')) {
      const selected = group.querySelector(`[data-choice="${state[group.dataset.choiceGroup]}"]`);
      for (const button of group.querySelectorAll('[data-choice]')) {
        button.setAttribute('aria-pressed', String(button === selected));
      }
      const hint = selected?.querySelector('small')?.textContent || '';
      if (group.dataset.choiceGroup === 'init') put('init-hint', hint);
      if (group.dataset.choiceGroup === 'valid') put('valid-hint', hint);
      if (group.dataset.choiceGroup === 'trigger') put('trigger-hint', hint);
    }
  }

  function renderDestinationSuggestions(prefix) {
    const names = ['DESCRI', 'DESC', 'NOME'].map((suffix) => `${prefix || 'Z05'}_${suffix}`);
    for (const [index, option] of [...$('destinations').options].entries()) option.value = names[index];
    const container = $('destination-suggestions');
    container.replaceChildren();
    for (const name of names) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'suggestion mono';
      button.dataset.destination = name;
      button.textContent = name;
      button.setAttribute('aria-pressed', String(name === upper('destination')));
      container.append(button);
    }
  }

  function render() {
    syncCurrentField();
    limitBaseName();
    const prefix = tablePrefix();
    const field = fullField();
    const destination = upper('destination');
    const triggerTable = tableCode('trigger-table') || 'SB1';
    const init = initializer(field, prefix);
    const valid = validation(field, triggerTable);
    const rule = trigger(field);
    const type = value('field-type');
    const size = ['C', 'N'].includes(type) ? value('size') || '0' : '-';
    const decimals = type === 'N' ? value('decimals') || '0' : '0';
    const slot = value('valid-slot');
    const title = value('title');

    $('size').disabled = !['C', 'N'].includes(type);
    $('decimals').disabled = type !== 'N';
    put('full-name', field || '—');
    put('name-count', `${field.length}/10 — ${Math.max(0, 10 - field.length)} restantes`);
    $('name-count').classList.toggle('invalid', field.length > 10);
    put('domain-name', field || '—');
    put('destination-name', destination || '—');
    put('destination-count', `${destination.length}/10`);
    $('destination-count').classList.toggle('invalid', destination.length > 10);
    put('init-table-fallback', prefix || 'TABELA');
    put('init-field-fallback', field || 'CAMPO');
    put('valid-table-fallback', triggerTable);
    $('valid-table').options[0].textContent = `Mesma tabela do gatilho (${tableLabel(triggerTable)})`;
    renderDestinationSuggestions(prefix);
    updateChoiceFields();

    put('init-preview', init || '—');
    put('valid-preview', valid || '—');
    put('trigger-preview', rule || '—');
    put('destination-preview', destination || '—');
    put('init-summary', init || '—');
    put('valid-summary', valid || '—');
    put('destination-summary', destination || '—');
    put('valid-preview-label', `Validação (${slot})`);
    put('valid-summary-label', `Validação (${slot}) — copiar`);
    put('sx3-summary', [
      `X3_CAMPO   : ${field || '-'}`,
      `X3_ARQUIVO : ${prefix || '-'}`,
      `X3_TITULO  : ${title}`,
      `X3_TIPO    : ${type}`,
      `X3_TAMANHO : ${size}`,
      `X3_DECIMAL : ${decimals}`,
      `X3_RELACAO : ${init || '-'}`,
      `X3_VALID   : ${slot === 'X3_VALID' ? valid || '-' : '-'}`,
      `X3_VLDUSER : ${slot === 'X3_VLDUSER' ? valid || '-' : '-'}`
    ].join('\n'));
    put('sx7-summary', [
      `X7_CAMPO   : ${field || '-'}`,
      `X7_TIPO    : ${value('trigger-type')}`,
      `X7_SEQUENC : ${value('sequence') || '001'}`,
      `X7_CDOMIN  : ${destination || '-'}`,
      `X7_REGRA   : ${rule || '-'}`,
      `X7_SEEK    : ${value('trigger-seek')}`
    ].join('\n'));
    put('advpl-summary', `aAdd(aCampos, {"${prefix || 'SX3'}", "${field}", "${type}", ${size === '-' ? 0 : size}, ${decimals}, "${title.replace(/"/g, '""')}", "${rule.replace(/"/g, '""')}"})`);
    renderFieldList();
    renderPrimaryKeyChoices();
    if (!$('field-editor-modal').hidden) put('field-modal-title', `Editar ${field || 'novo campo'}`);
    renderMvc();
    renderUtilities();
    saveProject();
    for (const button of document.querySelectorAll('[data-table]')) {
      button.setAttribute('aria-pressed', String(button.dataset.table === triggerTable));
    }
  }

  let toastTimer;
  function toast(message) {
    const element = $('toast');
    element.textContent = message;
    element.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { element.hidden = true; }, 2600);
  }

  async function copyFrom(id) {
    const content = $(id)?.textContent || '';
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(content);
      else {
        const helper = document.createElement('textarea');
        helper.value = content;
        document.body.append(helper);
        helper.select();
        if (!document.execCommand('copy')) throw new Error('Cópia indisponível');
        helper.remove();
      }
      toast('Copiado para a área de transferência.');
    } catch {
      toast('Não foi possível copiar. Selecione o texto manualmente.');
    }
  }

  const PROJECT_STORAGE_KEY = 'protheus-mega-brain-project';

  function saveProject() {
    try {
      syncCurrentField();
      localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify({
        tablePrefix: $('table-prefix').value,
        currentFieldId,
        fieldRecords,
        mvc: {
          modelType: $('mvc-model-type').value,
          functionName: $('mvc-function').value,
          title: $('mvc-title').value,
          primaryKeyFields
        },
        utilities: {
          field: $('utility-field').value,
          table: $('utility-table').value,
          parameter: $('utility-parameter').value,
          init: utilityState.init,
          valid: utilityState.valid
        }
      }));
    } catch { /* storage unavailable or quota exceeded */ }
  }

  function loadProject() {
    try {
      const saved = JSON.parse(localStorage.getItem(PROJECT_STORAGE_KEY) || 'null');
      if (!saved || !Array.isArray(saved.fieldRecords) || !saved.fieldRecords.length) return false;
      $('table-prefix').value = saved.tablePrefix || 'ZA1';
      fieldRecords = saved.fieldRecords;
      currentFieldId = saved.currentFieldId || fieldRecords[0].id;
      const record = fieldRecords.find((item) => item.id === currentFieldId) || fieldRecords[0];
      currentFieldId = record.id;
      if (saved.mvc) {
        $('mvc-model-type').value = saved.mvc.modelType || 'tipo1';
        $('mvc-function').value = saved.mvc.functionName || `${$('table-prefix').value}MVC`;
        $('mvc-title').value = saved.mvc.title || '';
        primaryKeyFields = Array.isArray(saved.mvc.primaryKeyFields) ? saved.mvc.primaryKeyFields : [];
      }
      if (saved.utilities) {
        $('utility-field').value = saved.utilities.field || '';
        $('utility-table').value = saved.utilities.table || '';
        $('utility-parameter').value = saved.utilities.parameter || '';
        utilityState.init = saved.utilities.init || 'getsxenum';
        utilityState.valid = saved.utilities.valid || 'positivo';
      }
      applyFieldRecord(record);
      return true;
    } catch { return false; }
  }

  function downloadGenerated(kind) {
    const config = mvcConfig();
    const isJson = kind === 'json';
    const content = isJson ? mvcJson(config) : mvcPrw(config).replace('//TODO: FAZER AS VALIDACOES', '//TODO: FAZER AS VALIDAÇÕES');
    const extension = isJson ? 'jsonc' : 'prw';
    const blob = new Blob([content], { type: isJson ? 'application/json;charset=utf-8' : 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = isJson ? 'advpl-testlab.jsonc' : `${config.functionName}.${extension}`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    toast(`Arquivo ${link.download} gerado.`);
  }

  document.addEventListener('click', (event) => {
    const utilityInit = event.target.closest('[data-utility-init]');
    if (utilityInit) {
      utilityState.init = utilityInit.dataset.utilityInit;
      render();
      return;
    }
    const utilityValid = event.target.closest('[data-utility-valid]');
    if (utilityValid) {
      utilityState.valid = utilityValid.dataset.utilityValid;
      render();
      return;
    }
    const primaryKeyButton = event.target.closest('[data-primary-key-field]');
    if (primaryKeyButton) {
      const field = primaryKeyButton.dataset.primaryKeyField;
      primaryKeyFields = primaryKeyFields.includes(field) ? primaryKeyFields.filter((item) => item !== field) : [...primaryKeyFields, field];
      render();
      return;
    }
    if (event.target.closest('#new-field')) { createNewField(); return; }
    if (event.target.closest('[data-close-field-modal]')) { closeFieldModal(); return; }
    const fieldButton = event.target.closest('[data-field-id]');
    if (fieldButton) {
      syncCurrentField();
      const record = fieldRecords.find((item) => item.id === fieldButton.dataset.fieldId);
      if (record) {
        currentFieldId = record.id;
        applyFieldRecord(record);
        render();
        openFieldModal();
      }
      return;
    }
    const choice = event.target.closest('[data-choice]');
    if (choice) {
      state[choice.closest('[data-choice-group]').dataset.choiceGroup] = choice.dataset.choice;
      render();
      return;
    }
    const suggestion = event.target.closest('[data-destination]');
    if (suggestion) {
      $('destination').value = suggestion.dataset.destination;
      render();
      return;
    }
    const table = event.target.closest('[data-table]');
    if (table) {
      $('trigger-table').value = table.dataset.table;
      $('trigger-return').value = tables[table.dataset.table];
      render();
      return;
    }
    const copyButton = event.target.closest('[data-copy]');
    if (copyButton) { copyFrom(copyButton.dataset.copy); return; }
    const downloadButton = event.target.closest('[data-download]');
    if (downloadButton) { downloadGenerated(downloadButton.dataset.download); return; }
    if (event.target.closest('#theme-toggle')) {
      const dark = document.documentElement.dataset.theme !== 'dark';
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      $('theme-toggle').textContent = dark ? '☀' : '☾';
      try { localStorage.setItem('sx3-theme', dark ? 'dark' : 'light'); } catch { /* storage unavailable */ }
    }
  });

  document.addEventListener('input', (event) => {
    if (event.target.id === 'table-prefix') {
      const prefix = event.target.value.trim().toUpperCase().replace(/\s+/g, '');
      const previousPrefix = event.target.dataset.previousPrefix || 'ZA1';
      const functionInput = $('mvc-function');
      const currentFunction = functionInput.value.trim().toUpperCase().replace(/\s+/g, '');
      if (!currentFunction || currentFunction === `${previousPrefix}MVC`) functionInput.value = `${prefix}MVC`;
      event.target.dataset.previousPrefix = prefix;
    }
    if (event.target.matches('input, select, textarea')) render();
  });
  document.addEventListener('change', (event) => {
    if (event.target.id === 'trigger-table' && tables[event.target.value]) {
      $('trigger-return').value = tables[event.target.value];
    }
    if (event.target.matches('input, select, textarea')) render();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !$('field-editor-modal').hidden) closeFieldModal();
  });

  try {
    if (localStorage.getItem('sx3-theme') === 'dark') {
      document.documentElement.dataset.theme = 'dark';
      $('theme-toggle').textContent = '☀';
    }
  } catch { /* storage unavailable */ }
  initializeFieldModal();
  initializeSuggestions();
  if (!loadProject()) currentFieldId = `field-${Date.now()}`;
  render();
})();
