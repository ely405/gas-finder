'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div/>',{'class':'wrapper'});
  wrapper.append(Header(_ => render(root)));
  root.append(wrapper);
}

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {
  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});

const reRender = (listGasStation)=>{
  listGasStation.empty();
  createGasStationList(stationDetail, ()=>{reRender(listGasStation)});
}
