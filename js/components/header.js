'use strict';

const Header = (update) => {
  const header = $('<header/>');
  const titleRow = $('<div/>',{'class':'row'});
  const icon = $('<i/>',{'class':'fa fa-chevron-left col s1', 'aria-hidden':'true'});
  const title = $('<span/>',{'class':'col s10'}).html('Gas finder');

  header.append(titleRow.append(icon, title), createSearchInput());
  return header;
}

// const createSearchInput= ()=>{
//   const rowSearch = $('<div/>',{'class':'row'});
//   const containsSearch = $('<div/>',{'class':'input-field col12'});
//   const searchIcon = $('<i/>', {'class':'fa fa-search material-icons prefix'})
//   const searchInput = $('<input/>',{'id':'search-input', 'type':'search', 'class':'col s11', 'placeholder':'Ingresa nombrede distrito'});
//
//   rowSearch.append(containsSearch.append(searchIcon, searchInput));
//   return rowSearch;
// }
