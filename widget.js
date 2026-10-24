/* ============================================================
 * CheckMyMOT Garage Widget v1.0.0
 * Free embeddable "Check your MOT" box for UK garage websites.
 *
 * INSTALL (for garages — paste where the box should appear):
 *   <div class="cmm-mot-widget"></div>
 *   <script src="WIDGET_JS_URL" async></script>
 *
 * Replace WIDGET_JS_URL with the published URL of this file, e.g.
 *   https://checkmymot.github.io/garage-widget/widget.js
 * (UPDATE the CHECKER_URL below too if the site domain ever changes.)
 *
 * How it works: the visitor types a registration, clicks the button,
 * and the full free MOT history checker opens on checkmymot.com in a
 * new tab. No API keys, no tracking, no dependencies.
 * ============================================================ */
(function () {
  'use strict';

  /* ---------- config ---------- */
  var CHECKER_URL = 'https://checkmymot.com/full-mot-history-checker/';
  var BRAND_URL = 'https://checkmymot.com/';
  var BRAND_NAME = 'CheckMyMOT';

  /* ---------- styles (scoped, no global leakage) ---------- */
  var CSS = [
    '.cmmw{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;padding:20px;max-width:340px;box-shadow:0 6px 24px rgba(2,32,71,.08)}',
    '.cmmw *{box-sizing:border-box;margin:0;padding:0}',
    '.cmmw-title{font-size:17px;font-weight:800;color:#0B1933;margin-bottom:4px}',
    '.cmmw-sub{font-size:13px;color:#5b6b7a;margin-bottom:12px;line-height:1.45}',
    '.cmmw-row{display:flex;gap:8px}',
    '.cmmw-input{flex:1;min-width:0;border:1px solid #cbd5e1;border-radius:8px;padding:10px 12px;font-size:15px;text-transform:uppercase}',
    '.cmmw-input:focus{outline:2px solid #FDC429;border-color:#FDC429}',
    '.cmmw-btn{background:#0B1933;color:#fff;border:0;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap}',
    '.cmmw-btn:hover{background:#16294d}',
    '.cmmw-err{display:none;font-size:12px;color:#b91c1c;margin-top:8px}',
    '.cmmw-foot{margin-top:12px;font-size:11px;color:#8a97a3;text-align:center}',
    '.cmmw-foot a{color:#0B1933;font-weight:700;text-decoration:none}',
    '.cmmw-foot a:hover{text-decoration:underline}'
  ].join('');

  function cleanReg(s) {
    return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  }

  function build(host) {
    var useShadow = host.attachShadow && true;
    var root = useShadow ? host.attachShadow({ mode: 'open' }) : host;
    if (useShadow) {
      var st = document.createElement('style');
      st.textContent = CSS;
      root.appendChild(st);
    }
    var box = document.createElement('div');
    box.className = 'cmmw';
    box.innerHTML =
      '<div class="cmmw-title">Check your MOT</div>' +
      '<div class="cmmw-sub">Free MOT history &amp; due date, straight from DVSA records.</div>' +
      '<div class="cmmw-row">' +
      '<input class="cmmw-input" type="text" maxlength="10" placeholder="AB12 CDE" aria-label="Vehicle registration" />' +
      '<button class="cmmw-btn" type="button">Check free</button>' +
      '</div>' +
      '<div class="cmmw-err">Please enter a valid registration.</div>' +
      '<div class="cmmw-foot">Powered by <a href="' + BRAND_URL + '" target="_blank" rel="noopener">CheckMyMOT</a> — free UK MOT checks</div>';
    root.appendChild(box);

    var input = box.querySelector('.cmmw-input');
    var btn = box.querySelector('.cmmw-btn');
    var err = box.querySelector('.cmmw-err');

    function go() {
      var reg = cleanReg(input.value);
      if (reg.length < 2) {
        err.style.display = 'block';
        input.focus();
        return;
      }
      err.style.display = 'none';
      /* v1: open the free checker. (v2 idea: ?reg= prefill once the
         checker page supports it — no checker changes needed for v1.) */
      window.open(CHECKER_URL, '_blank', 'noopener');
    }
    btn.addEventListener('click', go);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); go(); }
    });
  }

  function init() {
    var hosts = document.querySelectorAll('.cmm-mot-widget');
    for (var i = 0; i < hosts.length; i++) {
      if (!hosts[i].dataset.cmmwDone) {
        hosts[i].dataset.cmmwDone = '1';
        try { build(hosts[i]); } catch (e) { /* never break the host page */ }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
