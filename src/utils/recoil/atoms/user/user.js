import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const DEFAULT_USERSTATE = {
    uid: '',
    displayName: '',
    email: ''
}

export const userState = atom({
    key: 'userState',
    default: DEFAULT_USERSTATE,
    effects_UNSTABLE: [persistAtom]
})