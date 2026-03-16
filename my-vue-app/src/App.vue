
<template>
  <nav>
    <div class="navbar">
    <form>
      <label for="week">Today is :</label>
      <input type="date" id="week"><br>
      <button id="save">enregistrer</button>
      <br>
      <p>organiser votre travaille ici</p>
    </form>
    </div>
  </nav>
  <img src="./assets/logo.png" alt="Logo" class="my-logo">
  <div class="container">
  <h1>To-do-list</h1>
  </div>
  <form class="ajouter">
  <label for="titre">Titre</label>
  <br>
  <input type="text" id="titre" placeholder="nouvelle tàche">
         <br>
      <TodoCreateButton/>
      </form>
<br>
<Ol>
  <li>Tàche-1
  <input type="checkbox" id="t1">
  </li>
  <br><TodoEditButton/><TodoDeleteButton/>
  <li>Tàche-2 <input type="checkbox" id="t2">
  </li>
  <br><TodoEditButton/><TodoDeleteButton/>
  <li>Tàche-3 <input type="checkbox" id="t3">
  </li>
  <br><TodoEditButton/><TodoDeleteButton/>
  <li>Tàche-4 <input type="checkbox" id="t4">
  </li>
  <br><TodoEditButton/><TodoDeleteButton/>
</Ol>
</template>
<style>
.navbar{
  background-color:rgb(249, 249, 249);
  border:1px solid ;
  padding:5px;
  margin:5px;
  position: absolute; 
  top: 10%;
  right: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Khallwa bin l-3anassir */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
#save{
  width:50%;
  border:2px solid;
  padding: 0 ;
}
#save:hover{
  background-color:#0598ee ;
}
.container {
  grid-column: 1 / span 2; 
  text-align: center;
  font-family: sans-serif;
  color: #333;
  padding: 30px;
  max-width: 400px;
  margin: 0 auto; 
  border: 5px solid  #ffffff;
  border-radius: 100px;

}

button {
 text-align:centre;
  width: 20%;
  padding: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
body{
  display:flex;
  justify-content:center;
  padding:0;
  margin:0;
  background-color: #ffbdd0;
  min-height: 400vh;
}
  .ajouter{
    text-align:centre;
  }
  .my-logo{
border:2px solid #ffffff;
 border-radius: 100%;
 position:fixed;
 top:0%;
 left:0%;
  }
</style>
