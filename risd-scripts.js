// Header menu button toggling

    (function(){
      function setupToggle(buttonId, menuId) {
        const btn = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);
        if (!btn || !menu) {
          console.warn('setupToggle: missing element', { buttonId, menuId, btn, menu });
          return;
        }

        function open() {
          console.debug('open menu', menuId);
          btn.setAttribute('aria-expanded', 'true');
          menu.removeAttribute('hidden');
          menu.classList.add('open');
        }
        function close() {
          console.debug('close menu', menuId);
          btn.setAttribute('aria-expanded', 'false');
          menu.setAttribute('hidden', '');
          menu.classList.remove('open');
        }

        btn.addEventListener('click', function (e) {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          if (expanded) close(); else open();
        });

        document.addEventListener('click', function (e) {
          if (!menu.classList.contains('open')) return;
          if (btn.contains(e.target) || menu.contains(e.target)) return;
          close();
        });

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && menu.classList.contains('open')) {
            close();
            btn.focus();
          }
        });
      }

      function init() {
        setupToggle('menu-toggle', 'menu-list');
        setupToggle('mobile-toggle', 'mobile-menu-list');
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
