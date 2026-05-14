# Gemini Nano Translator

Local in-browser translation using Chrome's built-in [Prompt API](https://developer.chrome.com/docs/ai) (Gemini Nano). No server, no API key, no data leaves your machine.

## Requirements

- **Chrome 127+** (stable channel) with the Prompt API enabled
- Enable the flag: `chrome://flags/#prompt-api-for-gemini-nano` → **Enabled**
- Restart Chrome, then open `chrome://components` and trigger an update on the **Optimization Guide On Device Model** component to download the model (~1.7 GB)

## Features

- Translate between 8 languages: French, English, German, Spanish, Portuguese, Italian, Dutch, Polish
- Language register: Neutral / Formal / Informal / Technical
- Auto-detect source language
- Auto-translation on input (1 s debounce)
- Click any word in the translation to get alternatives
- Global translation alternatives panel
- Fully offline after model download
- UI available in 8 languages

## Files

| File | Purpose |
|------|---------|
| `index.html` + `app.js` | Main translator app |
| `diag.html` | API diagnostics & model download helper |
| `tests.html` | Jasmine unit + integration test suite |

## Live demo

[https://GromNaN.github.io/local-browser-translator](https://GromNaN.github.io/local-browser-translator)
*(requires Chrome with the Prompt API enabled)*
