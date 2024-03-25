var tvs = [
    {
        nom : 'SAMSUNG QLED QE65Q80AA',
        prix : 17999,
        taille : 65,
        image : 'TVS/img1.jpg',
    },
    {
        nom : 'TCL QLED 55C825',
        prix : 6100,
        taille : 42,
        image : 'TVS/img2.jpg',
    },
    {
        nom : 'SONY OLED XR-75X90J',
        prix : 25000,
        taille : 52,
        image : 'TVS/img3.jpg',
    },
    {
        nom : 'LG OLED 77C1PVA',
        prix : 9000,
        taille : 65,
        image : 'TVS/img4.jpeg',
    }
]

tvs_Comands = []

var totale = 0;
var ttcPrix = 0;
var tva = 0 ;
var tvInput = document.getElementById("tv");
var quantityInput = document.getElementById("quantity");
var i = 0;
    
var dh = document.getElementById("dh");
var ttc = document.getElementById("dd");


function Verifier(){
    

    if (tvInput.value == "" || Number(quantityInput.value) == "" || Number(quantityInput.value) < 1 || Number(quantityInput.value) > 10){
        alert("Thats not good enough try harder")
    }
    else{
        switch(tvInput.value){
            case'SAMSUNG QLED QE65Q80AA':
                i++
                var table = document.getElementById("table");
                var tr = document.createElement("tr");
                

                var tdRef = document.createElement("td");
                tdRef.innerHTML = tvs[0].nom

                var tdQuatt = document.createElement("td");
                tdQuatt.innerHTML = Number(quantityInput.value);

                var tdImg = document.createElement("td");
                
                tdImg.innerHTML = '<img src="TVS/img1.jpg" width="150px">'

                var tdAct = document.createElement("td");
                var but = document.createElement("input");
                but.type = "button";
                but.value = "Supprimer";
                but.onclick = function() {
                    Supprimer(tr); // Pass the row element to Supprimer function
                };
                
                tdAct.appendChild(but);



                tr.appendChild(tdRef);
                tr.appendChild(tdQuatt);
                tr.appendChild(tdImg);
                tr.appendChild(tdAct);
                table.appendChild(tr);
                

                totale = totale + (tvs[0].prix * Number(quantityInput.value));
                dh.innerHTML = totale

                a={
                    reference : tvs[0].nom , 
                    quantite : Number(quantityInput.value)
                }
                tvs_Comands.push(a)
                
                break;



            case'TCL QLED 55C825':
                i++
                var table = document.getElementById("table");
                var tr = document.createElement("tr");

                var tdRef = document.createElement("td");
                tdRef.innerHTML = tvs[1].nom

                var tdQuatt = document.createElement("td");
                tdQuatt.innerHTML = Number(quantityInput.value);

                var tdImg = document.createElement("td");
                
                tdImg.innerHTML = '<img src="TVS/img2.jpg" width="150px">'

                var tdAct = document.createElement("td");
                var but = document.createElement("input");
                but.type = "button";
                but.value = "Supprimer";
                but.onclick = function() {
                    Supprimer(tr); // Pass the row element to Supprimer function
                };
                
                tdAct.appendChild(but);



                tr.appendChild(tdRef);
                tr.appendChild(tdQuatt);
                tr.appendChild(tdImg);
                tr.appendChild(tdAct);
                table.appendChild(tr);

                totale = totale + (tvs[1].prix * Number(quantityInput.value));
                dh.innerHTML = totale
                
                a={
                    reference : tvs[1].nom , 
                    quantite : Number(quantityInput.value)
                }
                tvs_Comands.push(a)
                break;
                


            case'SONY OLED XR-75X90J':
                var table = document.getElementById("table");
                var tr = document.createElement("tr");

                var tdRef = document.createElement("td");
                tdRef.innerHTML = tvs[2].nom

                var tdQuatt = document.createElement("td");
                tdQuatt.innerHTML = Number(quantityInput.value);

                var tdImg = document.createElement("td");
                
                tdImg.innerHTML = '<img src="TVS/img3.jpg" width="150px">'

                var tdAct = document.createElement("td");
                var but = document.createElement("input");
                but.type = "button";
                but.value = "Supprimer";
                but.onclick = function() {
                    Supprimer(tr); // Pass the row element to Supprimer function
                };
                
                tdAct.appendChild(but);



                tr.appendChild(tdRef);
                tr.appendChild(tdQuatt);
                tr.appendChild(tdImg);
                tr.appendChild(tdAct);
                table.appendChild(tr);
                
                totale = totale + (tvs[2].prix * Number(quantityInput.value));
                dh.innerHTML = totale
                
                a={
                    reference : tvs[2].nom , 
                    quantite : Number(quantityInput.value)
                }
                tvs_Comands.push(a)
                break;



            case'LG OLED 77C1PVA':
                var table = document.getElementById("table");
                var tr = document.createElement("tr");

                var tdRef = document.createElement("td");
                tdRef.innerHTML = tvs[3].nom

                var tdQuatt = document.createElement("td");
                tdQuatt.innerHTML = Number(quantityInput.value);

                var tdImg = document.createElement("td");
                
                tdImg.innerHTML = '<img src="TVS/img4.jpeg" width="150px">'

                var tdAct = document.createElement("td");
                var but = document.createElement("input");
                but.type = "button";
                but.value = "Supprimer";
                but.onclick = function() {
                    Supprimer(tr); // Pass the row element to Supprimer function
                };
                
                tdAct.appendChild(but);



                tr.appendChild(tdRef);
                tr.appendChild(tdQuatt);
                tr.appendChild(tdImg);
                tr.appendChild(tdAct);
                table.appendChild(tr);  
                
                totale = totale + (tvs[3].prix * Number(quantityInput.value));
                dh.innerHTML = totale;
                
                a={
                    reference : tvs[3].nom , 
                    quantite : Number(quantityInput.value)
                }
                tvs_Comands.push(a)
                break        
        }
        tva = totale * (40/100);
        
        ttcPrix = totale + Number(tva);        
        ttc.innerHTML = ttcPrix; 
        
        
        

    }
}


function Supprimer(row) {
    var table = document.getElementById("table");
    var rows = table.querySelectorAll("tr");
    console.log(rows)
    for (var i = 0; i < rows.length; i++) {
        if (rows[i] === row) {
            table.deleteRow(i);
            tvs_Comands.pop(tvs_Comands[i+1])
            break;
        }
    }
}


function Commander(){
    alert("Commande faite avec succes");
    console.log(tvs_Comands)
    Vider()
}

function Vider(){
    quantityInput.value = "";
    tvs_Comands = [];
    console.log(tvs_Comands)
    var rows = document.querySelectorAll("tr");
    for (var i = 1 ; i<rows.length ; i++){
        table.deleteRow(i);
    }
    var totale = 0;
    var ttcPrix = 0;
    var tva = 0 ;

    dh.innerHTML = 0;
    ttc.innerHTML = 0;
}


