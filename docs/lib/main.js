'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Dropdowns

  var $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.preventDefault();
        var target = $el.getAttribute('href');
        var $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
        // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
        return false;
      });
    });
  }

  // Dropdowns

  var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Toggles

  var $burgers = getAll('.burger');

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Clipboard

  var $highlights = getAll('.highlight');
  var itemsProcessed = 0;

  if ($highlights.length > 0) {
    $highlights.forEach(function ($el) {
      var copyEl = '<button class="button is-small el-copy">Copy</button>';
      var expandEl = '<button class="button is-small el-expand">Expand</button>';
      $el.insertAdjacentHTML('beforeend', copyEl);

      var $parent = $el.parentNode;
      if ($parent && $parent.classList.contains('el-is-more')) {
        var showEl = '<button class="el-show"><div><span class="icon"><i class="fa fa-code"></i></span> <strong>Show code</strong></div></button>';
        $el.insertAdjacentHTML('beforeend', showEl);
      } else if ($el.firstElementChild.scrollHeight > 480 && $el.firstElementChild.clientHeight <= 480) {
        $el.insertAdjacentHTML('beforeend', expandEl);
      }

      itemsProcessed++;
      if (itemsProcessed === $highlights.length) {
        addHighlightControls();
      }
    });
  }

  function addHighlightControls() {
    var $highlightButtons = getAll('.highlight .el-copy, .highlight .el-expand');

    $highlightButtons.forEach(function ($el) {
      $el.addEventListener('mouseenter', function () {
        $el.parentNode.classList.add('el-is-hovering');
      });

      $el.addEventListener('mouseleave', function () {
        $el.parentNode.classList.remove('el-is-hovering');
      });
    });

    var $highlightExpands = getAll('.highlight .el-expand');

    $highlightExpands.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $el.parentNode.firstElementChild.style.maxHeight = 'none';
      });
    });

    var $highlightShows = getAll('.highlight .el-show');

    $highlightShows.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $el.parentNode.parentNode.classList.remove('el-is-more-clipped');
      });
    });
  }

  new Clipboard('.el-copy', {
    target: function target(trigger) {
      return trigger.previousSibling;
    }
  });

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  // Scrolling

  var navbarEl = document.getElementById('navbar');
  var navbarBurger = document.getElementById('navbarBurger');
  var specialShadow = document.getElementById('specialShadow');
  var navbarHeight = 52;
  var navbarOpen = false;
  var pinned = false;
  var horizon = navbarHeight;
  var whereYouStoppedScrolling = 0;
  var threshold = 160;
  var scrollFactor = 0;

  navbarBurger.addEventListener('click', function (el) {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
      rootEl.classList.add('el-is-clipped-touch');
    } else {
      rootEl.classList.remove('el-is-clipped-touch');
    }
  });

  function upOrDown(lastY, currentY) {
    if (currentY >= lastY) {
      return goingDown(currentY);
    }
    return goingUp(currentY);
  }

  function goingDown(currentY) {
    var trigger = navbarHeight;
    whereYouStoppedScrolling = currentY;

    if (currentY > horizon) {
      horizon = currentY;
    }

    translateHeader(currentY);
  }

  function goingUp(currentY) {
    var trigger = 0;

    if (currentY < whereYouStoppedScrolling - navbarHeight) {
      horizon = currentY + navbarHeight;
    }

    translateHeader(currentY);
  }

  function constrainDelta(delta) {
    return Math.max(0, Math.min(delta, navbarHeight));
  }

  function translateHeader(currentY) {
    var delta = constrainDelta(Math.abs(currentY - horizon));
    var translateValue = delta - navbarHeight;
    var translateFactor = 1 + translateValue / navbarHeight;
    var navbarStyle = '\n      transform: translateY(' + translateValue + 'px);\n    ';

    if (currentY > threshold * 2) {
      scrollFactor = 1;
    } else if (currentY > threshold) {
      scrollFactor = (currentY - threshold) / threshold;
    } else {
      scrollFactor = 0;
    }
    specialShadow.style.opacity = scrollFactor;
    specialShadow.style.transform = 'scaleY(' + translateFactor + ')';

    navbarEl.setAttribute('style', navbarStyle);
  }

  translateHeader(window.scrollY);

  var ticking = false;
  var lastY = 0;
  window.addEventListener('scroll', function () {
    var currentY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        upOrDown(lastY, currentY);
        ticking = false;
        lastY = currentY;
      });
    }

    ticking = true;
  });
});
