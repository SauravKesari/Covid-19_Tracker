
const btn=document.querySelector(".searchButton");
btn.addEventListener("click",updateData);
function updateData(){
    const search=document.getElementById("searchtext").value;
    alert(search);
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.Countries);
        rsp.Countries.forEach(element => {
            if(element.Country==search){
                document.getElementById("country").innerHTML=element.Country;
                document.getElementById("nc").innerHTML=element.NewConfirmed;
                document.getElementById("nr").innerHTML=element.NewRecovered;
                document.getElementById("nd").innerHTML=element.NewDeaths;
                document.getElementById("td").innerHTML=element.TotalDeaths;
                document.getElementById("tc").innerHTML=element.TotalConfirmed;
                document.getElementById("tr").innerHTML=element.TotalRecovered;
            }
           
        });
        
    });
}
