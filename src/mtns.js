const parseLine = (line) => {
  const elements = line.trim().toLowerCase().split(';');
  const passwdElement = elements[2];
  return {
    name: `${elements[0]}@${elements[1]}`,
    connStrName: elements[1],
    user: elements[0],
    passwd: passwdElement == null || passwdElement === '' ? null : passwdElement,
  };
};

const mtns = (content) => {
  const strContent = typeof content === 'string' ? content.split('\n') : content.toString().split('\n');
  return strContent.map(parseLine);
};

export default mtns;
