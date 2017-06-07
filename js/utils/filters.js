'use strict';
let distr;
const filterByDistrict = (stations,query) => {
  const gasFinderFliter = state.stations.map((e)=>{
    const districtLetter = e.district.split('');
    districtLetter.filter(finderFilter);
    if(e.district == distr){
      console.log(e);
    }
  });
}

const finderFilter = (letter, i, array, query)=>{
  query = $('#search-input').val();
  if(query == letter || query.toUpperCase() == letter){
    console.log('encon ' + array + ' en el indice ' + i);
    distr = array.join('');
    return distr
  }
}
