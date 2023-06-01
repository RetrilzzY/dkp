function calculateDKP() {
    var t4Kills = parseFloat(document.getElementById("t4Kills").value);
    var t5Kills = parseFloat(document.getElementById("t5Kills").value);
    var t4Deaths = parseFloat(document.getElementById("t4Deaths").value);
    var t5Deaths = parseFloat(document.getElementById("t5Deaths").value);
  
    var dkp = t4Kills * 1 + t5Kills * 5.25 + t4Deaths * 5 + t5Deaths * 10;
  
    var dkpResult = document.getElementById("dkpResult");
    dkpResult.textContent = dkp.toLocaleString();
  }
  

function switchStyle() {
    var modeButton = document.getElementById('style');
    var body = document.body;
  
    if (body.classList.contains('style1')) {
      body.classList.remove('style1');
      body.classList.add('style2');
      modeButton.innerHTML = 'Switch style';
    } else {
      body.classList.remove('style2');
      body.classList.add('style1');
      modeButton.innerHTML = 'Switch style';
    }
  }


  function switchMode() {
    var modeButton = document.getElementById('mode');
    var body = document.body;
  
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      modeButton.innerHTML = 'Switch to Dark Mode';
    } else {
      body.classList.add('dark-mode');
      modeButton.innerHTML = 'Switch to Light Mode';
    }
  }
  
