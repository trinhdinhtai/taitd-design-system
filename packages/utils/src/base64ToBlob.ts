/**
 * Convert base64 to blob
 *
 * @param {string} base64 - base64 string
 * @param {string} mimeType - mime type
 * @param {number} [partSize=512] - part size
 * @returns
 */
export const base64ToBlob = (
  base64: string,
  mimeType: string,
  partSize = 512
) => {
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += partSize) {
    const slice = byteCharacters.slice(offset, offset + partSize);

    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, { type: mimeType });
};
