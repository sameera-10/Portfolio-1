const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

// Contact form
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").innerText = "Message sent successfully 🚀";
    form.reset();
  });
}
