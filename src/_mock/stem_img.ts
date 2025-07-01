import stemImageMap from 'public/assets/data/dataImg.json';

export default function mapStemImgToItem(code: string): string[] {
    const folderEntry = stemImageMap.find((item) => item.folder === code);

    if (!folderEntry || !folderEntry.images.length) return [];

    return folderEntry.images.map(
        (fileName) => `/assets/images/stem-product/${code}/${fileName}`
    );
}