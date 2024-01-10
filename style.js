 // Stocker 
 localStorage.setItem('nom', 'john');

 // Récupérer 
 var nomRecupere = localStorage.getItem('nom');
 console.log(nomRecupere);

 // Afficher la valeur dans le HTML
 document.body.innerHTML += "<p>La valeur récupérée est : " + nomRecupere + "</p>";
 
//----------------------------------------
 //recuperer les valeurs saisi dans l'input
 function addTask() {
    // Récupérer la valeur du champ taskinput
    var taskValue = document.getElementById("taskinput").value;

    // Vérifier si la valeur est vide
    if (taskValue.trim() === "") {
        alert("Veuillez entrer une tâche");
        return;
    }

    // Ajouter la tâche à la liste
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.textContent = taskValue;
    taskList.appendChild(taskItem);

    //----------- Stocker la valeur dans le localStorage
    localStorage.setItem("taskTask", taskValue);
    // Effacer le champ taskinput après l'ajout
    document.getElementById("taskinput").value = "";
}

