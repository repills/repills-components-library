import moment from 'moment';

export default function(date, days) {
  return moment().diff(date, 'days') < days;
};
