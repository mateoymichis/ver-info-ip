import KEY from './key.js';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': KEY,
      'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
    }
  };

  const fetchIpInfo = ip => {
    return fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, options)
    .then(res => res.json())
    .catch(err=> console.error(err))
  }

  const form = document.querySelector('#form');
  const input = document.querySelector('#input');
  const submit = document.querySelector('#submit');
  const results = document.querySelector('#results');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {value} = input;
    if (!value) return;

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-busy','true');

    const ipInfo = await fetchIpInfo(value);

    if(ipInfo) {
        results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    submit.removeAttribute('disabled');
    submit.removeAttribute('aria-busy');
  });
  
  
