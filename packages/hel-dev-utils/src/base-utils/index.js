/** @typedef {import('typings').ICreateSubAppOptions} ICreateSubAppOptions */
import { getNpmCdnHomePage } from '../inner-utils/index';

export function ensureSlash(inputPath, needsSlash) {
  const hasEndSlash = inputPath.endsWith('/');
  if (hasEndSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasEndSlash && needsSlash) {
    return `${inputPath}/`;
  } else {
    return inputPath;
  }
}

export function getHelProcessEnvParams() {
  // 以下常量由蓝盾流水线注入（由流水线变量或bash脚本注入）
  const {
    HOST,
    PORT,
    // appHomePage, 形如 http://xxx.cdn.com/hel/app1_2020121201011666
    HEL_APP_HOME_PAGE,
    /** 在构建机环境时，会注入真正对应的应用名 */
    HEL_APP_GROUP_NAME,
    HEL_APP_NAME,
  } = process.env;

  let appHomePage = HEL_APP_HOME_PAGE;
  // 未传递 HEL_APP_HOME_PAGE 的话，根据 HOST 和 PORT 推导
  if (!appHomePage && (HOST || PORT)) {
    const host = HOST || 'localhost';
    const port = PORT || '80';
    const hotsStr = host.startsWith('http') ? host : `http://${host}`;
    appHomePage = `${hotsStr}:${port}`;
  }

  return {
    appHomePage,
    appGroupName: HEL_APP_GROUP_NAME,
    appName: HEL_APP_NAME,
  };
}

/**
 * @param {Record<string, any>} pkg
 * @param {ICreateSubAppOptions} options
 * @returns
 */
export function getHelEnvParams(pkg, options = {}) {
  let cdnHomPage = options.homePage;
  // 改写为 unpkg 的 homePage 模式，此时如果透传了 homePage，表示为 unpkg 私服
  if (options.npmCdnType) {
    cdnHomPage = getNpmCdnHomePage(pkg, { npmCdnType: options.npmCdnType, homePage: options.homePage });
  }

  // 来自 process.env 的值优先级最高
  const p0EnvParams = getHelProcessEnvParams();
  return {
    appHomePage: p0EnvParams.appHomePage || cdnHomPage || pkg.homepage || '',
    appGroupName: p0EnvParams.appGroupName || pkg.appGroupName || '',
    appName: p0EnvParams.appName || pkg.appGroupName || '',
  };
}

/**
 *
 * @param {string} appName - hel 管理台注册的应用名
 */
export function getJsonpFnName(appName) {
  // 支持同一个模块正确执行多版本js文件
  return `helJsonp_${appName}_${Date.now()}`;
}

/**
 *
 * @param {string} homePage - 应用homePage
 * @param {boolean} [needsSlash]
 * @returns
 */
export function getPublicPathOrUrl(homePage, needsSlash = true) {
  return ensureSlash(homePage, needsSlash);
}

/**
 * 返回 react 相关的包体 externals 映射对象
 * 16.14.0
 * https://tnfe.gtimg.com/hel-runtime/level1/16.14.0-react.js
 * https://tnfe.gtimg.com/hel-runtime/level1/16.14.0-react.dev.js
 * @returns
 */
export function getReactExternals() {
  return {
    react: 'LEAH_React',
    'react-dom': 'LEAH_ReactDOM',
    'react-reconciler': 'LEAH_ReactReconciler',
    'react-is': 'LEAH_ReactIs',
  };
}

/**
 * 返回 vue3 相关的包体 externals 映射对象，目前已有以下版本
 * ```
 * - 3.2.33
 * https://tnfe.gtimg.com/hel-runtime/level1/3.2.33-vue.js
 * https://tnfe.gtimg.com/hel-runtime/level1/3.2.33-vue.dev.js
 *
 * ```
 * @returns
 */
export function getVue3Externals() {
  return {
    vue: 'LEAH_Vue',
    '@vue/compiler-dom': 'LEAH_VueCompilerDom',
    '@vue/compiler-sfc': 'LEAH_VueCompilerSfc',
    '@vue/runtime-core': 'LEAH_VueRunTimeCore',
    '@vue/runtime-dom': 'LEAH_VueRunTimeDom',
    '@vue/server-renderer': 'LEAH_VueServerRenderer',
    '@vue/shared': 'LEAH_VueShared',
    '@vue/reactivity': 'LEAH_VueReactivity',
  };
}

/**
 * 返回 vue2 相关的包体 externals 映射对象，目前已有以下版本
 * ```
 * - 2.6.14
 * https://tnfe.gtimg.com/hel-runtime/level1/2.6.14-vue.js
 * https://tnfe.gtimg.com/hel-runtime/level1/2.6.14-vue.dev.js
 *
 * ```
 * @returns
 */
export function getVue2Externals() {
  return {
    vue: 'LEAH_Vue',
  };
}
