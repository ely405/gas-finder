'use strict';
const filterByDistrict = (stations,query) => {
  stations.filter((e)=>{
    if(e.district.toLowerCase().indexOf(query.val().trim().toLowerCase())!=-1 && query.val().trim() != ''){
      console.log(e.district);
      console.log('encontre letra');
      console.log(e);
      // return createGasStationList(e);
      console.log(stations);
      let divRoot = $('.root');
      return divRoot.append(createGasStationList(e));
    }
  })
}
