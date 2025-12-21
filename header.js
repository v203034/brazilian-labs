fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);

    const page = document.body.dataset.page;
    const links = document.querySelectorAll(".page-menu a");
    links.forEach(a => {
      if(a.dataset.page === page) a.classList.add("active");
    });
  });
