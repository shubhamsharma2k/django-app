export const createQueryParams = (paramData: any) => {
  const queryParams = new URLSearchParams(`?`);

  if (paramData.id) {
    queryParams.set("projectId", paramData.id);
  }

  return queryParams;
};
