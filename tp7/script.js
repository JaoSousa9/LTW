/* function changeArticleColors(){

    const articles = document.querySelectorAll("#products article");

    articles.forEach(element => {
        console.log(element);
        element.classList.add("sale");
    });

}

changeArticleColors(); */

function attachBuyEvents() {

    const buttons = document.querySelectorAll("button.buy");
    
    var ID = 1;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            var article = button.parentElement;
            article.classList.toggle("sale");
            let elementId = article.getAttribute("data-id");

            const element = document.querySelector("article[data-id =\""+ elementId+ "\"] h2").textContent;
            const price = document.querySelector("article[data-id =\""+ elementId+ "\"] .price").textContent;
            const quantity = document.querySelector("article[data-id =\""+ elementId+ "\"] input").value;

            products = document.querySelectorAll("table>tr");
            var exists = false;
            products.forEach(element => {
                if(element.getAttribute("data-id") == elementId){
                    exists = true;
                    element.querySelector(":nth-child(3)").textContent = quantity;
                    element.querySelector(":nth-child(4)").textContent = price;
                    element.querySelector(":nth-child(5)").textContent = price * quantity;
                }
            });

            if(!exists){
                const table = document.querySelector("#cart table");
                const newTr = document.createElement("tr");

                newTr.setAttribute("data-id", elementId);
                table.appendChild(newTr);


                const tdID = document.createElement("td");
                tdID.textContent = ID; ID++;
                newTr.appendChild(tdID);

                const tdName = document.createElement("td");
                tdName.textContent = element;
                newTr.appendChild(tdName);

                const tdQuantity = document.createElement("td");
                tdQuantity.textContent = quantity;
                newTr.appendChild(tdQuantity);

                const tdPrice = document.createElement("td");
                tdPrice.textContent = price;
                newTr.appendChild(tdPrice);

                const tdTotal = document.createElement("td");
                tdTotal.textContent = price * quantity;
                newTr.appendChild(tdTotal);
            }

            products = document.querySelectorAll("table>tr");
            var total = 0;
            products.forEach(element => {
                    total += parseInt(element.querySelector(":nth-child(5)").textContent);
            });
            document.querySelector("#cart table tfoot tr :nth-child(2)").textContent = total;

            exists = false;
        });

    })

}
  
  attachBuyEvents()