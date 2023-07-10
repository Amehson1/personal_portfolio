   const links = document.querySelectorAll('nav ul li a');
  
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  const form = document.getElementById("myForm");
  from.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields")
      return;
    }
  
    form.submit();
  });