var data=document.querySelectorAll('.data')

        let cust_name = data[0]
        let item_name = data[2]
        console.log(item_name)
        let weight = data[3]
        let waste = data[4]
        let margin = data[5]
        let FW = data[6]
        let nag_weight
        var itemDes = localStorage.getItem("itemDes").split(",")
        var qnt = localStorage.getItem("qnt").split(",")
        var price = localStorage.getItem("price").split(",")
        var amount = localStorage.getItem("amount").split(",")
        var tableLen=localStorage.getItem("tableLen")
        var jama = localStorage.getItem("jama");
        var baki = localStorage.getItem("baki");
       baki = parseFloat(baki)
       jama = parseFloat(jama)
        
        cust_name.innerHTML = localStorage.getItem("cust_name");
        document.querySelector('title').innerHTML=localStorage.getItem("cust_name");
        item_name.innerHTML = localStorage.getItem("item_name");
        
        weight.innerHTML = localStorage.getItem("weight");
        waste.innerHTML = localStorage.getItem("Waste");
        margin.innerHTML = localStorage.getItem("margin");
        FW.innerHTML = localStorage.getItem("FW")
        
        
        // Converting the values in number
        margin=parseFloat(margin.innerText);
        waste=parseFloat(waste.innerText);
        FW=parseFloat(FW.innerText);
        weight=parseFloat(weight.innerText);
        
        //Calculating the नग वजन
        nag_weight = (FW+waste+margin-weight).toFixed(3);
        document.querySelector('#NW').innerHTML=nag_weight;


var total=0;
let table=document.querySelector('#table');
let table1=document.querySelector('#table1');
 
        for(let i=0;i<tableLen;i++)
        {
                let amt=parseFloat(amount[i])
                let row = table.insertRow(-1);
                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
                let c4 = row.insertCell(3);
                total=amt+total;

                //insert data
                c1.innerText = itemDes[i];
                c2.innerText = qnt[i];
                c3.innerText = price[i];
                c4.innerText = amt;
                
        
        }

        if(tableLen!=0)
        {
                table1.style.display="block";
                table.innerHTML+="<tr><td colspan='3'><b>कुल</b></td><td><b>"+total+"</b></td></tr>"
                total+=baki;
                total-=jama;

                total= Math.abs(total);
                if(baki!=0)
                        table.innerHTML+="<tr><td colspan='3'><b>बाकी</b></td><td><b>"+baki+"</b></td></tr>"

                else if(jama!=0)
                        table.innerHTML+="<tr><td colspan='3'><b>जमा</b></td><td><b>"+jama+"</b></td></tr>"
                
                table.innerHTML+="<tr><td colspan='3'><b>Grand Total</b></td><td><b>"+total+"</b></td></tr>"
        }
        //adding current date 
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = dd + '/' + mm + '/' + yyyy;
        document.querySelector('.date span').innerText=today

        