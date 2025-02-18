import { create } from 'zustand'

export const  useFileStore = create((set) => ({
    file: null,
    uploadingResult: null,
    modalStatus: false,
    accessToken: null,
    loginAttemp: null,
    setFile: (newFile) => set({ file: newFile }),
    setUploadingResult:(newUploadingResult) => set({ uploadingResult: newUploadingResult }),
    updateModalStatus: (newModalStatus) => set({ modalStatus: newModalStatus }),
    setAccessToken: (newAccessToken) => set({accessToken: newAccessToken}),
    setLoginAttemp: (newLoginAttempt) => set({ loginAttemp: newLoginAttempt}),

}))

