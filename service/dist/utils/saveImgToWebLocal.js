import fs from 'fs';
import crypto from 'crypto';
import { __dirname } from '../configs/path.js';
/**
 * アップロードされた画像をwebのローカルに保存する。
 * @param img
 * @returns {string}
 */
export const saveImgToWebLocal = (img) => {
    const base64str = img.replace('data:image/png;base64,', '');
    const fileName = `${crypto.randomUUID()}.png`;
    fs.promises.writeFile(`/${__dirname}/../../../web/public/img/quiz/${fileName}`, base64str, {
        encoding: 'base64',
    });
    return fileName;
};
