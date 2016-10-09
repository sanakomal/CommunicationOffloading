const parse = data => {
  try {
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return data;
  }
};

export default parse;
