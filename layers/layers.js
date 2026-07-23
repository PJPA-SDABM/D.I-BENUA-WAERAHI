var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JalurInspeksi_3 = new ol.format.GeoJSON();
var features_JalurInspeksi_3 = format_JalurInspeksi_3.readFeatures(json_JalurInspeksi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurInspeksi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurInspeksi_3.addFeatures(features_JalurInspeksi_3);
var lyr_JalurInspeksi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurInspeksi_3, 
                style: style_JalurInspeksi_3,
                popuplayertitle: 'Jalur Inspeksi',
                interactive: true,
    title: 'Jalur Inspeksi<br />\
    <img src="styles/legend/JalurInspeksi_3_0.png" /> Baik Sekali<br />\
    <img src="styles/legend/JalurInspeksi_3_1.png" /> Baik<br />\
    <img src="styles/legend/JalurInspeksi_3_2.png" /> Sedang<br />\
    <img src="styles/legend/JalurInspeksi_3_3.png" /> Jelek<br />' });
var format_Saluran_4 = new ol.format.GeoJSON();
var features_Saluran_4 = format_Saluran_4.readFeatures(json_Saluran_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saluran_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saluran_4.addFeatures(features_Saluran_4);
var lyr_Saluran_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saluran_4, 
                style: style_Saluran_4,
                popuplayertitle: 'Saluran',
                interactive: true,
    title: 'Saluran<br />\
    <img src="styles/legend/Saluran_4_0.png" /> Baik Sekali<br />\
    <img src="styles/legend/Saluran_4_1.png" /> Baik<br />\
    <img src="styles/legend/Saluran_4_2.png" /> Sedang<br />\
    <img src="styles/legend/Saluran_4_3.png" /> Jelek<br />' });
var format_Bangunan_5 = new ol.format.GeoJSON();
var features_Bangunan_5 = format_Bangunan_5.readFeatures(json_Bangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_5.addFeatures(features_Bangunan_5);
cluster_Bangunan_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bangunan_5
});
var lyr_Bangunan_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bangunan_5, 
                style: style_Bangunan_5,
                popuplayertitle: 'Bangunan',
                interactive: true,
    title: 'Bangunan<br />\
    <img src="styles/legend/Bangunan_5_0.png" /> Baik Sekali<br />\
    <img src="styles/legend/Bangunan_5_1.png" /> Baik<br />\
    <img src="styles/legend/Bangunan_5_2.png" /> Sedang<br />\
    <img src="styles/legend/Bangunan_5_3.png" /> Jelek<br />' });
var format_PetakTersier_6 = new ol.format.GeoJSON();
var features_PetakTersier_6 = format_PetakTersier_6.readFeatures(json_PetakTersier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetakTersier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetakTersier_6.addFeatures(features_PetakTersier_6);
var lyr_PetakTersier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetakTersier_6, 
                style: style_PetakTersier_6,
                popuplayertitle: 'Petak Tersier',
                interactive: true,
                title: '<img src="styles/legend/PetakTersier_6.png" /> Petak Tersier'
            });
var format_Saluran_7 = new ol.format.GeoJSON();
var features_Saluran_7 = format_Saluran_7.readFeatures(json_Saluran_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saluran_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saluran_7.addFeatures(features_Saluran_7);
var lyr_Saluran_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saluran_7, 
                style: style_Saluran_7,
                popuplayertitle: 'Saluran',
                interactive: true,
    title: 'Saluran<br />\
    <img src="styles/legend/Saluran_7_0.png" /> Saluran Muka<br />\
    <img src="styles/legend/Saluran_7_1.png" /> Saluran Primer<br />\
    <img src="styles/legend/Saluran_7_2.png" /> Saluran Sekunder<br />\
    <img src="styles/legend/Saluran_7_3.png" /> Saluran Suplesi<br />' });
var format_Bangunan_8 = new ol.format.GeoJSON();
var features_Bangunan_8 = format_Bangunan_8.readFeatures(json_Bangunan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_8.addFeatures(features_Bangunan_8);
cluster_Bangunan_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bangunan_8
});
var lyr_Bangunan_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bangunan_8, 
                style: style_Bangunan_8,
                popuplayertitle: 'Bangunan',
                interactive: true,
    title: 'Bangunan<br />\
    <img src="styles/legend/Bangunan_8_0.png" /> Utama<br />\
    <img src="styles/legend/Bangunan_8_1.png" /> Pelengkap<br />\
    <img src="styles/legend/Bangunan_8_2.png" /> Pengatur<br />' });
var group_Aset = new ol.layer.Group({
                                layers: [lyr_PetakTersier_6,lyr_Saluran_7,lyr_Bangunan_8,],
                                fold: 'close',
                                title: 'Aset'});
var group_KondisiTahun2025 = new ol.layer.Group({
                                layers: [lyr_JalurInspeksi_3,lyr_Saluran_4,lyr_Bangunan_5,],
                                fold: 'close',
                                title: 'Kondisi Tahun 2025'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_JalurInspeksi_3.setVisible(false);lyr_Saluran_4.setVisible(true);lyr_Bangunan_5.setVisible(true);lyr_PetakTersier_6.setVisible(false);lyr_Saluran_7.setVisible(false);lyr_Bangunan_8.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,group_KondisiTahun2025,group_Aset];
lyr_JalurInspeksi_3.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'panjang', 'jenis': 'Jenis Jalan', 'kon_sal_25': 'kon_sal_25', 'kon_jln_25': 'Kondisi Jalan', 'stas_awal': 'Statsiun Awal', 'stas_akhir': 'Stasiun Akhir', 'foto': 'Foto', });
lyr_Saluran_4.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'Panjang', 'jenis': 'Jenis Saluran', 'kon_sal_25': 'Kondisi Saluran', 'kon_jln_25': 'kon_jln_25', 'stas_awal': 'Statsiun Awal', 'stas_akhir': 'Statsiun Akhir', 'foto': 'Foto', });
lyr_Bangunan_5.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'jenis': 'Jenis Bangunan', 'kon_bng_25': 'Kondisi Bangunan', 'foto': 'Foto', });
lyr_PetakTersier_6.set('fieldAliases', {'nomenklatu': 'nomenklatu', 'luas': 'luas', });
lyr_Saluran_7.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'Panjang', 'jenis': 'Jenis', });
lyr_Bangunan_8.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'jenis': 'Jenis', 'kon_bng_25': 'Kondisi Bangunan', 'foto': 'Foto', });
lyr_JalurInspeksi_3.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'panjang': 'TextEdit', 'jenis': 'TextEdit', 'kon_sal_25': 'TextEdit', 'kon_jln_25': 'TextEdit', 'stas_awal': 'TextEdit', 'stas_akhir': 'TextEdit', 'foto': 'TextEdit', });
lyr_Saluran_4.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'panjang': 'TextEdit', 'jenis': 'TextEdit', 'kon_sal_25': 'TextEdit', 'kon_jln_25': 'TextEdit', 'stas_awal': 'TextEdit', 'stas_akhir': 'TextEdit', 'foto': 'TextEdit', });
lyr_Bangunan_5.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'jenis': 'TextEdit', 'kon_bng_25': 'TextEdit', 'foto': 'TextEdit', });
lyr_PetakTersier_6.set('fieldImages', {'nomenklatu': 'Hidden', 'luas': 'TextEdit', });
lyr_Saluran_7.set('fieldImages', {'nama': 'Hidden', 'nomenklatu': 'Hidden', 'id_di': 'Hidden', 'norec': 'Hidden', 'k_aset': 'Hidden', 'panjang': 'TextEdit', 'jenis': 'TextEdit', });
lyr_Bangunan_8.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'jenis': 'TextEdit', 'kon_bng_25': 'TextEdit', 'foto': 'TextEdit', });
lyr_JalurInspeksi_3.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'panjang': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'kon_sal_25': 'hidden field', 'kon_jln_25': 'inline label - visible with data', 'stas_awal': 'inline label - visible with data', 'stas_akhir': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_Saluran_4.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'panjang': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'kon_sal_25': 'inline label - visible with data', 'kon_jln_25': 'hidden field', 'stas_awal': 'inline label - visible with data', 'stas_akhir': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_Bangunan_5.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'jenis': 'inline label - visible with data', 'kon_bng_25': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_PetakTersier_6.set('fieldLabels', {'luas': 'inline label - visible with data', });
lyr_Saluran_7.set('fieldLabels', {'panjang': 'inline label - visible with data', 'jenis': 'inline label - visible with data', });
lyr_Bangunan_8.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'jenis': 'inline label - visible with data', 'kon_bng_25': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_Bangunan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});