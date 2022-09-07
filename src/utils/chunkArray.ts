export const chunkArray = (items: any[], size: number) => {
  const chunks = [];
  const clone = [...items];

  while (clone.length) {
    chunks.push(clone.splice(0, size));
  }
  return chunks;
};
