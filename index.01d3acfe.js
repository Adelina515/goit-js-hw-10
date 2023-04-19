const e=fetch(`https://restcountries.eu/rest/v2/name${n}?fields=name,flags,capital,population,languages`).then((e=>e.json())).then((e=>console.log(e)));var n;console.log(e);document.getElementById("search-box").addEventListener("input",_.debounce((function(){}),300));
//# sourceMappingURL=index.01d3acfe.js.map
