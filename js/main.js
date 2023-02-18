const AttackButton = document.getElementById("attack");
const resultContainer = document.getElementById("result");
const resultContainer2 = document.getElementById("result2");

  let result = 0;






  function rollD20() {                                                 //       Essa é a função que rola o d20, é um pouco confusa, 
    return Math.floor(Math.random() * 20) + 1;                         //       pq ta bem simplificada, depois eu explico melhor
  }

  AttackButton.addEventListener("click", function() {                  // Aqui é o botão, a gente da um id pra ele, e usa esse negocio de

    result = rollD20();                                               // addEventListener, tipo quando tem um evento, que é o click dispara

    npc_weak.health = npc_weak.health - result - Player.streght;     // Essa função que é uma luta simples, o result é a função do dado,
    Player.health = Player.health - result - npc_weak.streght;      // Ou seja, toda vez que usamos ela, ele roda a função e da um numero


    resultContainer.innerHTML = "Player: " + Player.health;        // Em baixo do result tem a linha npc_weak.health, 
    resultContainer2.innerHTML = "Npc: " + npc_weak.health;        // vou explicar depois oque é mas o nome é auto explicativo né 

  });                                                                //mas essa é a parte mais legal


