export const formatThousands = (num: string | number) =>
  isFinite(+num) ? parseInt(`${num}`, 10).toLocaleString() : num;
