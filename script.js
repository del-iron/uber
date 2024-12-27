// script.js
document.getElementById("calculate-btn").addEventListener("click", () => {
    const pickup = document.getElementById("pickup").value.trim();
    const destination = document.getElementById("destination").value.trim();
  
    if (!pickup || !destination) {
      alert("Por favor, preencha os campos de partida e destino.");
      return;
    }
  
    // Simulação de cálculo de preço
    const distance = Math.random() * 10 + 1; // Distância aleatória entre 1 e 10 km
    const price = (distance * 2.5).toFixed(2); // Preço baseado na distância
  
    const detailsSection = document.getElementById("ride-details");
    detailsSection.style.display = "block";
    detailsSection.innerHTML = `
      <h3>Detalhes da Viagem</h3>
      <p><strong>Ponto de partida:</strong> ${pickup}</p>
      <p><strong>Destino:</strong> ${destination}</p>
      <p><strong>Distância estimada:</strong> ${distance.toFixed(2)} km</p>
      <p><strong>Preço estimado:</strong> R$ ${price}</p>
    `;
  });
  