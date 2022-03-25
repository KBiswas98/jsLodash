const chunk = (arr, size) => {
  let finalChunk = [];

  for (let i = 0; i < arr.length; i += size) {
    finalChunk.push(arr.slice(i, i + size));
  }
  return finalChunk;
};

export default chunk;
