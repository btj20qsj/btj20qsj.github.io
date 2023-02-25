fetch('https://btj20qsj.github.io/assets/Teachers.json')
    .then((response) => response.json())
    .then((json) => console.log(json));