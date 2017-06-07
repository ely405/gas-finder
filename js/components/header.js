'use strict';

const Header = (update) => {
  const header = $('<header/>');
  const titleRow = $('<div/>',{'class':'row'});
  const icon = $('<i/>',{'class':'fa fa-chevron-left col s1', 'aria-hidden':'true'});
  const title = $('<span/>',{'class':'col s10'}).html('Gas finder');

  header.append(titleRow.append(icon, title), createSearchInput());
  return header;
}
