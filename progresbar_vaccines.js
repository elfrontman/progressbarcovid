const URL_API = "https://covid.ourworldindata.org/data/vaccinations/vaccinations.json";
const progressbar = document.getElementById('vaccinedprogress')
const progressbar_fully = document.getElementById('vaccinedprogress_fully')
const date_update = document.getElementById('date_update')

fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        const colombia = data.find(x => x.iso_code == 'COL');
        const vaccined = colombia.data.slice(-1)[0]
        
        const percentPrint = `${vaccined.people_vaccinated_per_hundred}%`
        progressbar.style.width = percentPrint;
        progressbar.innerHTML = percentPrint;
        
        const percentPrint_fully = `${vaccined.people_fully_vaccinated_per_hundred}%`
        progressbar_fully.style.width = percentPrint_fully;
        progressbar_fully.innerHTML = percentPrint_fully;

        date_update.innerText = vaccined.date
        
    })