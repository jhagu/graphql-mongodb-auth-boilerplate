const getAuthorizationHeader = (request) => {
  const authorization =
    request.request ?
      request.request.headers.authorization :
      request.connection.context.Authorization
  return authorization;
}

export { getAuthorizationHeader as default };