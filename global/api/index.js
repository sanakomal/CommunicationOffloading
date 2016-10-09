const queries = {
  NEWS: '?q=select%20*%20from%20cricket.news%20%20where%20region%3D%22in%22'
  UPCOMINGSERIES: '?q=select%20*%20from%20cricket.series.upcoming%20%20where%20region%3D%22in%22'
};

const options = {
  NEWS: '&diagnostics=true&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0'
  UPCOMINGSERIES: '&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0'
};

export default {
  NEWS: `${queries.NEWS}${options.NEWS}`
  UPCOMINGSERIES: `${queries.SERIES}${options.SERIES}`
};
