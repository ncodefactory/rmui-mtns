import tns from 'tns';

const extractConnStr = (dataSource) => {
  const connData = dataSource.DESCRIPTION.CONNECT_DATA;
  const serviceNameOrSid = connData.SERVICE_NAME == null ? connData.SID : connData.SERVICE_NAME;
  const address = dataSource.DESCRIPTION.ADDRESS_LIST == null
    ? dataSource.DESCRIPTION.ADDRESS
    : dataSource.DESCRIPTION.ADDRESS_LIST.ADDRESS;
  return `${address.HOST}:${address.PORT}/${serviceNameOrSid}`;
};

const tnsn = (content) => {
  const connections = tns(content);
  return Object.keys(connections).map(key => ({
    name: key.toLowerCase(),
    connStr: extractConnStr(connections[key]),
  }));
};

export default tnsn;
