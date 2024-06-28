let formData = {
    email: "",
    message: ""
};

function updateFormData(event) {
    const { name, value } = event.target;
    formData = {
        ...formData,
        [name]: value.trim()
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', function () {
    const savedFormData = localStorage.getItem("feedback-form-state");
    if (savedFormData) {
        formData = JSON.parse(savedFormData);
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
});

const form = document.querySelector('.feedback-form');
form.addEventListener('input', updateFormData);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (formData.email && formData.message) {
        console.log(formData);

        localStorage.removeItem("feedback-form-state");
        formData = { email: "", message: "" };
        form.reset();
    } else {
        alert("Fill please all fields");
    }
});