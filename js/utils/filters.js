'use strict';
const filterByDistrict = (stations,query) => {
  stations.filter((e)=>{
    if(e.district.toLowerCase().indexOf(query.val().trim().toLowerCase())!=-1 && query.val().trim() != ''){
      let divRoot = $('.root');
      return divRoot.append(createGasStationList(e));
    }
  })
}
