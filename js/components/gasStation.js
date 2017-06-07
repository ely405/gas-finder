'use strict';
const createGasStationList = (update)=>{
  console.log('create gas station');
  //$(this).text($(this).text().substr(0, 25));
  let rowStationItem = $('<div/>',{'class':'row card section'});
  let colStationDetail = $('<div/>',{'class':'col s10'});
  let detailParagraph = $('<p/>').html('detalle del grifo');
  let colStationMap = $('<div/>',{'class':'col s2'});
  let linkToMap = $('<a/>',{'href':'#'});
  let iconMap = $('<i/>',{'class':'fa fa-map'});

  colStationDetail.append(detailParagraph);
  colStationMap.append(linkToMap.append(iconMap));
  rowStationItem.append(colStationDetail, colStationMap);
  return rowStationItem;
}
