// ── Translations (UI i18n) ───────────────────────────────────────────────────
// I18N is defined in i18n/translations.js, loaded before this script.

// ── Content languages ────────────────────────────────────────────────────────

const LANGUAGES = [
  { code: 'auto', labelKey: 'auto_detect' },
  { code: 'fr',  label: 'Français' },
  { code: 'en',  label: 'English' },
  { code: 'de',  label: 'Deutsch' },
  { code: 'es',  label: 'Español' },
  { code: 'pt',  label: 'Português' },
  { code: 'it',  label: 'Italiano' },
  { code: 'nl',  label: 'Nederlands' },
  { code: 'pl',  label: 'Polski' },
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
  de: ['Hallo', 'Hi', 'Guten Tag'],
  es: ['Hola', '¡Buenas!', 'Buenos días'],
  pt: ['Olá', 'Oi', 'Bom dia'],
  it: ['Ciao', 'Salve', 'Buongiorno'],
  nl: ['Hallo', 'Hoi', 'Goedendag'],
  pl: ['Cześć', 'Hej', 'Dzień dobry'],
};

const HELLO = {
  fr: 'Bonjour', en: 'Hello', de: 'Hallo', es: 'Hola',
  pt: 'Olá',     it: 'Ciao',  nl: 'Hallo', pl: 'Cześć',
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
