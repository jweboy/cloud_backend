import QueryString from 'qs';

export function serializateQuery(
  data: Record<string, any>,
  addQueryPrefix: boolean = true,
) {
  return QueryString.stringify(data, { addQueryPrefix });
}

export function serializateUrlWithQuery(
  url: string,
  data: Record<string, any>,
) {
  const query = serializateQuery(data);
  return url + query;
}
