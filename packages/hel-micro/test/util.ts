import { getHelDebug, getHelEventBus, getPlatform, helEvents, setAppMeta, setEmitApp, setEmitLib, setVersion } from 'hel-micro-core';
import type { IEmitAppInfo, ISubApp } from 'hel-types';
import * as mockData from './mockData';

const eventBus = getHelEventBus();
getHelDebug().logMode = 1;

/** 模拟模块获取到并发射的行为 */
export function mockLoadModule(options?: { app?: Partial<ISubApp>; platform?: string }) {
  const { platform = getPlatform() } = options || {};
  const app = mockData.makeApp(options);
  const version = mockData.makeVersion({ name: app.name, platform, versionId: app.build_version });

  setAppMeta(app, platform);
  setVersion(app.name, version, { platform });
  setTimeout(() => {
    const libInfo: IEmitAppInfo = {
      platform,
      appName: app.name,
      appGroupName: app.app_group_name,
      versionId: version.sub_app_version,
      appProperties: { getNum: () => 1 },
      isLib: true,
      Comp: null,
    };
    setEmitLib(app.name, libInfo, { platform });
    eventBus.emit(helEvents.SUB_LIB_LOADED, libInfo);
  }, 500);
  return { app, version };
}

/** 模拟应用根组件获取到并发射的行为 */
export function mockLoadAppRootComponent(options?: { app?: Partial<ISubApp>; platform?: string }) {
  const { platform = getPlatform() } = options || {};
  const app = mockData.makeApp(options);
  const version = mockData.makeVersion({ name: app.name, platform, versionId: app.online_version });
  setAppMeta(app, platform);
  setVersion(app.name, version, { platform });
  setTimeout(() => {
    const compInfo: IEmitAppInfo = {
      platform,
      appName: app.name,
      appGroupName: app.app_group_name,
      versionId: version.sub_app_version,
      appProperties: null,
      isLib: false,
      // prettier-ignore
      Comp: function RootComponent() { },
    };
    setEmitApp(app.name, compInfo);
    eventBus.emit(helEvents.SUB_APP_LOADED, compInfo);
  }, 500);
}
