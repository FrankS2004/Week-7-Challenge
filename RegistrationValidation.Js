function handleSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(e.target);

    const name = formData.get('name');
    const email = formData.get('email');

    alert(`Submitted: ${name} — ${email}`);
}

const form = document.getElementById('registrationForm');
form.addEventListener('submit', handleSubmit);
