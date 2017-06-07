'use strict';
const createGasStationDetail= (stationDetail)=>{
  let colStationDetail = $('<div/>',{'class':'col s10'});
  let stationName = $('<p/>').html(stationDetail.name);
  let stationAddress = $('<p/>').html(stationDetail.address);
  let stationDistrict = $('<p/>').html(stationDetail.district);
  colStationDetail.append(stationName, stationAddress, stationDistrict);
  return colStationDetail;
}

const createGasStationList = (stationDetail)=>{
  let rowStationItem = $('<div/>',{'class':'row card section'});
  let colStationMap = $('<div/>',{'class':'col s2'});
  let linkToMap = $('<a/>',{'href':'#'});
  let iconMap = $('<i/>',{'class':'fa fa-map'});

  colStationMap.append(linkToMap.append(iconMap));
  rowStationItem.append(createGasStationDetail(stationDetail), colStationMap);
  return rowStationItem;
}

const createSearchInput= ()=>{
  const rowSearch = $('<div/>',{'class':'row'});
  const containsSearch = $('<div/>',{'class':'input-field col12'});
  const searchIcon = $('<i/>', {'class':'fa fa-search material-icons prefix'})
  const searchInput = $('<input/>',{'id':'search-input', 'type':'search', 'class':'col s11', 'placeholder':'Ingresa nombrede distrito'});

  rowSearch.append(containsSearch.append(searchIcon, searchInput));

  searchInput.keyup((elem)=>{
    filterByDistrict(state.stations, searchInput);
  });
  return rowSearch;
}
