const rootStr = "Lets make it a successful Meetup";

const concatStr = name => {
  const str = `${rootStr} - ${name}`;
  console.log(str);
  return str;
};

export {concatStr};