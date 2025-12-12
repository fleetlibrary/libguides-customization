// general tracking stuff

springSpace.Common = springSpace.Common || {};
springSpace.Common.constant = { PROCESSING: { ACTION_DISPLAY_POLL: 159 } };
springSpace.Common.baseURL = "//lgapi-us.libapps.com'/";
springSpace.Common.apiLoad = true;


var springStats = springStats || {};
springStats.saConfig = springStats.saConfig || {
  site_id: 815,
  tracking_parameters: { "_st_site_id": 815 },
  tracking_server_host: "libguides-proc.springyaws.com"
};

springSpace.Common = springSpace.Common || {};
springSpace.Common.constant = { PROCESSING: { ACTION_DISPLAY_POLL: 159 } };
springSpace.Common.baseURL = "//lgapi-us.libapps.com'/";
springSpace.Common.apiLoad = true;

// Header menu button toggle

(function () {
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



// Tab switching for homepage search box

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.search-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.search-tabs .tab-content');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      const content = document.getElementById(tabId);
      if (content) content.classList.add('active');
    });
  });
});

// LibCal widgets
// Populate live hours

function getData() {
  fetch('https://api3.libcal.com/api_hours_grid.php?iid=618&format=json&weeks=1&systemTime=0', {
    method: 'GET',
    mode: 'cors',
  })
    .then(response => response.json())
    .then(data => {
      buildTable(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

getData();
let today = new Date();

function getToday() {
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = yyyy + "-" + mm + "-" + dd;
}
function buildTable(data) {
  let tr = "";
  let loc = document.querySelector('table.hours')?.id == "vmrc" ? 2 : document.querySelector('table.hours')?.id == "special" ? 3 : document.querySelector('table.hours')?.id == "circ" ? 1 : 'all';
  getToday();
  if (loc == 'all') {
    tr = "";
  } else {
    let week_data = data["locations"][loc].weeks[0];
    for (const day in week_data) {
      value = week_data[day];
      var dayname = "<td>" + day + " ";
      var date = value.date.substring(5).replace("-", "/") + "</td>";
      var times = "<td>" + value.rendered + "</td>";
      if (value.date === today) {
        tr += "<tr class='today'>" + dayname + date + times + "</tr>";
      } else {
        tr += "<tr>" + dayname + date + times + "</tr>";
      }
    };
  }
  const table = document.querySelector('table.hours');
  if (table) {
    table.innerHTML = tr;
  }
}


var springStats = springStats || {};
springStats.saConfig = springStats.saConfig || {
  site_id: 815,
  tracking_parameters: { "_st_site_id": 815 },
  tracking_server_host: "libguides-proc.springyaws.com"
};

springSpace.Common = springSpace.Common || {};
springSpace.Common.constant = { PROCESSING: { ACTION_DISPLAY_POLL: 159 } };
springSpace.Common.baseURL = "//lgapi-us.libapps.com'/";
springSpace.Common.apiLoad = true;
