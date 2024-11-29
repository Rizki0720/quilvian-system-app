'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { Provider } from 'react-redux'
import store from '@/lib/state/store'

export function ProviderLayout(props) {
  return (
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </Provider>
  )
}
