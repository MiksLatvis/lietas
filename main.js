var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();

google.charts.load("current", {
  packages: ["timeline"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({
    type: 'string',
    id: 'Position'
  });
  dataTable.addColumn({
    type: 'string',
    id: 'Name'
  });
  dataTable.addColumn({
    type: 'date',
    id: 'Start'
  });
  dataTable.addColumn({
    type: 'date',
    id: 'End'
  });
  dataTable.addRows([
    ['Dzīvesvieta', 'Latvija', new Date(2002, 5, 27), new Date(2011, 6, 30)],
    ['Dzīvesvieta', 'Kambodža, Pnompeņa', new Date(2011, 6, 30), new Date(2015, 5, 15)],
    ['Dzīvesvieta', 'Latvija', new Date(2015, 5, 15), new Date(2016, 8, 30)],
    ['Dzīvesvieta', 'Japāna, Yokohama', new Date(2016, 8, 30), new Date(2019, 11, 1)],
    ['Dzīvesvieta', 'Latvija, Sigulda', new Date(2019, 11, 2), new Date(2020, 11, 20)],
    ['Dzīvesvieta', 'Japāna, Yokohama', new Date(2020, 11, 20), new Date(today)],
    ['Ģimenes transporta līdzeklis', 'Alfa Romeo 147', new Date(2008, 8, 22), new Date(2015, 6, 20)],
    ['Ģimenes transporta līdzeklis', 'Honda SuperCub', new Date(2012, 7, 27), new Date(2015, 5, 15)],
    ['Ģimenes transporta līdzeklis', 'Honda SuperCub (dzīvo Latvijā, tiek katru vasaru darbināts priekam)', new Date(2015, 5, 15), new Date(today)],
    ['Ģimenes transporta līdzeklis', 'Toyota Verso', new Date(2019, 11, 3), new Date(today)],
    ['Fotoaparāts', 'Panasonic Lumix DMC-FZ30, tagad lieto kāds no radiem', new Date(2006, 3, 30), new Date(today)],
    ['Fotoaparāts', 'Canon 450D kādus gadus lietoju paralēli Sony, tagad krāj putekļus', new Date(2009, 2, 4), new Date(today)],
    ['Fotoaparāts', 'Sony NEX-6', new Date(2013, 11, 30), new Date(today)],
    ['Drons', 'DJI Mavic Mini', new Date(2020, 9, 8), new Date(today)],
    ['Dators', 'iMac 27"', new Date(2010, 8, 22), new Date(2011, 5, 20)],
    ['Dators', 'MacBook Air 13" (pārgāja sievas īpašumā)', new Date(2011, 6, 4), new Date(today)],
    ['Dators', 'MacBook Pro 13"', new Date(2015, 3, 18), new Date(today)],
    ['Pele', 'Apple Magic Trackpad (ar baterijām)', new Date(2016, 11, 04), new Date(today)],
    ['Pele', 'Apple Magic Mouse 2', new Date(2016, 11, 04), new Date(today)],
    ['Klaviatūra', 'Apple Magic Keyboard ar baterijām (Latvijā)', new Date(2012, 06, 06), new Date(today)],
    ['Klaviatūra', 'Apple Magic Keyboard (Japānā)', new Date(2020, 11, 24), new Date(today)],
    ['Cietie diski', 'Western Digital 2.5" My Passport Essential SE 1TB (64.00 Ls);', new Date(2011, 6, 1), new Date(today)],
    ['Cietie diski', 'LaCie 2TB Rugged Thunderbolt USB 3.0', new Date(2015, 1, 20), new Date(today)],
    ['Cietie diski', 'WD Elements Portable 2TB USB 3.0 76EUR', new Date(2018, 3, 4), new Date(today)],
    ['Cietie diski', 'SanDisk SSD 2TB', new Date(2020, 11, 3), new Date(today)],
    ['Monitors', 'DELL Dell 24"', new Date(2012, 6, 1), new Date(2016, 8, 20)],
    ['Monitors', 'DELL Dell 24" lieto vecāki', new Date(2016, 8, 20), new Date(today)],
    ['Monitors', 'DELL Dell 27" P2715Q 4K (Japānā)', new Date(2017, 0, 1), new Date(today)],
    ['Monitors', 'LG 27" 27UL550 4K HDR (Latvijā)', new Date(2019, 11, 16), new Date(today)],
    ['Telefons', 'iPhone', new Date(2008, 4, 1), new Date(2010, 9, 26)],
    ['Telefons', 'iPhone 3GS', new Date(2010, 3, 5), new Date(2010, 9, 26)],
    ['Telefons', 'iPhone 4', new Date(2010, 9, 8), new Date(2015, 2, 2)],
    ['Telefons', 'iPhone 5s', new Date(2015, 2, 2), new Date(2016, 8, 8)],
    ['Telefons', 'iPhone 6s - tagad lieto mamma', new Date(2015, 8, 8), new Date(today)],
    ['Telefons', 'iPhone Xs', new Date(2019, 5, 18), new Date(2019, 11, 23)],
    ['Telefons', 'iPhone 11 Pro', new Date(2019, 11, 23), new Date(today)],
    ['Telefons', 'iPhone 12 Mini', new Date(2020, 11, 23), new Date(today)],
    ['Zanes telefons', 'iPhone SE', new Date(2016, 8, 30), new Date(today)],
    ['Zanes telefons', 'iPhone SE2', new Date(2020, 04, 28), new Date(today)],
    ['Pulkstenis', 'Pulksteni nelietoju', new Date(2002, 5, 27), new Date(2015, 6, 28)],
    ['Pulkstenis', 'Apple Watch (series 0) tagad lieto sieva', new Date(2015, 6, 28), new Date(today)],
    ['Pulkstenis', 'Apple Watch series 4', new Date(2018, 9, 20), new Date(today)],
    ['Austiņas', 'Sennheiser HD 515 šobrīd krāj putekļus', new Date(2008, 0, 3), new Date(today)],
    ['Austiņas', 'Turtle Beach 600 Xbox austiņas', new Date(2018, 0, 3), new Date(today)],
    ['Austiņas', 'AirPods tagad lieto sieva', new Date(2017, 8, 14), new Date(today)],
    ['Austiņas', 'AirPods Pro', new Date(2019, 10, 6), new Date(today)],
    ['Austiņas skriešanai', 'Plantronics BackBeat Fit (beidzās, jo sarūsējusi kreisā puse)', new Date(2018, 0, 1), new Date(2020, 1, 14)],
    ['Austiņas skriešanai', 'Plantronics BackBeat Fit 2100', new Date(2020, 1, 21), new Date(today)],
    ['Skriešanas apavi', 'Asics Gel-Kayano 23 (beidza dzīvi pēc 1157 km)', new Date(2016, 5, 10), new Date(2020, 4, 22)],
    ['Skriešanas apavi', 'Adidas Terrex', new Date(2017, 9, 10), new Date(today)],
    ['Skriešanas apavi', 'Asics Gel-Nimbus 21 SP', new Date(2019, 3, 24), new Date(today)],
    ['Skriešanas apavi', 'INOV-8 OROC 280 V3', new Date(2019, 11, 5), new Date(today)],
    ['Skriešanas apavi', 'INOV-8 Terraultra G 260', new Date(2020, 5, 3), new Date(today)],
    ['Skriešanas apavi', 'HOKA ONE ONE Speedgoat 4', new Date(2020, 5, 21), new Date(today)],
    ['Spēļu konsole', 'Xbox 360 (atstāju tētim lietošanā)', new Date(2014, 10, 25), new Date(today)],
    ['Spēļu konsole', 'Xbox One', new Date(2016, 9, 11), new Date(today)],
    ['Spēļu konsole', 'Xbox One S All-digital', new Date(2019, 11, 11), new Date(today)],
    ['Kafijas aparāts', 'Kafiju negatavoju, maza interese, Statoil + lattes', new Date(2002, 5, 27), new Date(2015, 11, 24)],
    ['Kafijas aparāts', 'Aeropress', new Date(2015, 11, 24), new Date(today)],
    ['Kafijas aparāts', 'DeLonghi Dedica', new Date(2018, 1, 5), new Date(today)],
    ['Kafijas aparāts', 'Sage the Barista Express', new Date(2020, 4, 15), new Date(today)],
    ['Velo', 'Hasa Comp 6.0', new Date(2002, 5, 27), new Date(2011, 2, 20)],
    ['Velo', 'Panasonic elektriskais', new Date(2018, 7, 25), new Date(today)]

  ]);

  chart.draw(dataTable);
}
