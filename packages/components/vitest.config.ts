import vue from '@vitejs/plugin-vue'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue({
        script: {
          defineModel: true
        }
      })
    ],
    test: {
      name: 'components',
      environment: 'jsdom',
      css: true,
      include: ['**/__test__/*.{test,spec}.{ts,tsx}']
    }
  } as UserConfigExport
}