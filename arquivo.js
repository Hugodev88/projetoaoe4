console.log("teste")

var inputElement = document.getElementById("name");

inputElement.addEventListener("keyup", function() {
    var inputValue = inputElement.value;
    fetch(`https://aoe4world.com/api/v0/players/search?query=${inputValue}&per_page=5`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.players);

        var resultsElement = document.getElementById("results");
        resultsElement.innerHTML = "";

        let minhaLista = data.players;

        minhaLista.forEach((element, index) => {

            var results = document.getElementById("results");
    
            var resultadoDiv = document.createElement("div");
            resultadoDiv.id = "result";
            
            var headerDiv = document.createElement("div");
            headerDiv.id = "headerresult";
            
            var nicknameH4 = document.createElement("h4");
            nicknameH4.id = "nickname";
            nicknameH4.innerHTML = element.name; // aqui você pode inserir o valor da variável "jogador.name" que desejar
            
            var countryDiv = document.createElement("div");
            countryDiv.id = "country";
            
            var countryImg = document.createElement("img");
            countryImg.src = element.country != null ? `https://flagsapi.com/${element.country.toUpperCase()}/shiny/24.png` : "";
            
            countryDiv.appendChild(countryImg);
            
            headerDiv.appendChild(nicknameH4);
            headerDiv.appendChild(countryDiv);
            
            var contentDiv = document.createElement("div");
            contentDiv.id = "contentresult";
            
            var idnameSpan = document.createElement("span");
            idnameSpan.id = "idname";
            idnameSpan.innerHTML = "#" + element.profile_id; // aqui você pode inserir o valor da variável "jogador.id" que desejar
            
            var winrateSpan = document.createElement("span");
            winrateSpan.id = "winrate";
            winrateSpan.innerHTML = element.leaderboards.rm_solo ? element.leaderboards.rm_solo.win_rate : element.leaderboards.rm_1v1_elo ? element.leaderboards.rm_1v1_elo.win_rate : "";
            
            var wincountSpan = document.createElement("span");
            wincountSpan.id = "wincount";
            wincountSpan.innerHTML = element.leaderboards.rm_solo ? element.leaderboards.rm_solo.wins_count : element.leaderboards.rm_1v1_elo ? element.leaderboards.rm_1v1_elo.wins_count : ""; // aqui você pode inserir o valor da variável "jogador.wincount" que desejar
            
            contentDiv.appendChild(idnameSpan);
            contentDiv.appendChild(winrateSpan);
            contentDiv.appendChild(wincountSpan);
            
            resultadoDiv.appendChild(headerDiv);
            resultadoDiv.appendChild(contentDiv);
            
            results.appendChild(resultadoDiv);
            
        });

       



        // var nickname = document.getElementById("nickname");
        // nickname.innerHTML = data.players[1].name;
        // for (var i = 5; i < data.players; i++) {
        //     var elemento = document.getElementById("nickname");
        //     elemento.textContent = data.players[i].name;
        // }

      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });x
});
