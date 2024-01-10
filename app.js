
localStorage.setItem('nom','kate');
let cat = localStorage.getItem('nom');
localStorage.removeItem('name')
console.log('cat')

 function onlaod () {
    var savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
    }
};

function saveUsername() {
    var usernameInput = document.getElementById('username');
    var usernameValue = usernameInput.value;

    if (usernameValue.trim() !== '') {
        localStorage.setItem('username', usernameValue);
        console.log('Username est stoqué');
    } 
}

 // Stocker 
 localStorage.setItem('nom', 'john');

 // Récupérer 
 var nomRecupere = localStorage.getItem('nom');
 console.log(nomRecupere);

 // Afficher la valeur dans le HTML
//  document.body.innerHTML += "<p>La valeur récupérée est : " + nomRecupere + "</p>";
 

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
      var taskItem = document.createElement("tr");
      var td =document.createElement("td");
    //   taskItem.textContent = taskValue;
      taskList.appendChild(taskItem);
      taskItem.appendChild(td);
      td.innerText=document.getElementById("taskinput").value;
  
      //----------- Stocker la valeur dans le localStorage
    //   localStorage.setItem("taskTask", taskValue);
      // Effacer le champ taskinput après l'ajout
      document.getElementById("taskList").value = "";
  }
  



