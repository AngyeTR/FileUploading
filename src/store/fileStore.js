import { create } from 'zustand'

export const  useFileStore = create((set) => ({
    file: null,
    uploadingResult: null,
    modalStatus: false,
    setFile: (newFile) => set({ file: newFile }),
    setUploadingResult:(newUploadingResult) => set({ uploadingResult: newUploadingResult }),
    updateModalStatus: (newModalStatus) => set({ modalStatus: newModalStatus })

}))

