const buildDBUri = ({ protocol, user, password, host, database }) => {
  const uri = `${protocol}://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;
  return uri;
}

export { buildDBUri as default }