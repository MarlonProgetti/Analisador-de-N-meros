var num = window.document.getElementById("txtn");
var list = window.document.getElementById("list");
var res = window.document.getElementById("res");
var footer = window.document.getElementById("footer");
footer.innerHTML += ` \u{1F9D9}`;
var l = [];

function isNumero(n) {
  if (Number(n) > 0 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function Adicionar() {
  if (isNumero(num.value) && !inList(num.value, l)) {
    l.push(Number(num.value));
    var item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    list.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("[ERRO] Número inválido... Ou já adicionado!");
  }

  num.value = "";
  num.focus();
}

function Finalizar() {
  if (l.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    var total = l.length;
    var maior = Math.max(...l);
    var menor = Math.min(...l);
    var soma = 0;
    for (var c = 0; c < l.length; c++) {
      soma += l[c];
    }
    var media = soma / total;
    var mediaF = media.toFixed(2);

    res.innerHTML = ``;
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</br></p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</br></p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</br></p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</br></p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${parseFloat(
      mediaF
    )}.</br></p>`;
  }
}

/*var l = [];
function Adicionar() {
  var num = window.document.getElementById("txtn");
  var list = window.document.getElementById("list");
  if (num.value.length == 0) {
    window.alert("[ERRO] Número inválido... Tente novamente!");
  } else {
    var n = Number(num.value);
    if (l.includes(n) || n <= 0 || n > 100) {
      window.alert(
        "Valor inválido ou já adicionado a lista... Tente novamente!"
      );
    } else {
      l.push(n);
      var item = document.createElement("option");
      item.text = `Valor ${n} adicionado.`;
      list.appendChild(item);
      
    }
  }
}

function Finalizar() {
  if (l.length == 0) {
    window.alert("Adicione números primeiro!");
  } else {
    var resQ = window.document.getElementById("quantidade");
    var resMa = window.document.getElementById("maior");
    var resMe = window.document.getElementById("menor");
    var resS = window.document.getElementById("soma");
    var resM = window.document.getElementById("media");
    var quant = l.length;
    var maior = Math.max(...l);
    var menor = Math.min(...l);
    var soma = 0;
    for (var c = 0; c < l.length; c++) {
      soma += l[c];
    }
    var media = soma / quant;
    var mediaF = media.toFixed(2);
    resQ.innerHTML = `Ao todo, temos ${quant} números cadastrados.`;
    resMa.innerHTML = `O maior valor informado foi ${maior}.`;
    resMe.innerHTML = `O menor valor informado foi ${menor}.`;
    resS.innerHTML = `Somando todos os valores, temos ${soma}.`;
    resM.innerHTML = `A média dos valores digitados é ${parseFloat(mediaF)}`;
  }
}
*/
