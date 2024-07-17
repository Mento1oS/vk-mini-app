import {
    createHashRouter,
    createPanel,
    createRoot,
    createView,
    RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
    MAIN: 'main',
    SOLO: 'solo',
    SOLO_TASK: 'solo/task',
    SOLO_GAME: 'solo/game',
    SOLO_IN_GAME: 'solo/game/:stage'
} as const;

export const routes = RoutesConfig.create([
    createRoot(DEFAULT_ROOT, [
        createView(DEFAULT_VIEW, [
            createPanel(DEFAULT_VIEW_PANELS.MAIN, '/', []),
            createPanel(DEFAULT_VIEW_PANELS.SOLO, `/${DEFAULT_VIEW_PANELS.SOLO}`, []),
            createPanel(DEFAULT_VIEW_PANELS.SOLO_TASK, `/${DEFAULT_VIEW_PANELS.SOLO_TASK}`, []),
            createPanel(DEFAULT_VIEW_PANELS.SOLO_GAME, `/${DEFAULT_VIEW_PANELS.SOLO_GAME}`, []),
            createPanel(DEFAULT_VIEW_PANELS.SOLO_IN_GAME, `/${DEFAULT_VIEW_PANELS.SOLO_IN_GAME}`, []),
        ]),
    ]),
]);

export const router = createHashRouter(routes.getRoutes());
