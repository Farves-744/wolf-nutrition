const base_url = 'https://wnode.wolfnutritionkw.com/'

const data = {
    id: 3
}

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

function getPrivacyPolicy() {
    fetch(base_url + 'setting/app/public', requestOptions)
        .then(response => response.json())
        .then(data => {
            const datas = JSON.parse(data.content)
            const apiDataDiv = document.getElementById('privacy-policy');
            apiDataDiv.innerHTML = datas.en;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

window.onload = getPrivacyPolicy;