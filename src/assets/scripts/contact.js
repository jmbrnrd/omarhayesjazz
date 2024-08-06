export default function () {
    const api = 'https://api.restaurantcollective.io';
    const btnSubmit = document.getElementById('btnSubmit')
    console.log(`API ${api}`);
    // grab form
    const form = document.getElementById('contactForm');
    // on submit
    if(!!form) {
        form.addEventListener('submit', (e) => {

            e.preventDefault();

            sending();

            // get key/value pairs
            const userData = Object.fromEntries(new FormData(form));
            // Add the keys
            const formObj = Object.assign(userData, {
                api_key: 'e21421ieb2l1eb2134g21ieg21be2i1n42432',
                user_code: 'CF-418-apptiser'
            });

            //console.log(formObj);

            fetch(`${api}/public/sendcontactfromwebsite`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formObj)
            })
                .then(response => {
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (response.message) || response.status;
                        return Promise.reject(error);
                    }
                    // display success
                    success(response);
                })
                .catch(error => {
                    console.log(`Error: ${error}`);
                    alert('Sorry, but something went wrong, please try submitting your details again.')
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = 'SUBMIT AGAIN';
                });
        });
    }

    function sending() {
        btnSubmit.innerHTML = 'SENDING';
        btnSubmit.disabled = true;
    }
    function success() {
        btnSubmit.style.backgroundColor = '#8dd910';
        btnSubmit.style.color = '#000';
        btnSubmit.innerHTML = "Ok, we'll be in touch.";
    }


}


