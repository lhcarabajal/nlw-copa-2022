function createrGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
`
}
let delay = -0.4
function craterCard(date, day, game) {
  delay = delay + 0.4
  return `
        <div class="card" style='animation-delay: ${delay}s'>
            <h2>${date} <span>${day}</span></h2>
              <ul>
                ${game} 
              </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  craterCard(
    "24/11",
    "quinta",
    createrGame("brasil", "08:00", "servia") +
      createrGame("uruguay", "10:00", "coreia") +
      createrGame("portugal", "13:00", "gana")
  ) +
  craterCard(
    "28/11",
    "segunda",
    createrGame("coreia", "10:00", "gana") +
      createrGame("brasil", "13:00", "suica") +
      createrGame("portugal", "16:00", "uruguay")
  ) +
  craterCard(
    "02/12",
    "sexta",
    createrGame("coreia", "12:00", "portugal") +
      createrGame("gana", "12:00", "uruguay") +
      createrGame("camaroes", "16:00", "brasil")
  )
