import geoJsonBairrosFloripa from "./geoJsonBairrosFloripa_updated.js";

const bairrosData = {
  "Campeche": { id: 35, votos: 5752, totalVotos: 37505 },
  "Itacorubi": { id: 3, votos: 2774, totalVotos: 31626 },
  "Rio Tavares": { id: 40, votos: 1245, totalVotos: 6657 },
  "Trindade": { id: 11, votos: 5595, totalVotos: 47379 },
  "Lagoa da Conceição": { id: 20, votos: 1883, totalVotos: 12416 },
  "Ingleses": { id: 27, votos: 2163, totalVotos: 56585 },
  "Armação": { id: 34, votos: 693, totalVotos: 4934 },
  "Rio Vermelho": { id: 22, votos: 1151, totalVotos: 21019 },
  "Morro das Pedras": { id: 2, votos: 531, totalVotos: 3779 },
  "Canasvieiras": { id: 25, votos: 812, totalVotos: 21981 },
  "João Paulo": { id: 4, votos: 410, totalVotos: 6261 },
  "Centro": { id: 1, votos: 2197, totalVotos: 44090 },
  "Barra da Lagoa": { id: 21, votos: 397, totalVotos: 4896 },
  "Ribeirão da Ilha": { id: 39, votos: 618, totalVotos: 7962 },
  "Saco dos Limões": { id: 8, votos: 415, totalVotos: 9580 },
  "Estreito": { id: 17, votos: 522, totalVotos: 13032 },
  "Santo Antônio de Lisboa": { id: 33, votos: 292, totalVotos: 3567 },
  "Carianos": { id: 36, votos: 426, totalVotos: 11396 },
  "Córrego Grande": { id: 2, votos: 566, totalVotos: 6213 },
  "Monte Verde": { id: 6, votos: 236, totalVotos: 7553 },
  "Cachoeira do Bom Jesus": { id: 23, votos: 233, totalVotos: 5940 },
  "Coqueiros": { id: 16, votos: 781, totalVotos: 17114 },
  "Santa Mônica": { id: 10, votos: 216, totalVotos: 2759 },
  "Canto": { id: 49, votos: 487, totalVotos: 13651 },
  "Ponta das Canas": { id: 30, votos: 192, totalVotos: 5450 },
  "Pantanal": { id: 7, votos: 186, totalVotos: 3474 },
  "Agronômica": { id: 0, votos: 481, totalVotos: 12282 },
  "Abraão": { id: 50, votos: 176, totalVotos: 4127 },
  "Jurerê Internacional": { id: 28, votos: 163, totalVotos: 3157 },
  "Capoeiras": { id: 15, votos: 321, totalVotos: 11044 },
  "Sambaqui": { id: 32, votos: 212, totalVotos: 3021 },
  "Saco Grande": { id: 9, votos: 371, totalVotos: 10414 },
  "Pântano do Sul": { id: 38, votos: 274, totalVotos: 2253 },
  "Ratones": { id: 46, votos: 140, totalVotos: 2624 },
  "Vargem Grande": { id: 44, votos: 335, totalVotos: 8749 },
  "Jurerê Tradicional": { id: 29, votos: 207, totalVotos: 4644 },
  "Costeira do Pirajubaé": { id: 37, votos: 309, totalVotos: 8812 },
  "Jardim Atlântico": { id: 19, votos: 123, totalVotos: 5074 },
  "Balneário": { id: 13, votos: 114, totalVotos: 2732 },
  "Vargem do Bom Jesus": { id: 43, votos: 103, totalVotos: 3749 },
  "Tapera": { id: 41, votos: 118, totalVotos: 4232 },
  "Daniela": { id: 26, votos: 98, totalVotos: 1591 },
  "Cacupé": { id: 24, votos: 84, totalVotos: 1197 },
  "Coloninha": { id: 48, votos: 117, totalVotos: 4986 },
  "José Mendes": { id: 5, votos: 62, totalVotos: 2577 },
  "Monte Cristo": { id: 47, votos: 59, totalVotos: 3996 },
  "Praia do Forte": { id: 51, votos: 44, totalVotos: 1042 },
  "Vargem Pequena": { id: 45, votos: 33, totalVotos: 785 },
  "Carvoeira": { id: 12, votos: 0, totalVotos: 0 },
  "Bom Abrigo": { id: 14, votos: 0, totalVotos: 0 },
  "Itaguaçu": { id: 18, votos: 0, totalVotos: 0 },
  "Praia Brava": { id: 31, votos: 0, totalVotos: 0 }
};

function ordenarBairrosPorVotos(data) {
  const bairrosArray = Object.keys(data).map(key => ({
      nome: key,
      id: data[key].id,
      votos: data[key].votos,
      totalVotos: data[key].totalVotos
  }));

  bairrosArray.sort((a, b) => b.votos - a.votos); // Ordena de forma descendente

  return bairrosArray;
}

function ordenarBairrosPorPorcentagemDeVotos(bairrosData) {
  // Converter o objeto de bairros em um array para operações de ordenação
  const bairrosArray = Object.keys(bairrosData).map(nomeBairro => {
      const bairro = bairrosData[nomeBairro];
      const porcentagemVotos = (bairro.totalVotos > 0) ? (bairro.votos / bairro.totalVotos) : 0;
      return {
          nome: nomeBairro,
          id: bairro.id,
          votos: bairro.votos,
          totalVotos: bairro.totalVotos,
          porcentagemVotos: porcentagemVotos
      };
  });

  // Ordenar o array com base na porcentagem de votos, decrescente
  bairrosArray.sort((a, b) => b.porcentagemVotos - a.porcentagemVotos);

  return bairrosArray;
}



function getColorNew(index, totalBairros) {
  const fraction = index / totalBairros; // Normaliza o índice para um intervalo de 0 a 1
 
  switch(true){
    case fraction >0.95:
      return '#f7fcf5'
    case fraction >0.9:
      return '#e5f5e0'
    case fraction >0.85:
      return '#c7e9c0'
    case fraction >0.8:
      return '#a1d99b'
    case fraction >0.75:
      return '#74c476'
    case fraction >0.6:
      return '#41ab5d' 
    case fraction >0.5:
      return '#238b45'
    case fraction >0.2:
        return '#006d2c'
    case fraction >0.1:
      return '#00441b' 
    default:
      return '#00441b'    
  }
}

function getColorOrange(d) {
 // console.log(d)
  return d > 5000 ? '#00441b' :
         d > 2000  ? '#006d2c' :
         d > 1000  ? '#238b45' :
         d > 500  ? '#41ab5d' :
         d > 300   ? '#74c476' :
         d > 200   ? '#a1d99b' :
         d > 100   ? '#c7e9c0' :
                    '#e5f5e0';
}

function getColorPorcentagem(d) {
   //console.log(d)
  //  return d > 15 ? '#800026' :
  //         d > 12  ? '#BD0026' :
  //         d > 10  ? '#E31A1C' :
  //         d > 8  ? '#FC4E2A' :
  //         d > 6   ? '#FD8D3C' :
  //         d > 4   ? '#FEB24C' :
  //         d > 2   ? '#FED976' :
  //                    '#FFEDA0';
  return d > 15 ? '#FFEDA0' :
       d > 12 ? '#FED976' :
       d > 10 ? '#FEB24C' :
       d > 8  ? '#FD8D3C' :
       d > 6  ? '#FC4E2A' :
       d > 4  ? '#E31A1C' :
       d > 2  ? '#BD0026' :
                '#800026';              
 }

function getColor(index, totalBairros) {
  //console.log("index: "+index+" totalBairros: "+totalBairros)
  const fraction = index / totalBairros; // calcula a fração com base na posição
  const red = Math.round(255 * (1 - fraction)); // Reduz o vermelho conforme aumenta o índice
  const green = Math.round(255 * fraction); // Aumenta o verde conforme aumenta o índice
  //console.log('R:'+red +" G:"+green + " Fraction:"+fraction)
  return `rgb(${red}, 0, 0)`; // Combinação RGB
}

function getOpacity(index, totalBairros) {
  //return 1 - (index / (totalBairros - 1));
  return 1;
}

function getColorByVotePercentage(index, totalBairros) {
  // Normaliza o índice para um intervalo de 0 a 1
  const fraction = index / (totalBairros - 1);
  const red = Math.round(255 * (1 - fraction));  // Decrementa o vermelho à medida que o índice aumenta
  const green = Math.round(255 * fraction);     // Incrementa o verde à medida que o índice aumenta

  return `rgb(${red}, ${green}, 0)`;
}
function makeHtml(id) {
  return '<label for="input_' + id + '">Input:</label><input type="text" value="my value…" id="input_' + id + '" />'
}




let info;
document.addEventListener("DOMContentLoaded", function(event){
    var map = L.map('map').setView([-27.5959,-48.5541],10);

  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=lVbcDuWl37ro1cQQVvv2',{
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(map);

  var command = L.control({position: 'topright'});

  command.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'command');
      div.innerHTML = '<form id="controllerMapa">Total de Votos:<input id="mapaControllerTotalVotos" type="radio" name="tipoMapa"/> Porcentagem:<input id="mapaControllerPorcentagem" type="radio" name="tipoMapa"/></form>'; 
         return div;
  };
  
  command.addTo(map);
  var geojason = L.geoJSON(geoJsonBairrosFloripa,{
    onEachFeature : onEachFeature,
    style: style
  }).addTo(map);
  info = L.control();
 /* infoTop = L.control({position: 'top'});
  infoTop.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'topInfo'); // create a div with a class "info"
    this._div.innerHTML = '<h4>Selecione o Modo</h4>'
    this.update();
    return this._div;
};*/
  info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      this.update();
      return this._div;
  };

  // method that we will use to update the control based on feature properties passed
  info.update = function (props) {
    //console.log(props)
      this._div.innerHTML = '<h4>Votação por Bairros de Florianópolis</h4>' +  (props ?
          '<b>' + props.name + '</b><br />' + props.votos + ' votos no candidato' +
          "</br>De um total de " + props.totalVotos + " votos" +
          "</br>Representando " + (props.votos*100/props.totalVotos).toFixed(2) + "% de votos nesse bairro"
          : 'Selecione um Bairro');
  };

  var legend = L.control({position: 'bottomright'});


  legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
          grades = [0, 100, 200, 300, 500, 1000, 2000, 5000],
          labels = [];
      div.innerHTML+='<b>Votos no candidato</b><br>'
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColorOrange(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }

      return div;
  };
  legend.addTo(map);
  info.addTo(map);
  document.getElementById ("mapaControllerTotalVotos").addEventListener ("click", function(event){mudaMapaTotalVotos(geojason, event, legend, map)});
  document.getElementById ("mapaControllerPorcentagem").addEventListener ("click", function(event){mudaMapaPorcentagem(geojason, event, legend, map)});

})

function mapaVerde(map) {
  var div = L.DomUtil.create('div', 'info legend'),
  grades = [0, 100, 200, 300, 500, 1000, 2000, 5000],
  labels = [];
  div.innerHTML+='<b>Votos no candidato</b><br>'
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
        '<i style="background:' + getColorOrange(grades[i] + 1) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
}

function mudaMapaPorcentagem(feature, event, legenda, map) {
  
  console.log(legenda)
  if(event.target.checked)
    legenda.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [0, 2, 4, 6, 8, 10, 12, 15],  // Ajuste os limites conforme necessário
          labels = [];
  
      // Adiciona o título da legenda
      div.innerHTML += '<b>Votos no candidato</b><br>';
  
      // Loop através dos intervalos de votos para gerar um label com um quadrado colorido para cada intervalo
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColorPorcentagem(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '%<br>' : '+');
      }
  
      return div;
    };
    legenda.addTo(map);
    feature.eachLayer(function (featureInstanceLayer) {
      //console.log(featureInstanceLayer.feature.geometry.propeties)
      var myFillColor = getColorPorcentagem(featureInstanceLayer.feature.geometry.propeties.votos*100/featureInstanceLayer.feature.geometry.propeties.totalVotos)

          featureInstanceLayer.setStyle({
              fillColor: myFillColor,
              fillOpacity: 1,
              weight: 3
          });
    })
  //console.log(feature)
  /*Object.values(feature._layers).forEach( e => {
      console.log(e)
      //onEachFeature(feature, e)
      e.style = style2(e.feature);
      //console.log(e)
  })*/
}

function mudaMapaTotalVotos(feature, event, legenda, map) {
  if(event.target.checked)
    legenda.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
          grades = [0, 100, 200, 300, 500, 1000, 2000, 5000],
          labels = [];
      div.innerHTML+='<b>Votos no candidato</b><br>'
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColorOrange(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }

      return div;
    };
    legenda.addTo(map)
    feature.eachLayer(function (featureInstanceLayer) {
      //console.log(featureInstanceLayer.feature.geometry.propeties)
      var myFillColor = getColorOrange(featureInstanceLayer.feature.geometry.propeties.votos)

          featureInstanceLayer.setStyle({
              fillColor: myFillColor,
              fillOpacity: 1,
              weight: 3
          });
    })
}

function style2(feature) {
  //console.log("mudando para o estilo 2")
  return {
      fillColor: getColorPorcentagem(feature.geometry.propeties.votos*100/feature.geometry.propeties.totalVotos),
      weight: 3,
      color: 'b9d611',
      dashArray: '5',
      fillOpacity: 1
  };
}

function onEachFeature(feature, layer){
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
});

 layer.setStyle({
    weight: 2,
    color: '#b9d611',
    dashArray: '5',
    fillOpacity: 1
  });
}
function highlightFeature(e) {
  var layer = e.target;

  info.update(e.target.feature.geometry.propeties);
  layer.setStyle({
    weight: 2,
    color: 'red',
    dashArray: '',
    fillOpacity: 1
  });
  layer.bringToFront();
}

function resetHighlight(e) {
  
  var layer = e.target;
  info.update();
  layer.setStyle({
    weight: 2,
    color: '#b9d611',
    dashArray: '5',
    fillOpacity: 1
  });

  
}
function style(feature) {
  return {
      fillColor: getColorOrange(feature.geometry.propeties.votos),
      weight: 2,
      color: 'b9d611',
      dashArray: '5',
      fillOpacity: 1
  };
}