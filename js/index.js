function atualizarHora() {
        var agora = new Date();
        var hora = agora.getHours();
        var minuto = agora.getMinutes() + 0;
        var segundo = agora.getSeconds();
      
        var novaID1 = hora + ":" + minuto + ":" + segundo;
      
        document.getElementById("hora").innerText = novaID1;
      }
      
      function atualizarResultado() {
        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerText = "1.00X";
      
        setTimeout(function() {
          var numeroAleatorio = (Math.random() * (5.00 - 1.09) + 1.20).toFixed(2);
          resultadoElement.innerText = numeroAleatorio + "X";
        }, 10000); // Após 10 segundos, atualiza o resultado com o número aleatório
      
        var tempoAtualizacaoRapida = 30000; // Tempo em milissegundos para atualização rápida (120 segundos)
        var tempoRestante = tempoAtualizacaoRapida;
        var intervaloRapido; // Declare intervaloRapido fora do escopo local
      
        setTimeout(function() {
          clearInterval(intervaloRapido); // Interrompe a atualização rápida após 5 segundos
        }, 5000);
      
        intervaloRapido = setInterval(function() {
          if (tempoRestante >= 10000) {
            var numeroAleatorioRapido = (Math.random() * 9).toFixed(2);
            resultadoElement.innerText = numeroAleatorioRapido;
          }
          tempoRestante -= 100;
        }, 100); // Atualiza rapidamente dentro de cada ciclo de 120 segundos
      
        setInterval(function() {
          tempoRestante = tempoAtualizacaoRapida;
        }, tempoAtualizacaoRapida); // Reinicia o contador de tempo após cada ciclo de 120 segundos
      
      }
      
      atualizarHora();
      setInterval(atualizarHora, 1000); // Atualiza a cada segundo
      
      atualizarResultado();
<<<<<<< HEAD
      setInterval(atualizarResultado, 30000); // Atualiza o resultado a cada 120 segundos
      





=======
      setInterval(atualizarResultado, 60000); // Atualiza o resultado a cada 120 segundos
>>>>>>> 963347931678a88a301405dd27f81684b27d9b17
