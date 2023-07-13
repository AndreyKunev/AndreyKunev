// Task:
// import moment module
import moment from "moment/moment.js";
moment().format();
// import logger module
import logger from './logger.js';

// do not remove this line. Or do, if you want google it :)
moment.suppressDeprecationWarnings = true;

// Task:
// print current date using moment and logger.info

const dates = ["1995-12-25", "2020W065", "js-cohort", "2020-W06-5"];
logger.info(moment().format('YYYY MM DD'));
// Task:
// Parse the array and logs success (logger.success) when date is valid 
// or error (logger.error) when invalid using the logger

dates.forEach(date => {
    if (moment(date).isValid()) {
      logger.success(moment(date).format('YYYY MM DD'));
    } else {
      logger.error(moment(date));
    }
  });
