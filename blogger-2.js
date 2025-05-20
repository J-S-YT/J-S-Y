function gerarCodigo() {
  const link = document.getElementById("link").value.trim();
  if (!link.startsWith("http")) {
    alert("Digite um link completo começando com http:// ou https://");
    return;
  }

  const partes = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <title>Redirecionando...</title>',
    '  <style>',
    '    html, body {',
    '      margin: 0;',
    '      padding: 0;',
    '      background-color: #111;',
    '      color: #fff;',
    '      font-family: sans-serif;',
    '      height: 100%;',
    '      overflow: hidden;',
    '    }',
    '    .popup {',
    '      position: fixed;',
    '      top: 0; left: 0;',
    '      width: 100%;',
    '      height: 100%;',
    '      background-color: #111;',
    '      display: flex;',
    '      justify-content: center;',
    '      align-items: center;',
    '      z-index: 9999;',
    '    }',
    '    .popup-content {',
    '      text-align: center;',
    '      font-size: 1.5rem;',
    '    }',
    '  </style>',
    '  <script>',
    '    document.addEventListener("DOMContentLoaded", function () {',
    '      setTimeout(function () {',
    '        window.location.href = "' + link + '";',
    '      }, 3000);',
    '    });',
    '  <\\/script>',
    '</head>',
    '<body>',
    '  <div class="popup">',
    '    <div class="popup-content">',
    '      Redirecionando, aguarde...',
    '    </div>',
    '  </div>',
    '</body>',
    '</html>'
  ];

  const codigo = partes.join('\n');
  document.getElementById("codigo").value = codigo;
}
