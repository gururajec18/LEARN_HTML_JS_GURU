/**
 * HTML & JavaScript Coding Studio - Main Application Controller
 * Developed by Gururaj Surampalli
 */

document.addEventListener("DOMContentLoaded", () => {
  // ================= STATE =================
  let currentItem = null; // Currently loaded example or mini-project
  let currentCode = {
    html: "",
    css: "",
    js: ""
  };
  let activeEditorTab = "html";
  let activeViewTab = "preview";
  let autoRunTimer = null;
  let consoleHistory = [];

  // ================= DOM ELEMENTS =================
  const elements = {
    // Header
    menuToggle: document.getElementById("menuToggle"),
    sidebar: document.getElementById("sidebar"),
    searchInput: document.getElementById("searchInput"),

    // Sidebar navigation
    sidebarTabs: document.querySelectorAll(".sidebar-tab-btn"),
    sidebarContent: document.getElementById("sidebarContent"),

    // Workspace top
    currentTitle: document.getElementById("currentTitle"),
    currentCategory: document.getElementById("currentCategory"),
    btnOpenLesson: document.getElementById("btnOpenLesson"),

    // Editor
    editorTabs: document.querySelectorAll(".editor-tabs .tab-btn"),
    htmlEditor: document.getElementById("htmlCode"),
    cssEditor: document.getElementById("cssCode"),
    jsEditor: document.getElementById("jsCode"),
    htmlLines: document.getElementById("htmlLines"),
    cssLines: document.getElementById("cssLines"),
    jsLines: document.getElementById("jsLines"),
    chkAutoRun: document.getElementById("chkAutoRun"),

    // Editor action bar
    btnRun: document.getElementById("btnRun"),
    btnReset: document.getElementById("btnReset"),
    btnClear: document.getElementById("btnClear"),
    btnCopy: document.getElementById("btnCopy"),
    btnDownload: document.getElementById("btnDownload"),

    // Preview & Console
    previewTabs: document.querySelectorAll(".preview-tabs .tab-btn"),
    previewContainer: document.getElementById("previewContainer"),
    previewIframe: document.getElementById("previewIframe"),
    consoleContainer: document.getElementById("consoleContainer"),
    consoleLogs: document.getElementById("consoleLogs"),
    btnClearConsole: document.getElementById("btnClearConsole"),
    consoleBadge: document.getElementById("consoleBadge"),
    btnFullscreen: document.getElementById("btnFullscreen"),

    // Modal
    lessonModalBackdrop: document.getElementById("lessonModalBackdrop"),
    modalTitle: document.getElementById("modalTitle"),
    modalBody: document.getElementById("modalBody"),
    btnCloseModal: document.getElementById("btnCloseModal"),
    btnModalLoadExample: document.getElementById("btnModalLoadExample"),

    // Toast
    toast: document.getElementById("toast"),
    toastMsg: document.getElementById("toastMsg")
  };

  // ================= TOAST NOTIFICATION =================
  function showToast(message, duration = 2500) {
    if (!elements.toast) return;
    elements.toastMsg.textContent = message;
    elements.toast.classList.add("show");
    setTimeout(() => {
      elements.toast.classList.remove("show");
    }, duration);
  }

  // ================= LINE NUMBERS & EDITOR UTILITIES =================
  function updateLineNumbers(textarea, lineNumbersContainer) {
    if (!textarea || !lineNumbersContainer) return;
    const lines = textarea.value.split("\n").length;
    let lineNumsStr = "";
    for (let i = 1; i <= Math.max(lines, 1); i++) {
      lineNumsStr += i + "<br>";
    }
    lineNumbersContainer.innerHTML = lineNumsStr;
  }

  function setupTextarea(textarea, lineContainer, key) {
    if (!textarea) return;

    // Line number updates
    updateLineNumbers(textarea, lineContainer);
    textarea.addEventListener("input", () => {
      currentCode[key] = textarea.value;
      updateLineNumbers(textarea, lineContainer);
      if (elements.chkAutoRun && elements.chkAutoRun.checked) {
        clearTimeout(autoRunTimer);
        autoRunTimer = setTimeout(runCode, 700);
      }
    });

    // Synchronize scrolling
    textarea.addEventListener("scroll", () => {
      if (lineContainer) {
        lineContainer.scrollTop = textarea.scrollTop;
      }
    });

    // Tab key support & Indent handling
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        textarea.value = value.substring(0, start) + "  " + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        currentCode[key] = textarea.value;
        updateLineNumbers(textarea, lineContainer);
      } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runCode();
      }
    });
  }

  setupTextarea(elements.htmlEditor, elements.htmlLines, "html");
  setupTextarea(elements.cssEditor, elements.cssLines, "css");
  setupTextarea(elements.jsEditor, elements.jsLines, "js");

  // Switch Editor Tabs (HTML / CSS / JS)
  elements.editorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      elements.editorTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.tab;
      activeEditorTab = target;

      document.querySelectorAll(".editor-container").forEach(c => c.classList.remove("active"));
      const targetContainer = document.getElementById(`${target}Container`);
      if (targetContainer) targetContainer.classList.add("active");

      // Focus active textarea
      const targetArea = document.getElementById(`${target}Code`);
      if (targetArea) targetArea.focus();
    });
  });

  // Switch Preview / Console Views
  elements.previewTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      elements.previewTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const view = tab.dataset.view;
      activeViewTab = view;

      if (view === "preview") {
        elements.previewContainer.style.display = "block";
        elements.consoleContainer.classList.remove("active");
      } else {
        elements.previewContainer.style.display = "none";
        elements.consoleContainer.classList.add("active");
      }
    });
  });

  // ================= CONSOLE BRIDGE =================
  function appendConsoleLog(level, args, time) {
    const logItem = document.createElement("div");
    logItem.className = `console-log-item ${level}`;

    const timeSpan = document.createElement("span");
    timeSpan.className = "console-time";
    timeSpan.textContent = time || new Date().toLocaleTimeString().split(" ")[0];

    const contentSpan = document.createElement("span");
    contentSpan.className = "console-content";

    // Format logged objects and arguments
    const formatted = args.map(arg => {
      if (typeof arg === "object" && arg !== null) {
        try {
          return JSON.stringify(arg, null, 2);
        } catch {
          return String(arg);
        }
      }
      return String(arg);
    }).join(" ");

    contentSpan.textContent = formatted;
    logItem.appendChild(timeSpan);
    logItem.appendChild(contentSpan);

    elements.consoleLogs.appendChild(logItem);
    elements.consoleLogs.scrollTop = elements.consoleLogs.scrollHeight;

    consoleHistory.push({ level, args, time });
    updateConsoleBadge();
  }

  function updateConsoleBadge() {
    if (!elements.consoleBadge) return;
    const count = consoleHistory.length;
    if (count > 0) {
      elements.consoleBadge.textContent = count;
      elements.consoleBadge.style.display = "inline-block";
    } else {
      elements.consoleBadge.style.display = "none";
    }
  }

  function clearConsole() {
    elements.consoleLogs.innerHTML = "";
    consoleHistory = [];
    updateConsoleBadge();
    showToast("Console cleared");
  }

  if (elements.btnClearConsole) {
    elements.btnClearConsole.addEventListener("click", clearConsole);
  }

  // Intercept postMessage from sandboxed iframe
  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SANDBOX_CONSOLE") {
      appendConsoleLog(event.data.level, event.data.args, event.data.time);
    }
  });

  // ================= EXECUTION ENGINE =================
  function runCode() {
    consoleHistory = [];
    elements.consoleLogs.innerHTML = "";
    updateConsoleBadge();

    const html = currentCode.html || "";
    const css = currentCode.css || "";
    const js = currentCode.js || "";

    // Sandboxed script with console interception wrapper
    const sandboxDocument = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${css}
        </style>
        <script>
          // Console Interception Hook
          (function() {
            const sendLog = (level, args) => {
              try {
                window.parent.postMessage({
                  type: 'SANDBOX_CONSOLE',
                  level: level,
                  args: Array.from(args).map(a => {
                    try {
                      return (typeof a === 'object' && a !== null) ? JSON.parse(JSON.stringify(a)) : String(a);
                    } catch (e) {
                      return String(a);
                    }
                  }),
                  time: new Date().toLocaleTimeString().split(' ')[0]
                }, '*');
              } catch(e) {}
            };

            const origLog = console.log;
            const origInfo = console.info;
            const origWarn = console.warn;
            const origError = console.error;

            console.log = function(...args) { sendLog('log', args); origLog.apply(console, args); };
            console.info = function(...args) { sendLog('info', args); origInfo.apply(console, args); };
            console.warn = function(...args) { sendLog('warn', args); origWarn.apply(console, args); };
            console.error = function(...args) { sendLog('error', args); origError.apply(console, args); };

            window.onerror = function(msg, url, line, col, err) {
              sendLog('error', ['[Runtime Error] ' + msg + ' (Line: ' + line + ')']);
              return false;
            };
          })();
        <\/script>
      </head>
      <body>
        ${html}
        <script>
          try {
            ${js}
          } catch(err) {
            console.error("[Script Error]: " + err.message);
          }
        <\/script>
      </body>
      </html>
    `;

    // Apply into iframe
    elements.previewIframe.srcdoc = sandboxDocument;
    showToast("▶ Program executed successfully!");
  }

  elements.btnRun.addEventListener("click", runCode);

  // ================= LOAD ITEM INTO WORKSPACE =================
  function loadItem(item) {
    currentItem = item;
    currentCode = {
      html: item.html || "",
      css: item.css || "",
      js: item.js || ""
    };

    // Update textareas
    elements.htmlEditor.value = currentCode.html;
    elements.cssEditor.value = currentCode.css;
    elements.jsEditor.value = currentCode.js;

    // Update line numbers
    updateLineNumbers(elements.htmlEditor, elements.htmlLines);
    updateLineNumbers(elements.cssEditor, elements.cssLines);
    updateLineNumbers(elements.jsEditor, elements.jsLines);

    // Update Workspace Top Bar
    elements.currentTitle.textContent = item.title;
    elements.currentCategory.textContent = item.category || "Example";

    // Update active nav item styling
    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.id === item.id);
    });

    // Check if lesson notes exist for this item
    const hasLesson = APP_DATA.htmlBasics.some(b => b.exampleId === item.id) || 
                      APP_DATA.jsBasics.some(b => b.exampleId === item.id);
    if (elements.btnOpenLesson) {
      elements.btnOpenLesson.style.display = hasLesson ? "inline-flex" : "none";
    }

    // Execute initial run
    runCode();
  }

  // ================= RESET & CLEAR =================
  elements.btnReset.addEventListener("click", () => {
    if (!currentItem) return;
    loadItem(currentItem);
    showToast("↺ Reverted code to original template");
  });

  elements.btnClear.addEventListener("click", () => {
    currentCode = { html: "", css: "", js: "" };
    elements.htmlEditor.value = "";
    elements.cssEditor.value = "";
    elements.jsEditor.value = "";

    updateLineNumbers(elements.htmlEditor, elements.htmlLines);
    updateLineNumbers(elements.cssEditor, elements.cssLines);
    updateLineNumbers(elements.jsEditor, elements.jsLines);

    runCode();
    showToast("🗑 Editor cleared");
  });

  // ================= COPY & DOWNLOAD =================
  elements.btnCopy.addEventListener("click", () => {
    const textToCopy = currentCode[activeEditorTab];
    if (!textToCopy) {
      showToast("Tab is empty!");
      return;
    }
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(`📋 Copied ${activeEditorTab.toUpperCase()} code!`);
    }).catch(() => {
      showToast("Unable to copy to clipboard.");
    });
  });

  elements.btnDownload.addEventListener("click", () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${currentItem ? currentItem.title : "Code Export"} - By Gururaj Surampalli</title>
  <style>
${currentCode.css}
  </style>
</head>
<body>
${currentCode.html}

  <script>
${currentCode.js}
  <\/script>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(currentItem ? currentItem.title : "coding-project").toLowerCase().replace(/[^a-z0-9]/g, "-")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("⬇ Downloaded standalone HTML file!");
  });

  // ================= FULLSCREEN PREVIEW =================
  elements.btnFullscreen.addEventListener("click", () => {
    if (elements.previewIframe.requestFullscreen) {
      elements.previewIframe.requestFullscreen();
    } else if (elements.previewIframe.webkitRequestFullscreen) {
      elements.previewIframe.webkitRequestFullscreen();
    }
  });

  // ================= LESSON MODAL =================
  function openLessonModal(lesson) {
    if (!lesson) return;
    elements.modalTitle.textContent = lesson.title;
    elements.modalBody.innerHTML = lesson.content;

    // Check if there is an associated practical example
    const linkedExample = APP_DATA.examples.find(ex => ex.id === lesson.exampleId);
    if (linkedExample) {
      elements.btnModalLoadExample.style.display = "inline-flex";
      elements.btnModalLoadExample.onclick = () => {
        loadItem(linkedExample);
        closeLessonModal();
      };
    } else {
      elements.btnModalLoadExample.style.display = "none";
    }

    elements.lessonModalBackdrop.classList.add("active");
  }

  function closeLessonModal() {
    elements.lessonModalBackdrop.classList.remove("active");
  }

  elements.btnCloseModal.addEventListener("click", closeLessonModal);
  elements.lessonModalBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.lessonModalBackdrop) closeLessonModal();
  });

  if (elements.btnOpenLesson) {
    elements.btnOpenLesson.addEventListener("click", () => {
      if (!currentItem) return;
      const lesson = APP_DATA.htmlBasics.find(b => b.exampleId === currentItem.id) ||
                     APP_DATA.jsBasics.find(b => b.exampleId === currentItem.id);
      if (lesson) openLessonModal(lesson);
    });
  }

  // ================= SIDEBAR RENDERING =================
  let currentNavCategory = "examples"; // 'examples', 'html', 'js', 'projects'

  function renderSidebar(filterQuery = "") {
    elements.sidebarContent.innerHTML = "";
    const query = filterQuery.toLowerCase().trim();

    if (currentNavCategory === "examples") {
      const filtered = APP_DATA.examples.filter(ex => 
        ex.title.toLowerCase().includes(query) ||
        ex.category.toLowerCase().includes(query) ||
        ex.description.toLowerCase().includes(query)
      );

      const titleEl = document.createElement("div");
      titleEl.className = "sidebar-section-title";
      titleEl.innerHTML = `<span>15+ Practical Examples</span><span>${filtered.length}</span>`;
      elements.sidebarContent.appendChild(titleEl);

      filtered.forEach(ex => {
        const btn = document.createElement("button");
        btn.className = `nav-item ${currentItem && currentItem.id === ex.id ? 'active' : ''}`;
        btn.dataset.id = ex.id;
        btn.innerHTML = `
          <div class="nav-item-title">
            <span>💡</span>
            <span>${ex.title}</span>
          </div>
          <span class="badge-tag">${ex.difficulty || 'Easy'}</span>
        `;
        btn.addEventListener("click", () => {
          loadItem(ex);
          if (window.innerWidth <= 960) {
            elements.sidebar.classList.remove("open");
          }
        });
        elements.sidebarContent.appendChild(btn);
      });
    } else if (currentNavCategory === "html") {
      const filtered = APP_DATA.htmlBasics.filter(h => 
        h.title.toLowerCase().includes(query) || 
        h.summary.toLowerCase().includes(query)
      );

      const titleEl = document.createElement("div");
      titleEl.className = "sidebar-section-title";
      titleEl.innerHTML = `<span>HTML Basics & Guide</span><span>${filtered.length} Topics</span>`;
      elements.sidebarContent.appendChild(titleEl);

      filtered.forEach(lesson => {
        const btn = document.createElement("button");
        btn.className = "nav-item";
        btn.innerHTML = `
          <div class="nav-item-title">
            <span>📘</span>
            <span>${lesson.title}</span>
          </div>
          <span class="badge-tag">Learn</span>
        `;
        btn.addEventListener("click", () => {
          openLessonModal(lesson);
          if (window.innerWidth <= 960) {
            elements.sidebar.classList.remove("open");
          }
        });
        elements.sidebarContent.appendChild(btn);
      });
    } else if (currentNavCategory === "js") {
      const filtered = APP_DATA.jsBasics.filter(j => 
        j.title.toLowerCase().includes(query) || 
        j.summary.toLowerCase().includes(query)
      );

      const titleEl = document.createElement("div");
      titleEl.className = "sidebar-section-title";
      titleEl.innerHTML = `<span>JavaScript Basics & Logic</span><span>${filtered.length} Topics</span>`;
      elements.sidebarContent.appendChild(titleEl);

      filtered.forEach(lesson => {
        const btn = document.createElement("button");
        btn.className = "nav-item";
        btn.innerHTML = `
          <div class="nav-item-title">
            <span>⚡</span>
            <span>${lesson.title}</span>
          </div>
          <span class="badge-tag">Learn</span>
        `;
        btn.addEventListener("click", () => {
          openLessonModal(lesson);
          if (window.innerWidth <= 960) {
            elements.sidebar.classList.remove("open");
          }
        });
        elements.sidebarContent.appendChild(btn);
      });
    } else if (currentNavCategory === "projects") {
      const filtered = APP_DATA.miniProjects.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );

      const titleEl = document.createElement("div");
      titleEl.className = "sidebar-section-title";
      titleEl.innerHTML = `<span>HTML + JS Mini Projects</span><span>${filtered.length} Projects</span>`;
      elements.sidebarContent.appendChild(titleEl);

      filtered.forEach(proj => {
        const btn = document.createElement("button");
        btn.className = `nav-item ${currentItem && currentItem.id === proj.id ? 'active' : ''}`;
        btn.dataset.id = proj.id;
        btn.innerHTML = `
          <div class="nav-item-title">
            <span>🚀</span>
            <span>${proj.title}</span>
          </div>
          <span class="badge-tag">Full App</span>
        `;
        btn.addEventListener("click", () => {
          loadItem(proj);
          if (window.innerWidth <= 960) {
            elements.sidebar.classList.remove("open");
          }
        });
        elements.sidebarContent.appendChild(btn);
      });
    }
  }

  // Sidebar Category Tabs Click
  elements.sidebarTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      elements.sidebarTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentNavCategory = tab.dataset.category;
      renderSidebar(elements.searchInput.value);
    });
  });

  // Search Input filter
  elements.searchInput.addEventListener("input", (e) => {
    renderSidebar(e.target.value);
  });

  // Mobile Menu Toggle
  elements.menuToggle.addEventListener("click", () => {
    elements.sidebar.classList.toggle("open");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 960 && elements.sidebar.classList.contains("open")) {
      if (!elements.sidebar.contains(e.target) && !elements.menuToggle.contains(e.target)) {
        elements.sidebar.classList.remove("open");
      }
    }
  });

  // ================= INITIAL BOOTSTRAP =================
  // Initial navigation rendering
  renderSidebar();

  // Load first practical example by default
  if (APP_DATA.examples.length > 0) {
    loadItem(APP_DATA.examples[0]);
  }

  console.log("HTML & JavaScript Coding Studio loaded. Developed by Gururaj Surampalli.");
});
