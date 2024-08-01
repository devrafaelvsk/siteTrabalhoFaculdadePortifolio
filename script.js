// animação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

const form = document.querySelector('form'); 
const btnEnviar = form.querySelector('button[type="submit"]'); 

// evento de clik
btnEnviar.addEventListener('click', function(event) {
  event.preventDefault(); 
  alert('Mensagem enviada com sucesso!');
  form.reset();
});
