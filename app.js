// ── Translations (UI i18n) ───────────────────────────────────────────────────

const I18N = {
  fr: {
    _label: 'Français',
    title: 'Traduction Gemini Nano',
    app_title: 'Traduction Gemini Nano',
    app_subtitle: 'Traduction locale dans Chrome — aucune donnée envoyée sur le réseau',
    ui_lang_label: 'Interface :',
    from_label: 'De',
    to_label: 'Vers',
    auto_detect: 'Détection auto',
    source_panel: 'Texte source',
    target_panel: 'Traduction',
    source_placeholder: 'Entrez le texte à traduire…',
    target_placeholder: 'La traduction apparaîtra ici…',
    translate_btn: 'Traduire',
    copy_btn: 'Copier',
    copied_btn: 'Copié !',
    footer_text: "Utilise le Prompt API de Chrome (Gemini Nano) · Fonctionne hors-ligne",
    chars: n => `${n} caractère${n !== 1 ? 's' : ''}`,
    detected: lang => `détecté : ${lang}`,
    status_ok: '✓ Gemini Nano disponible — traduction 100 % locale.',
    status_downloading: "⏳ Le modèle Gemini Nano n'est pas encore téléchargé.",
    status_unavailable: "⚠️ Gemini Nano non disponible. Activez <code>#prompt-api-for-gemini-nano</code> dans <code>chrome://flags</code>, redémarrez Chrome, puis vérifiez <code>chrome://components</code>.",
    status_error: msg => `Erreur : ${msg}`,
    download_btn: '⬇ Télécharger le modèle Gemini Nano',
    download_btn_loading: 'Téléchargement en cours…',
    download_btn_done: '✓ Modèle prêt — vous pouvez traduire !',
    download_btn_error: msg => `Échec : ${msg} — réessayez ou vérifiez chrome://components`,
    register_label: 'Niveau',
    register_neutral: 'Neutre',
    register_formal: 'Formel',
    register_informal: 'Familier',
    register_technical: 'Technique',
    alt_btn: 'Alternatives',
    alt_section_title: 'Alternatives de traduction',
    word_alt_title: 'Alternatives',
    word_alt_loading: 'Chargement…',
    use_alt_btn: 'Utiliser',
  },
  en: {
    _label: 'English',
    title: 'Gemini Nano Translation',
    app_title: 'Gemini Nano Translation',
    app_subtitle: 'Local translation in Chrome — no data sent over the network',
    ui_lang_label: 'Interface:',
    from_label: 'From',
    to_label: 'To',
    auto_detect: 'Auto-detect',
    source_panel: 'Source text',
    target_panel: 'Translation',
    source_placeholder: 'Enter text to translate…',
    target_placeholder: 'Translation will appear here…',
    translate_btn: 'Translate',
    copy_btn: 'Copy',
    copied_btn: 'Copied!',
    footer_text: "Uses Chrome's built-in Prompt API (Gemini Nano) · Works offline",
    chars: n => `${n} character${n !== 1 ? 's' : ''}`,
    detected: lang => `detected: ${lang}`,
    status_ok: '✓ Gemini Nano available — 100% local translation.',
    status_downloading: '⏳ Gemini Nano model is not yet downloaded.',
    status_unavailable: '⚠️ Gemini Nano not available. Enable <code>#prompt-api-for-gemini-nano</code> in <code>chrome://flags</code>, restart Chrome, then check <code>chrome://components</code>.',
    status_error: msg => `Error: ${msg}`,
    download_btn: '⬇ Download Gemini Nano model',
    download_btn_loading: 'Downloading…',
    download_btn_done: '✓ Model ready — you can now translate!',
    download_btn_error: msg => `Failed: ${msg} — retry or check chrome://components`,
    register_label: 'Register',
    register_neutral: 'Neutral',
    register_formal: 'Formal',
    register_informal: 'Informal',
    register_technical: 'Technical',
    alt_btn: 'Alternatives',
    alt_section_title: 'Translation alternatives',
    word_alt_title: 'Alternatives',
    word_alt_loading: 'Loading…',
    use_alt_btn: 'Use',
  },
  es: {
    _label: 'Español',
    title: 'Traducción Gemini Nano',
    app_title: 'Traducción Gemini Nano',
    app_subtitle: 'Traducción local en Chrome — ningún dato enviado por la red',
    ui_lang_label: 'Interfaz:',
    from_label: 'De',
    to_label: 'A',
    auto_detect: 'Detección auto',
    source_panel: 'Texto fuente',
    target_panel: 'Traducción',
    source_placeholder: 'Ingrese el texto a traducir…',
    target_placeholder: 'La traducción aparecerá aquí…',
    translate_btn: 'Traducir',
    copy_btn: 'Copiar',
    copied_btn: '¡Copiado!',
    footer_text: 'Usa el Prompt API de Chrome (Gemini Nano) · Funciona sin conexión',
    chars: n => `${n} carácter${n !== 1 ? 'es' : ''}`,
    detected: lang => `detectado: ${lang}`,
    status_ok: '✓ Gemini Nano disponible — traducción 100 % local.',
    status_downloading: '⏳ El modelo Gemini Nano aún no está descargado.',
    status_unavailable: '⚠️ Gemini Nano no disponible. Active <code>#prompt-api-for-gemini-nano</code> en <code>chrome://flags</code>, reinicie Chrome y verifique <code>chrome://components</code>.',
    status_error: msg => `Error: ${msg}`,
    download_btn: '⬇ Descargar modelo Gemini Nano',
    download_btn_loading: 'Descargando…',
    download_btn_done: '✓ Modelo listo — ¡ya puede traducir!',
    download_btn_error: msg => `Error: ${msg} — reintente o revise chrome://components`,
    register_label: 'Registro',
    register_neutral: 'Neutro',
    register_formal: 'Formal',
    register_informal: 'Informal',
    register_technical: 'Técnico',
    alt_btn: 'Alternativas',
    alt_section_title: 'Alternativas de traducción',
    word_alt_title: 'Alternativas',
    word_alt_loading: 'Cargando…',
    use_alt_btn: 'Usar',
  },
  de: {
    _label: 'Deutsch',
    title: 'Übersetzung mit Gemini Nano',
    app_title: 'Übersetzung mit Gemini Nano',
    app_subtitle: 'Lokale Übersetzung in Chrome — keine Daten werden übertragen',
    ui_lang_label: 'Oberfläche:',
    from_label: 'Von',
    to_label: 'Nach',
    auto_detect: 'Automatisch',
    source_panel: 'Quelltext',
    target_panel: 'Übersetzung',
    source_placeholder: 'Text zum Übersetzen eingeben…',
    target_placeholder: 'Die Übersetzung erscheint hier…',
    translate_btn: 'Übersetzen',
    copy_btn: 'Kopieren',
    copied_btn: 'Kopiert!',
    footer_text: 'Nutzt Chromes Prompt API (Gemini Nano) · Funktioniert offline',
    chars: n => `${n} Zeichen`,
    detected: lang => `erkannt: ${lang}`,
    status_ok: '✓ Gemini Nano verfügbar — 100 % lokale Übersetzung.',
    status_downloading: '⏳ Gemini Nano-Modell wurde noch nicht heruntergeladen.',
    status_unavailable: '⚠️ Gemini Nano nicht verfügbar. Aktivieren Sie <code>#prompt-api-for-gemini-nano</code> in <code>chrome://flags</code>, starten Sie Chrome neu und prüfen Sie <code>chrome://components</code>.',
    status_error: msg => `Fehler: ${msg}`,
    download_btn: '⬇ Gemini Nano-Modell herunterladen',
    download_btn_loading: 'Wird heruntergeladen…',
    download_btn_done: '✓ Modell bereit — Sie können jetzt übersetzen!',
    download_btn_error: msg => `Fehler: ${msg} — Wiederholen oder chrome://components prüfen`,
    register_label: 'Register',
    register_neutral: 'Neutral',
    register_formal: 'Formell',
    register_informal: 'Umgangssprachlich',
    register_technical: 'Fachsprachlich',
    alt_btn: 'Alternativen',
    alt_section_title: 'Übersetzungsalternativen',
    word_alt_title: 'Alternativen',
    word_alt_loading: 'Laden…',
    use_alt_btn: 'Verwenden',
  },
  it: {
    _label: 'Italiano',
    title: 'Traduzione Gemini Nano',
    app_title: 'Traduzione Gemini Nano',
    app_subtitle: 'Traduzione locale in Chrome — nessun dato inviato sulla rete',
    ui_lang_label: 'Interfaccia:',
    from_label: 'Da',
    to_label: 'A',
    auto_detect: 'Rilevamento auto',
    source_panel: 'Testo sorgente',
    target_panel: 'Traduzione',
    source_placeholder: 'Inserisci il testo da tradurre…',
    target_placeholder: 'La traduzione apparirà qui…',
    translate_btn: 'Traduci',
    copy_btn: 'Copia',
    copied_btn: 'Copiato!',
    footer_text: "Usa il Prompt API di Chrome (Gemini Nano) · Funziona offline",
    chars: n => `${n} carattere${n !== 1 ? 'i' : ''}`,
    detected: lang => `rilevato: ${lang}`,
    status_ok: '✓ Gemini Nano disponibile — traduzione 100 % locale.',
    status_downloading: '⏳ Il modello Gemini Nano non è ancora scaricato.',
    status_unavailable: '⚠️ Gemini Nano non disponibile. Abilita <code>#prompt-api-for-gemini-nano</code> in <code>chrome://flags</code>, riavvia Chrome e controlla <code>chrome://components</code>.',
    status_error: msg => `Errore: ${msg}`,
    download_btn: '⬇ Scarica il modello Gemini Nano',
    download_btn_loading: 'Download in corso…',
    download_btn_done: '✓ Modello pronto — puoi tradurre!',
    download_btn_error: msg => `Errore: ${msg} — riprova o controlla chrome://components`,
    register_label: 'Registro',
    register_neutral: 'Neutro',
    register_formal: 'Formale',
    register_informal: 'Informale',
    register_technical: 'Tecnico',
    alt_btn: 'Alternative',
    alt_section_title: 'Alternative di traduzione',
    word_alt_title: 'Alternative',
    word_alt_loading: 'Caricamento…',
    use_alt_btn: 'Usa',
  },
  pt: {
    _label: 'Português',
    title: 'Tradução Gemini Nano',
    app_title: 'Tradução Gemini Nano',
    app_subtitle: 'Tradução local no Chrome — nenhum dado enviado pela rede',
    ui_lang_label: 'Interface:',
    from_label: 'De',
    to_label: 'Para',
    auto_detect: 'Detecção auto',
    source_panel: 'Texto fonte',
    target_panel: 'Tradução',
    source_placeholder: 'Digite o texto a traduzir…',
    target_placeholder: 'A tradução aparecerá aqui…',
    translate_btn: 'Traduzir',
    copy_btn: 'Copiar',
    copied_btn: 'Copiado!',
    footer_text: 'Usa o Prompt API do Chrome (Gemini Nano) · Funciona offline',
    chars: n => `${n} caractere${n !== 1 ? 's' : ''}`,
    detected: lang => `detectado: ${lang}`,
    status_ok: '✓ Gemini Nano disponível — tradução 100 % local.',
    status_downloading: '⏳ O modelo Gemini Nano ainda não foi baixado.',
    status_unavailable: '⚠️ Gemini Nano não disponível. Ative <code>#prompt-api-for-gemini-nano</code> em <code>chrome://flags</code>, reinicie o Chrome e verifique <code>chrome://components</code>.',
    status_error: msg => `Erro: ${msg}`,
    download_btn: '⬇ Baixar modelo Gemini Nano',
    download_btn_loading: 'Baixando…',
    download_btn_done: '✓ Modelo pronto — pode traduzir!',
    download_btn_error: msg => `Falha: ${msg} — tente novamente ou verifique chrome://components`,
    register_label: 'Registro',
    register_neutral: 'Neutro',
    register_formal: 'Formal',
    register_informal: 'Informal',
    register_technical: 'Técnico',
    alt_btn: 'Alternativas',
    alt_section_title: 'Alternativas de tradução',
    word_alt_title: 'Alternativas',
    word_alt_loading: 'Carregando…',
    use_alt_btn: 'Usar',
  },
  nl: {
    _label: 'Nederlands',
    title: 'Vertaling Gemini Nano',
    app_title: 'Vertaling Gemini Nano',
    app_subtitle: 'Lokale vertaling in Chrome — geen gegevens verzonden via het netwerk',
    ui_lang_label: 'Interface:',
    from_label: 'Van',
    to_label: 'Naar',
    auto_detect: 'Automatisch',
    source_panel: 'Brontekst',
    target_panel: 'Vertaling',
    source_placeholder: 'Voer de te vertalen tekst in…',
    target_placeholder: 'De vertaling verschijnt hier…',
    translate_btn: 'Vertalen',
    copy_btn: 'Kopiëren',
    copied_btn: 'Gekopieerd!',
    footer_text: 'Gebruikt de Prompt API van Chrome (Gemini Nano) · Werkt offline',
    chars: n => `${n} teken${n !== 1 ? 's' : ''}`,
    detected: lang => `gedetecteerd: ${lang}`,
    status_ok: '✓ Gemini Nano beschikbaar — 100% lokale vertaling.',
    status_downloading: '⏳ Het Gemini Nano-model is nog niet gedownload.',
    status_unavailable: '⚠️ Gemini Nano niet beschikbaar. Schakel <code>#prompt-api-for-gemini-nano</code> in via <code>chrome://flags</code>, herstart Chrome en controleer <code>chrome://components</code>.',
    status_error: msg => `Fout: ${msg}`,
    download_btn: '⬇ Gemini Nano-model downloaden',
    download_btn_loading: 'Downloaden…',
    download_btn_done: '✓ Model klaar — u kunt nu vertalen!',
    download_btn_error: msg => `Fout: ${msg} — probeer opnieuw of controleer chrome://components`,
    register_label: 'Register',
    register_neutral: 'Neutraal',
    register_formal: 'Formeel',
    register_informal: 'Informeel',
    register_technical: 'Technisch',
    alt_btn: 'Alternatieven',
    alt_section_title: 'Vertaalalternatieven',
    word_alt_title: 'Alternatieven',
    word_alt_loading: 'Laden…',
    use_alt_btn: 'Gebruiken',
  },
  ru: {
    _label: 'Русский',
    title: 'Перевод Gemini Nano',
    app_title: 'Перевод Gemini Nano',
    app_subtitle: 'Локальный перевод в Chrome — данные не передаются по сети',
    ui_lang_label: 'Интерфейс:',
    from_label: 'С',
    to_label: 'На',
    auto_detect: 'Авто',
    source_panel: 'Исходный текст',
    target_panel: 'Перевод',
    source_placeholder: 'Введите текст для перевода…',
    target_placeholder: 'Перевод появится здесь…',
    translate_btn: 'Перевести',
    copy_btn: 'Копировать',
    copied_btn: 'Скопировано!',
    footer_text: 'Использует Prompt API Chrome (Gemini Nano) · Работает офлайн',
    chars: n => `${n} символ${n % 10 === 1 && n % 100 !== 11 ? '' : n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? 'а' : 'ов'}`,
    detected: lang => `определено: ${lang}`,
    status_ok: '✓ Gemini Nano доступен — перевод на 100 % локальный.',
    status_downloading: '⏳ Модель Gemini Nano ещё не загружена.',
    status_unavailable: '⚠️ Gemini Nano недоступен. Включите <code>#prompt-api-for-gemini-nano</code> в <code>chrome://flags</code>, перезапустите Chrome и проверьте <code>chrome://components</code>.',
    status_error: msg => `Ошибка: ${msg}`,
    download_btn: '⬇ Загрузить модель Gemini Nano',
    download_btn_loading: 'Загрузка…',
    download_btn_done: '✓ Модель готова — можно переводить!',
    download_btn_error: msg => `Ошибка: ${msg} — повторите или проверьте chrome://components`,
    register_label: 'Стиль',
    register_neutral: 'Нейтральный',
    register_formal: 'Официальный',
    register_informal: 'Разговорный',
    register_technical: 'Технический',
    alt_btn: 'Альтернативы',
    alt_section_title: 'Варианты перевода',
    word_alt_title: 'Альтернативы',
    word_alt_loading: 'Загрузка…',
    use_alt_btn: 'Применить',
  },
  zh: {
    _label: '中文',
    title: 'Gemini Nano 翻译',
    app_title: 'Gemini Nano 翻译',
    app_subtitle: 'Chrome 本地翻译 — 不向网络发送任何数据',
    ui_lang_label: '界面语言：',
    from_label: '从',
    to_label: '译为',
    auto_detect: '自动检测',
    source_panel: '源文本',
    target_panel: '翻译',
    source_placeholder: '请输入要翻译的文字…',
    target_placeholder: '翻译结果将显示在这里…',
    translate_btn: '翻译',
    copy_btn: '复制',
    copied_btn: '已复制！',
    footer_text: '使用 Chrome 内置 Prompt API（Gemini Nano）· 支持离线使用',
    chars: n => `${n} 个字符`,
    detected: lang => `检测到：${lang}`,
    status_ok: '✓ Gemini Nano 可用 — 100% 本地翻译。',
    status_downloading: '⏳ Gemini Nano 模型尚未下载。',
    status_unavailable: '⚠️ Gemini Nano 不可用。请在 <code>chrome://flags</code> 启用 <code>#prompt-api-for-gemini-nano</code>，重启 Chrome 后检查 <code>chrome://components</code>。',
    status_error: msg => `错误：${msg}`,
    download_btn: '⬇ 下载 Gemini Nano 模型',
    download_btn_loading: '下载中…',
    download_btn_done: '✓ 模型已就绪 — 可以开始翻译！',
    download_btn_error: msg => `失败：${msg} — 请重试或检查 chrome://components`,
    register_label: '语体',
    register_neutral: '中性',
    register_formal: '正式',
    register_informal: '口语',
    register_technical: '技术',
    alt_btn: '备选翻译',
    alt_section_title: '翻译备选方案',
    word_alt_title: '备选词',
    word_alt_loading: '加载中…',
    use_alt_btn: '使用',
  },
  ja: {
    _label: '日本語',
    title: 'Gemini Nano 翻訳',
    app_title: 'Gemini Nano 翻訳',
    app_subtitle: 'Chrome のローカル翻訳 — データはネットワークに送信されません',
    ui_lang_label: '言語：',
    from_label: '原文',
    to_label: '翻訳先',
    auto_detect: '自動検出',
    source_panel: '原文',
    target_panel: '翻訳',
    source_placeholder: '翻訳するテキストを入力…',
    target_placeholder: '翻訳がここに表示されます…',
    translate_btn: '翻訳',
    copy_btn: 'コピー',
    copied_btn: 'コピーしました！',
    footer_text: 'Chrome 内蔵の Prompt API（Gemini Nano）を使用 · オフラインで動作',
    chars: n => `${n} 文字`,
    detected: lang => `検出：${lang}`,
    status_ok: '✓ Gemini Nano が使用可能 — 100% ローカル翻訳。',
    status_downloading: '⏳ Gemini Nano モデルはまだダウンロードされていません。',
    status_unavailable: '⚠️ Gemini Nano が利用できません。<code>chrome://flags</code> で <code>#prompt-api-for-gemini-nano</code> を有効にして Chrome を再起動し、<code>chrome://components</code> を確認してください。',
    status_error: msg => `エラー：${msg}`,
    download_btn: '⬇ Gemini Nano モデルをダウンロード',
    download_btn_loading: 'ダウンロード中…',
    download_btn_done: '✓ モデル準備完了 — 翻訳できます！',
    download_btn_error: msg => `エラー：${msg} — 再試行するか chrome://components を確認してください`,
    register_label: '文体',
    register_neutral: '普通体',
    register_formal: '丁寧体',
    register_informal: 'くだけた',
    register_technical: '専門的',
    alt_btn: '候補',
    alt_section_title: '翻訳候補',
    word_alt_title: '候補',
    word_alt_loading: '読み込み中…',
    use_alt_btn: '使用',
  },
  ko: {
    _label: '한국어',
    title: 'Gemini Nano 번역',
    app_title: 'Gemini Nano 번역',
    app_subtitle: 'Chrome 로컬 번역 — 네트워크로 데이터가 전송되지 않습니다',
    ui_lang_label: '인터페이스:',
    from_label: '원본',
    to_label: '번역',
    auto_detect: '자동 감지',
    source_panel: '원본 텍스트',
    target_panel: '번역',
    source_placeholder: '번역할 텍스트를 입력하세요…',
    target_placeholder: '번역 결과가 여기에 표시됩니다…',
    translate_btn: '번역',
    copy_btn: '복사',
    copied_btn: '복사됨!',
    footer_text: 'Chrome 내장 Prompt API(Gemini Nano) 사용 · 오프라인 작동',
    chars: n => `${n}자`,
    detected: lang => `감지됨: ${lang}`,
    status_ok: '✓ Gemini Nano 사용 가능 — 100% 로컬 번역.',
    status_downloading: '⏳ Gemini Nano 모델이 아직 다운로드되지 않았습니다.',
    status_unavailable: '⚠️ Gemini Nano를 사용할 수 없습니다. <code>chrome://flags</code>에서 <code>#prompt-api-for-gemini-nano</code>를 활성화하고 Chrome을 재시작한 후 <code>chrome://components</code>를 확인하세요.',
    status_error: msg => `오류: ${msg}`,
    download_btn: '⬇ Gemini Nano 모델 다운로드',
    download_btn_loading: '다운로드 중…',
    download_btn_done: '✓ 모델 준비 완료 — 번역할 수 있습니다!',
    download_btn_error: msg => `실패: ${msg} — 다시 시도하거나 chrome://components를 확인하세요`,
    register_label: '문체',
    register_neutral: '보통',
    register_formal: '격식체',
    register_informal: '구어체',
    register_technical: '전문적',
    alt_btn: '대안',
    alt_section_title: '번역 대안',
    word_alt_title: '대안',
    word_alt_loading: '로딩 중…',
    use_alt_btn: '사용',
  },
  ar: {
    _label: 'العربية',
    title: 'ترجمة Gemini Nano',
    app_title: 'ترجمة Gemini Nano',
    app_subtitle: 'ترجمة محلية في Chrome — لا يتم إرسال أي بيانات عبر الشبكة',
    ui_lang_label: 'الواجهة:',
    from_label: 'من',
    to_label: 'إلى',
    auto_detect: 'كشف تلقائي',
    source_panel: 'النص المصدر',
    target_panel: 'الترجمة',
    source_placeholder: 'أدخل النص للترجمة…',
    target_placeholder: 'ستظهر الترجمة هنا…',
    translate_btn: 'ترجم',
    copy_btn: 'نسخ',
    copied_btn: 'تم النسخ!',
    footer_text: 'يستخدم Prompt API المدمج في Chrome (Gemini Nano) · يعمل بلا إنترنت',
    chars: n => `${n} حرف`,
    detected: lang => `تم الكشف: ${lang}`,
    status_ok: '✓ Gemini Nano متاح — ترجمة محلية 100%.',
    status_downloading: '⏳ لم يتم تنزيل نموذج Gemini Nano بعد.',
    status_unavailable: '⚠️ Gemini Nano غير متاح. فعّل <code>#prompt-api-for-gemini-nano</code> في <code>chrome://flags</code> وأعد تشغيل Chrome ثم تحقق من <code>chrome://components</code>.',
    status_error: msg => `خطأ: ${msg}`,
    download_btn: '⬇ تنزيل نموذج Gemini Nano',
    download_btn_loading: 'جارٍ التنزيل…',
    download_btn_done: '✓ النموذج جاهز — يمكنك الترجمة الآن!',
    download_btn_error: msg => `فشل: ${msg} — أعد المحاولة أو تحقق من chrome://components`,
    register_label: 'المستوى',
    register_neutral: 'محايد',
    register_formal: 'رسمي',
    register_informal: 'عامي',
    register_technical: 'تقني',
    alt_btn: 'بدائل',
    alt_section_title: 'بدائل الترجمة',
    word_alt_title: 'بدائل',
    word_alt_loading: 'جارٍ التحميل…',
    use_alt_btn: 'استخدام',
  },
  tr: {
    _label: 'Türkçe',
    title: 'Gemini Nano Çeviri',
    app_title: 'Gemini Nano Çeviri',
    app_subtitle: "Chrome'da yerel çeviri — ağ üzerinden veri gönderilmez",
    ui_lang_label: 'Arayüz:',
    from_label: 'Kaynak',
    to_label: 'Hedef',
    auto_detect: 'Otomatik',
    source_panel: 'Kaynak metin',
    target_panel: 'Çeviri',
    source_placeholder: 'Çevrilecek metni girin…',
    target_placeholder: 'Çeviri burada görünecek…',
    translate_btn: 'Çevir',
    copy_btn: 'Kopyala',
    copied_btn: 'Kopyalandı!',
    footer_text: "Chrome'un Prompt API'sini kullanır (Gemini Nano) · Çevrimdışı çalışır",
    chars: n => `${n} karakter`,
    detected: lang => `algılanan: ${lang}`,
    status_ok: '✓ Gemini Nano kullanılabilir — %100 yerel çeviri.',
    status_downloading: '⏳ Gemini Nano modeli henüz indirilmedi.',
    status_unavailable: "⚠️ Gemini Nano kullanılamıyor. <code>chrome://flags</code>'de <code>#prompt-api-for-gemini-nano</code> etkinleştirin, Chrome'u yeniden başlatın ve <code>chrome://components</code> kontrol edin.",
    status_error: msg => `Hata: ${msg}`,
    download_btn: '⬇ Gemini Nano modelini indir',
    download_btn_loading: 'İndiriliyor…',
    download_btn_done: '✓ Model hazır — şimdi çevirebilirsiniz!',
    download_btn_error: msg => `Başarısız: ${msg} — yeniden deneyin veya chrome://components kontrol edin`,
    register_label: 'Dil Seviyesi',
    register_neutral: 'Tarafsız',
    register_formal: 'Resmi',
    register_informal: 'Günlük',
    register_technical: 'Teknik',
    alt_btn: 'Alternatifler',
    alt_section_title: 'Çeviri alternatifleri',
    word_alt_title: 'Alternatifler',
    word_alt_loading: 'Yükleniyor…',
    use_alt_btn: 'Kullan',
  },
};

// ── Content languages ────────────────────────────────────────────────────────

const LANGUAGES = [
  { code: 'auto', labelKey: 'auto_detect' },
  { code: 'fr',  label: 'Français' },
  { code: 'en',  label: 'English' },
  { code: 'es',  label: 'Español' },
  { code: 'de',  label: 'Deutsch' },
  { code: 'it',  label: 'Italiano' },
  { code: 'pt',  label: 'Português' },
  { code: 'nl',  label: 'Nederlands' },
  { code: 'pl',  label: 'Polski' },
  { code: 'ru',  label: 'Русский' },
  { code: 'uk',  label: 'Українська' },
  { code: 'zh',  label: '中文（简体）' },
  { code: 'ja',  label: '日本語' },
  { code: 'ko',  label: '한국어' },
  { code: 'ar',  label: 'العربية' },
  { code: 'tr',  label: 'Türkçe' },
  { code: 'vi',  label: 'Tiếng Việt' },
  { code: 'th',  label: 'ภาษาไทย' },
  { code: 'hi',  label: 'हिन्दी' },
  { code: 'sv',  label: 'Svenska' },
  { code: 'da',  label: 'Dansk' },
  { code: 'fi',  label: 'Suomi' },
  { code: 'no',  label: 'Norsk' },
  { code: 'cs',  label: 'Čeština' },
  { code: 'ro',  label: 'Română' },
  { code: 'hu',  label: 'Magyar' },
  { code: 'id',  label: 'Bahasa Indonesia' },
];

const LANG_NAMES = Object.fromEntries(
  LANGUAGES.filter(l => l.label).map(l => [l.code, l.label])
);


// ── i18n ─────────────────────────────────────────────────────────────────────

const LS_UI_LANG = 'gemini-translate-ui-lang';

function resolveUiLang() {
  const saved = localStorage.getItem(LS_UI_LANG);
  if (saved && I18N[saved]) return saved;
  for (const nav of (navigator.languages ?? [navigator.language])) {
    const code = nav.split('-')[0].toLowerCase();
    if (I18N[code]) return code;
  }
  return 'en';
}

let currentLang = resolveUiLang();

function t(key, ...args) {
  const entry = (I18N[currentLang] ?? I18N.en)[key];
  return typeof entry === 'function' ? entry(...args) : (entry ?? key);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.dataset.i18nPlaceholder);
    if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
      el.placeholder = val;
    } else {
      el.setAttribute('data-placeholder', val);
    }
  });

  // Auto-detect option in source select
  const autoOpt = sourceLangSel?.querySelector('option[value="auto"]');
  if (autoOpt) autoOpt.textContent = t('auto_detect');

  // Register option labels
  [...registerSel.options].forEach(opt => {
    opt.textContent = t(`register_${opt.value}`);
  });

  // Download button label if visible
  if (downloadLabel && downloadBtn?.style.display !== 'none')
    downloadLabel.innerHTML = t('download_btn');

  charCount.textContent = t('chars', sourceText.value.length);
}

// ── DOM refs ──────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

const sourceLangSel = $('source-lang');
const targetLangSel = $('target-lang');
const registerSel   = $('register-sel');
const uiLangSel     = $('ui-lang');
const sourceText    = $('source-text');
const targetText    = $('target-text');
const translateBtn  = $('translate-btn');
const swapBtn       = $('swap-btn');
const copyBtn       = $('copy-btn');
const altBtn        = $('alt-btn');
const altSection    = $('alt-section');
const altList       = $('alt-list');
const wordPopup     = $('word-popup');
const wordPopupList = $('word-popup-list');
const charCount           = $('char-count');
const translationSpinner  = $('translation-spinner');
const detectedLang  = $('detected-lang');
const statusBanner  = $('api-status');
const downloadBtn   = $('download-btn');
const downloadLabel = $('download-label');

// ── Populate selects ──────────────────────────────────────────────────────────

function populateUiLangSelect() {
  Object.entries(I18N).forEach(([code, msgs]) => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = msgs._label;
    if (code === currentLang) opt.selected = true;
    uiLangSel.appendChild(opt);
  });
}

function populateContentLangSelects() {
  LANGUAGES.forEach(({ code, label, labelKey }) => {
    const text = labelKey ? t(labelKey) : label;

    if (code !== 'auto') {
      const optT = document.createElement('option');
      optT.value = code;
      optT.textContent = text;
      if (code === 'fr') optT.selected = true;
      targetLangSel.appendChild(optT);
    }

    const optS = document.createElement('option');
    optS.value = code;
    optS.textContent = text;
    if (code === 'auto') optS.selected = true;
    sourceLangSel.appendChild(optS);
  });
}

function populateRegisterSelect() {
  ['neutral', 'formal', 'informal', 'technical'].forEach(r => {
    const opt = document.createElement('option');
    opt.value = r;
    opt.textContent = t(`register_${r}`);
    registerSel.appendChild(opt);
  });
}

populateUiLangSelect();
populateContentLangSelects();
populateRegisterSelect();
applyTranslations();

// ── Status banner ─────────────────────────────────────────────────────────────

function setStatus(type, html) {
  statusBanner.className = type;
  statusBanner.innerHTML = html;
}

// ── Gemini Nano API (Prompt API) ──────────────────────────────────────────────

function getLMApi() {
  return window.LanguageModel ?? self.ai?.languageModel ?? null;
}

function getLDApi() {
  return window.LanguageDetector ?? self.ai?.languageDetector ?? null;
}

async function getAvailability(api) {
  if (typeof api.availability === 'function') {
    const v = await api.availability();
    if (v === 'available')                          return 'readily';
    if (v === 'downloadable' || v === 'downloading') return 'after-download';
    return 'no';
  }
  if (typeof api.capabilities === 'function') {
    const caps = await api.capabilities();
    return caps.available ?? 'no';
  }
  return 'no';
}

async function checkApiAvailability() {
  const api = getLMApi();
  if (!api) {
    setStatus('error', t('status_unavailable'));
    translateBtn.disabled = true;
    return false;
  }
  try {
    const avail = await getAvailability(api);
    if (avail === 'no') {
      setStatus('error', t('status_unavailable'));
      translateBtn.disabled = true;
      return false;
    }
    if (avail === 'after-download') {
      setStatus('warning', t('status_downloading'));
      translateBtn.disabled = true;
      downloadBtn.style.display = 'block';
      downloadLabel.innerHTML = t('download_btn');
    } else {
      setStatus('ok', t('status_ok'));
      setTimeout(() => { statusBanner.style.display = 'none'; }, 4000);
      downloadBtn.style.display = 'none';
      translateBtn.disabled = false;
    }
  } catch (e) {
    setStatus('error', t('status_error', e.message));
    translateBtn.disabled = true;
    return false;
  }
  return true;
}

async function triggerDownload() {
  downloadBtn.classList.add('loading');
  downloadBtn.disabled = true;
  setStatus('warning', t('status_downloading'));
  try {
    const session = await getLMApi().create();
    session.destroy();
    downloadBtn.style.display = 'none';
    translateBtn.disabled = false;
    setStatus('ok', t('download_btn_done'));
    setTimeout(() => { statusBanner.style.display = 'none'; }, 5000);
  } catch (e) {
    setStatus('error', t('download_btn_error', e.message ?? String(e)));
    downloadLabel.innerHTML = t('download_btn');
    downloadBtn.classList.remove('loading');
    downloadBtn.disabled = false;
  }
}

// ── LLM logging ──────────────────────────────────────────────────────────────

function logLLM(label, { system, shots, prompt, response }) {
  const S = (color) => `color:${color};font-weight:700;font-size:.9em`;
  console.groupCollapsed(
    `%c🔤 LLM%c  ${label}`,
    'color:#93c5fd;font-weight:700', 'color:#94a3b8;font-weight:400',
  );
  if (system) {
    console.log('%cSYSTEM', S('#7dd3fc'));
    console.log(system);
  }
  if (shots?.length) {
    console.log('%cFEW-SHOT', S('#c084fc'));
    shots.forEach(({ role, content }) =>
      console.log(`  %c${role.padEnd(9)}%c${content}`, S('#94a3b8'), 'color:#e2e8f0;font-weight:400')
    );
  }
  console.log('%cPROMPT', S('#4ade80'));
  console.log(prompt);
  if (response != null) {
    console.log('%cRESPONSE', S('#fbbf24'));
    console.log(response);
  }
  console.groupEnd();
}

// ── Prompt helpers ────────────────────────────────────────────────────────────

// Two alternative translations of "Hello" per language, for few-shot examples in the alternatives prompt
const ALT_HELLO = {
  fr: ['Salut', 'Bonjour', 'Bonsoir'],
  en: ['Hi', 'Hey', 'Greetings'],
  es: ['Hola', '¡Buenas!', 'Buenos días'],
  de: ['Hallo', 'Hi', 'Guten Tag'],
  it: ['Ciao', 'Salve', 'Buongiorno'],
  pt: ['Olá', 'Oi', 'Bom dia'],
  ru: ['Привет', 'Здравствуйте', 'Добрый день'],
  ja: ['こんにちは', 'やあ', 'おはようございます'],
  zh: ['你好', '嗨', '您好'],
};

const HELLO = {
  en: 'Hello',  fr: 'Bonjour', de: 'Hallo',    es: 'Hola',
  it: 'Ciao',   pt: 'Olá',     nl: 'Hallo',     ru: 'Привет',
  zh: '你好',   ja: 'こんにちは', ko: '안녕하세요', ar: 'مرحبا',
  tr: 'Merhaba', pl: 'Cześć',  uk: 'Привіт',
};

// Instructions appended to system prompt per register level
const REGISTER_INSTRUCTIONS = {
  neutral:   '',
  formal:    ' Use formal, polite register (e.g. vouvoiement in French, Sie in German, usted in Spanish, keigo in Japanese).',
  informal:  ' Use casual, everyday language (e.g. tutoiement in French, du in German, tú in Spanish).',
  technical: ' Use precise technical terminology where applicable.',
};

function makeSystemPrompt(srcCode, tgtCode, register = 'neutral') {
  const regNote = REGISTER_INSTRUCTIONS[register] ?? '';
  return (
    `You are a translation engine. Translate from ${srcCode} to ${tgtCode}.${regNote} ` +
    'The user sends <translate>text</translate>. ' +
    'Respond with ONLY a JSON object: {"t":"translated text here"}. ' +
    'Escape newlines as \\n inside the string. No markdown, no explanation, no extra keys.'
  );
}

// System prompt for the 2-alternatives variant
function makeAlternativesSystemPrompt(srcCode, tgtCode, register = 'neutral') {
  const regNote = REGISTER_INSTRUCTIONS[register] ?? '';
  return (
    `You are a JSON translation API. Translate from ${srcCode} to ${tgtCode}.${regNote} ` +
    'Input: <translate>text</translate>. ' +
    'Output: valid JSON only — no prose, no markdown, no text outside the JSON object. ' +
    'Format: {"a":["translation 1","translation 2",...]}. ' +
    'Include 2 to 5 items. Use \\n for newlines inside strings.'
  );
}

function makeFewShotPrompts(srcCode, tgtCode) {
  const srcHello = HELLO[srcCode] ?? 'Hello';
  const tgtHello = HELLO[tgtCode];
  if (!tgtHello || srcHello === tgtHello) return [];
  return [
    { role: 'user',      content: `<translate>${srcHello}</translate>` },
    { role: 'assistant', content: JSON.stringify({ t: tgtHello }) },
  ];
}

function makeFewShotAlternativePrompts(srcCode, tgtCode) {
  const srcHello = HELLO[srcCode] ?? 'Hello';
  const tgtHello = HELLO[tgtCode];
  if (!tgtHello || srcHello === tgtHello) return [];
  // Two plausible alternatives for "Hello" in the target language with a note
  const alts = ALT_HELLO[tgtCode];
  if (!alts) return [];
  return [
    { role: 'user',      content: `<translate>${srcHello}</translate>` },
    { role: 'assistant', content: JSON.stringify({ a: alts }) },  // alts is now string[]
  ];
}

// Replace literal newlines/carriage-returns inside JSON string values with \n/\r.
// The model sometimes emits unescaped newlines which makes JSON.parse fail.
function normalizeJsonStrings(raw) {
  let out = '';
  let inStr = false;
  let i = 0;
  while (i < raw.length) {
    const ch = raw[i];
    if (ch === '\\' && inStr) { out += ch + (raw[i + 1] ?? ''); i += 2; continue; }
    if (ch === '"')   { inStr = !inStr; out += ch; }
    else if (inStr && ch === '\n') out += '\\n';
    else if (inStr && ch === '\r') out += '\\r';
    else out += ch;
    i++;
  }
  return out;
}

// Extract translation value from a complete or partial JSON stream.
// During streaming the JSON is incomplete; we pull the partial string value.
function extractT(raw) {
  // Complete JSON first
  try {
    const m = raw.match(/\{[\s\S]*\}/);
    if (m) { const o = JSON.parse(normalizeJsonStrings(m[0])); if (typeof o.t === 'string') return o.t; }
  } catch { /* partial */ }
  // Partial: grab whatever is after "t":" until end-of-string
  const m = raw.match(/"t"\s*:\s*"((?:[^"\\]|\\.)*)"/);
  if (m) return m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  const p = raw.match(/"t"\s*:\s*"([\s\S]*)/);
  if (p) return p[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  return null;
}

// Parse a JSON array response, with line-split fallback
function parseArray(raw) {
  try {
    const m = raw.match(/\[[\s\S]*\]/);
    if (m) return JSON.parse(normalizeJsonStrings(m[0])).filter(s => typeof s === 'string');
  } catch { /* fall through */ }
  return raw.split('\n').map(l => l.trim().replace(/^[-•*\d.)]+\s*/, '')).filter(Boolean);
}

function makeTranslationPrompt(text) {
  return `<translate>${text}</translate>`;
}

function langName(code) {
  return LANG_NAMES[code] ?? code;
}

// ── Language detection ────────────────────────────────────────────────────────

async function detectLanguageViaPrompt(text) {
  const ldApi = getLDApi();
  if (ldApi) {
    try {
      const detector = await ldApi.create();
      const results  = await detector.detect(text.slice(0, 300));
      detector.destroy?.();
      const top = results?.[0];
      if (top?.confidence > 0.4) return top.detectedLanguage.split('-')[0];
    } catch { /* fall through */ }
  }

  const lmApi = getLMApi();
  if (!lmApi) return null;
  try {
    const sysPrompt = 'Identify the language of the given text. Reply with ONLY the BCP 47 language tag (e.g. "fr", "en", "de", "zh"). No other text.';
    const session = await lmApi.create({ systemPrompt: sysPrompt });
    const snippet = text.slice(0, 300);
    const raw = (await session.prompt(snippet)).trim().toLowerCase();
    const result = raw.split(/[\s,;]/)[0];
    session.destroy();
    logLLM('detect language (LM fallback)', { system: sysPrompt, prompt: snippet, response: raw });
    if (/^[a-z]{2,3}(-[a-z]{2,4})?$/.test(result)) return result.split('-')[0];
  } catch { /* silent */ }
  return null;
}

function showTargetSpinner() {
  translationSpinner.classList.add('active');
  targetText.classList.add('translating');
}

function hideTargetSpinner() {
  translationSpinner.classList.remove('active');
  targetText.classList.remove('translating');
}

// ── Translation state ─────────────────────────────────────────────────────────

let currentSession     = null;
let translating        = false;
let currentSrcCode     = 'auto';  // resolved source code after auto-detect
let currentTranslation = '';      // current target text (plain string)

// ── Word-span rendering ───────────────────────────────────────────────────────

// Renders translation as clickable word spans inside targetText div.
// Non-word tokens (spaces) are kept as text nodes.
function renderTranslationAsSpans(text) {
  targetText.innerHTML = '';
  if (!text) return;
  text.split('\n').forEach((line, lineIdx) => {
    if (lineIdx > 0) targetText.appendChild(document.createElement('br'));
    line.split(/(\s+)/).forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        targetText.appendChild(document.createTextNode(part));
      } else {
        const span = document.createElement('span');
        span.className = 'word-span';
        span.textContent = part;
        span.addEventListener('click', e => { e.stopPropagation(); onWordClick(span); });
        targetText.appendChild(span);
      }
    });
  });
}

// ── Word-level alternatives popup ─────────────────────────────────────────────

let activeWordSpan = null;

function closeWordPopup() {
  wordPopup.style.display = 'none';
  if (activeWordSpan) {
    activeWordSpan.classList.remove('active');
    activeWordSpan = null;
  }
}

async function onWordClick(span) {
  // Toggle off if same word clicked again
  if (activeWordSpan === span) { closeWordPopup(); return; }
  closeWordPopup();

  activeWordSpan = span;
  span.classList.add('active');

  // Position popup below the word, keep within viewport
  const rect = span.getBoundingClientRect();
  wordPopup.style.display = 'block';
  const pw = wordPopup.offsetWidth || 200;
  const left = Math.min(rect.left, window.innerWidth - pw - 8);
  wordPopup.style.left = Math.max(8, left) + 'px';
  wordPopup.style.top  = (rect.bottom + 4) + 'px';

  wordPopupList.innerHTML = `<div class="popup-loading">${t('word_alt_loading')}</div>`;

  try {
    const alts = await fetchWordAlternatives(
      span.textContent,
      currentTranslation,
      currentSrcCode,
      targetLangSel.value
    );
    wordPopupList.innerHTML = '';
    if (!alts.length) { wordPopupList.innerHTML = '<div class="popup-loading">—</div>'; return; }
    alts.forEach(altText => {
      const btn = document.createElement('button');
      btn.className = 'popup-alt-btn';
      btn.textContent = altText;
      btn.addEventListener('click', () => {
        span.textContent = altText;
        currentTranslation = targetText.textContent;
        closeWordPopup();
        copyBtn.disabled = false;
      });
      wordPopupList.appendChild(btn);
    });
  } catch (e) {
    wordPopupList.innerHTML = `<div class="popup-loading">${e.message}</div>`;
  }
}

async function fetchWordAlternatives(word, fullTranslation, srcCode, tgtCode) {
  const sysPrompt =
    `You are a JSON translation API. A text was translated from ${srcCode} to ${tgtCode}. ` +
    `Suggest 2 to 5 alternative ${tgtCode} words or short phrases to replace the given word in context. ` +
    'Output: valid JSON only — no prose, no markdown. ' +
    'Format: ["alt1","alt2",...]. No extra keys.';
  const session = await getLMApi().create({ systemPrompt: sysPrompt });
  const prompt = `Full translation: "${fullTranslation}"\nWord to replace: "${word}"`;
  const result = await session.prompt(prompt);
  session.destroy();
  logLLM('word alternatives', { system: sysPrompt, prompt, response: result });
  try {
    const m = result.match(/\[[\s\S]*\]/);
    if (m) return JSON.parse(normalizeJsonStrings(m[0])).filter(s => typeof s === 'string' && s !== word).slice(0, 5);
  } catch { /* fall through */ }
  return parseArray(result).filter(s => s !== word).slice(0, 5);
}

// ── Global translation alternatives ──────────────────────────────────────────

async function showGlobalAlternatives() {
  altSection.style.display = 'block';
  altBtn.disabled = true;
  altList.innerHTML = `<div class="popup-loading">${t('word_alt_loading')}</div>`;

  try {
    const alts = await fetchGlobalAlternatives(
      sourceText.value.trim(),
      currentSrcCode,
      targetLangSel.value,
      registerSel.value
    );
    altList.innerHTML = '';
    if (!alts.length) { altList.innerHTML = '<div class="popup-loading">—</div>'; return; }
    alts.forEach(altText => {
      const card = document.createElement('div');
      card.className = 'alt-card';

      const textDiv = document.createElement('div');
      textDiv.className = 'alt-text';
      textDiv.textContent = altText;

      const useBtn = document.createElement('button');
      useBtn.className = 'use-alt-btn';
      useBtn.textContent = t('use_alt_btn');
      useBtn.addEventListener('click', () => {
        currentTranslation = altText;
        renderTranslationAsSpans(altText);
        copyBtn.disabled = false;
        altSection.style.display = 'none';
        altBtn.disabled = false;
      });

      card.appendChild(textDiv);
      card.appendChild(useBtn);
      altList.appendChild(card);
    });
  } catch (e) {
    altList.innerHTML = `<div class="popup-loading">${e.message}</div>`;
  } finally {
    altBtn.disabled = false;
  }
}

async function fetchGlobalAlternatives(text, srcCode, tgtCode, register) {
  const session = await getLMApi().create({
    systemPrompt:            makeAlternativesSystemPrompt(srcCode, tgtCode, register),
    initialPrompts:          makeFewShotAlternativePrompts(srcCode, tgtCode),
    expectedInputLanguages:  [srcCode],
    expectedOutputLanguages: [tgtCode],
  });
  const prompt = makeTranslationPrompt(text);
  const result = await session.prompt(prompt);
  session.destroy();
  logLLM('global alternatives', {
    system:   makeAlternativesSystemPrompt(srcCode, tgtCode, register),
    shots:    makeFewShotAlternativePrompts(srcCode, tgtCode),
    prompt,
    response: result,
  });
  try {
    const m = result.match(/\{[\s\S]*\}/);
    if (m) {
      const o = JSON.parse(normalizeJsonStrings(m[0]));
      if (Array.isArray(o.a)) return o.a.filter(s => typeof s === 'string').slice(0, 5);
    }
  } catch { /* fall through */ }
  return parseArray(result).slice(0, 5);
}

// ── Core translation ──────────────────────────────────────────────────────────

async function translate() {
  const text = sourceText.value.trim();
  if (!text) return;

  if (translating && currentSession) {
    try { currentSession.destroy(); } catch { /* ignore */ }
    currentSession = null;
  }

  let srcCode       = sourceLangSel.value;
  const tgtCode     = targetLangSel.value;
  const register    = registerSel.value;

  translating = true;
  translateBtn.classList.add('loading');
  translateBtn.disabled = true;
  altBtn.disabled       = true;
  altSection.style.display = 'none';
  altList.innerHTML     = '';
  detectedLang.textContent = '';
  closeWordPopup();
  showTargetSpinner();

  if (currentSession) {
    try { currentSession.destroy(); } catch { /* ignore */ }
    currentSession = null;
  }

  try {
    if (srcCode === 'auto') {
      const detected = await detectLanguageViaPrompt(text);
      if (detected) {
        srcCode = detected;
        const match = LANGUAGES.find(l => l.code === detected);
        detectedLang.textContent = t('detected', match?.label ?? detected);
      } else {
        srcCode = 'the source language';
      }
    }

    currentSrcCode = srcCode;

    if (srcCode === tgtCode) {
      hideTargetSpinner();
      currentTranslation = text;
      renderTranslationAsSpans(text);
      copyBtn.disabled = false;
      altBtn.disabled  = false;
      return;
    }

    currentSession = await getLMApi().create({
      systemPrompt:            makeSystemPrompt(srcCode, tgtCode, register),
      initialPrompts:          makeFewShotPrompts(srcCode, tgtCode),
      expectedInputLanguages:  [srcCode],
      expectedOutputLanguages: [tgtCode],
    });

    // Stream: accumulate raw JSON, display extracted value live
    const stream = currentSession.promptStreaming(makeTranslationPrompt(text));
    let raw = '';
    let firstContent = true;
    for await (const chunk of stream) {
      if (raw && chunk.startsWith(raw)) raw = chunk; else raw += chunk;
      const partial = extractT(raw);
      if (partial !== null && firstContent) {
        // First real content: replace old translation and hide spinner
        targetText.innerHTML = '';
        currentTranslation   = '';
        copyBtn.disabled     = true;
        hideTargetSpinner();
        firstContent = false;
      }
      if (partial !== null) {
        targetText.textContent = partial;
        targetText.scrollTop   = targetText.scrollHeight;
      }
    }

    const result = extractT(raw) ?? raw.trim();
    currentTranslation = result;
    logLLM('translate', {
      system:   makeSystemPrompt(srcCode, tgtCode, register),
      shots:    makeFewShotPrompts(srcCode, tgtCode),
      prompt:   makeTranslationPrompt(text),
      response: result,
    });
    renderTranslationAsSpans(result);
    copyBtn.disabled = !result;
    altBtn.disabled  = !result;
  } catch (err) {
    targetText.textContent = '';
    setStatus('error', t('status_error', err.message ?? String(err)));
  } finally {
    translating = false;
    hideTargetSpinner();
    translateBtn.classList.remove('loading');
    translateBtn.disabled = false;
  }
}

// ── UI events ─────────────────────────────────────────────────────────────────

downloadBtn.addEventListener('click', triggerDownload);

function applySmartTargetLang() {
  const src = sourceLangSel.value;
  const suggested = (src === 'en') ? currentLang : 'en';
  const exists = [...targetLangSel.options].some(o => o.value === suggested);
  if (exists && suggested !== src) targetLangSel.value = suggested;
}

uiLangSel.addEventListener('change', () => {
  currentLang = uiLangSel.value;
  localStorage.setItem(LS_UI_LANG, currentLang);
  applyTranslations();
  if (sourceLangSel.value === 'en') {
    applySmartTargetLang();
    if (sourceText.value.trim()) translate();
  }
  if (statusBanner.className) checkApiAvailability();
});

let debounceTimer = null;

sourceText.addEventListener('input', () => {
  charCount.textContent = t('chars', sourceText.value.length);
  clearTimeout(debounceTimer);
  if (sourceText.value.trim()) {
    debounceTimer = setTimeout(translate, 1000);
  } else {
    targetText.innerHTML = '';
    currentTranslation   = '';
    copyBtn.disabled     = true;
    altBtn.disabled      = true;
    altSection.style.display = 'none';
    detectedLang.textContent = '';
    closeWordPopup();
  }
});

sourceLangSel.addEventListener('change', () => {
  applySmartTargetLang();
  if (sourceText.value.trim()) { clearTimeout(debounceTimer); translate(); }
});

targetLangSel.addEventListener('change', () => {
  if (sourceText.value.trim()) { clearTimeout(debounceTimer); translate(); }
});

registerSel.addEventListener('change', () => {
  if (sourceText.value.trim()) { clearTimeout(debounceTimer); translate(); }
});

sourceText.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    clearTimeout(debounceTimer);
    translate();
  }
});

translateBtn.addEventListener('click', translate);

swapBtn.addEventListener('click', () => {
  const srcCode = sourceLangSel.value === 'auto' ? null : sourceLangSel.value;
  const tgtCode = targetLangSel.value;
  if (srcCode) sourceLangSel.value = tgtCode;
  targetLangSel.value = srcCode ?? tgtCode;

  const oldSource        = sourceText.value;
  sourceText.value       = currentTranslation;
  currentTranslation     = oldSource;
  renderTranslationAsSpans(currentTranslation);

  copyBtn.disabled = !currentTranslation;
  altBtn.disabled  = !currentTranslation;
  charCount.textContent = t('chars', sourceText.value.length);
  detectedLang.textContent = '';
  altSection.style.display = 'none';
  closeWordPopup();
});

copyBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(currentTranslation);
  copyBtn.textContent = t('copied_btn');
  setTimeout(() => { copyBtn.textContent = t('copy_btn'); }, 1500);
});

altBtn.addEventListener('click', () => {
  if (altSection.style.display === 'block') {
    altSection.style.display = 'none';
  } else {
    showGlobalAlternatives();
  }
});

// Close word popup when clicking outside
document.addEventListener('click', e => {
  if (!wordPopup.contains(e.target) && !e.target.classList.contains('word-span')) {
    closeWordPopup();
  }
});

// Close word popup on scroll (it's fixed-position so would drift otherwise)
document.addEventListener('scroll', closeWordPopup, { passive: true });

// ── Init ──────────────────────────────────────────────────────────────────────

applySmartTargetLang();
charCount.textContent = t('chars', 0);
checkApiAvailability();
