const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

const validaImagem = (event) => {
  event.preventDefault();
};

const disable = () => {
  submitButton.disabled = !agreement.checked;
};

checkbox.addEventListener('change', disable);
submitButton.addEventListener('click', validaImagem);
