window.addEventListener('scroll', function() {
    var mainNav = document.getElementById('main-nav');
    var footer = document.getElementById('footer');
    var mainNavHeight = mainNav.offsetHeight;
    var footerPosition = footer.getBoundingClientRect().top;
  
    if (footerPosition <= window.innerHeight) {
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'block';
    }
  });
  