import { ImportMap } from "@/types";

// Not used, just for referencing
// export const currentScript = document.currentScript || document.querySelector('script') as HTMLScriptElement;

export const map: ImportMap = {
  imports: {},
  scopes: {}
};

// cached for already reached filepath
// will cache filepath once the filepath starts compiling in order to speed up compile deps
export const reachedFilepath = new Set();

// Not used, just for referencing
// https://regexr.com/47jlq
export const regImportTemplate = /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:["'](.*?)["']))[\s]*?(?:;|$|)/gi;

export const regexp = {
  importScriptFrom: /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:["'](.*\.(j|t)sx?)["']))[\s]*?(?:;|$|)/gi,
  importImageFrom: /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:["'](.*\.(jpe?g|png|svg|gif))["']))[\s]*?(?:;|$|)/gi,
  importCssFrom: /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:["'](.*\.(sa|s?c)ss)["']))[\s]*?(?:;|$|)/gi,
  importSfcFrom: /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:["'](.*\.vue)["']))[\s]*?(?:;|$|)/gi,
  isScript: /(\.(j|t)sx?)$/i,
  isVueSfc: /(\.vue)$/i,
  isStyle: /(\.(sa|s?c)ss)$/i,
};

export const globalData = {
  publicPath: '', // prefix for all requestContent
  vueCompiler: '', // vue compiler esm path
};
