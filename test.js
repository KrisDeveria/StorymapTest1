    var layers = {
        layer1: {
            layer: L.tileLayer('https://geoserver.opendatascience.eu/geoserver/gwc/service/tms/1.0.0/veg_pinus.sylvestris_pnv.eml_md_30m_0..0cm_2018..2020_eumap_epsg3035_v0.3/{z}/{x}/{-y}.jpg'),
            legend: '<i style="background: black; opacity: 0.5"></i><p><b>legend 1</b></p>'
        },
        layer2: {
            layer: L.geoJson.ajax('http://mapious.ceoas.oregonstate.edu/geoserver/mapious/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ore_counties&outputFormat=application%2Fjson', {
                color: 'orange',
                weight: 5
            }),
            legend: '<i style="background: orange; opacity: 0.5"></i><p><b>legend 2</b></p>'
        },
        layer3: {
            layer: L.tileLayer('https://geoserver.opendatascience.eu/geoserver/gwc/service/tms/1.0.0/veg_pinus.sylvestris_pnv.eml_md_30m_0..0cm_2018..2020_eumap_epsg3035_v0.3/{z}/{x}/{-y}.jpg')
        }
    };

    var scenes = {
        scene1: {lat: 44, lng: -123.5, zoom: 7, layers: [layers.layer2], name: "scene 1"},
        scene2: {lat: 44.5701158, lng: -123.2949388, zoom: 10, layers: [layers.layer2], name: "scene 2"},
        scene3: {lat: 44.5701158, lng: -123.2949388, zoom: 12, layers: [layers.layer1, layers.layer2], name: "scene 3"}
    };

    $('#storymap').storymap({
        scenes: scenes,
        layers: layers,
        baselayer: layers.layer3,
        legend: true,
        loader: true,
        flyto: false,
        credits: "Build with <i class='material-icons' style='color: red; font-size: 10px;'>favorite</i> from Bo Zhao",
        scalebar: true,
        scrolldown: false,
        progressline: true,
        navwidget: true,
        createMap: function () {
            var map = L.map($(".storymap-map")[0], {zoomControl: false}).setView([44, -120], 7);
            basemap = this.baselayer.layer.addTo(map);
            return map;
        }
    });