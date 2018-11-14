var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_IND_roads = new ol.format.GeoJSON();
var features_IND_roads = format_IND_roads.readFeatures(geojson_IND_roads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_roads = new ol.source.Vector();
jsonSource_IND_roads.addFeatures(features_IND_roads);var lyr_IND_roads = new ol.layer.Vector({
                source:jsonSource_IND_roads, 
                style: style_IND_roads,
                title: "IND_roads"
            });

lyr_IND_roads.setVisible(true);
var layersList = [baseLayer,lyr_IND_roads];
lyr_IND_roads.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_IND_roads.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_IND_roads.set('fieldLabels', {'MED_DESCRI': 'header label', 'RTT_DESCRI': 'inline label', 'F_CODE_DES': 'inline label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_IND_roads.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});