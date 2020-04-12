const getAuthorizationHeader = (request) => {
  const authorization =
    request.headers ?
      request.headers.authorization :
      request.connection.context.Authorization
  return authorization;
}

export { getAuthorizationHeader as default };