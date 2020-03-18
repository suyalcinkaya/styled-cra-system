import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Box, Text } from './components';
import { Box as SvgBox } from './components/icons';

import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
        <Box mr={8}>
          <Text role="img" aria-label="nail polish" fontSize={20}>💅🏻</Text>
        </Box>
        <Text fontSize={[18, 24]}>
          Welcome to Styled CRA System!
        </Text>
        <Box ml={8}>
          <SvgBox />
        </Box>
      </Box>
    </ThemeProvider >
  );
}

export default App;
