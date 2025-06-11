import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import Main from './components/main';

function App() {
  return (
    <Box bg={'#f8fafd'} width={'85vw'} height={'100vh'} p={'0'} overflowX={'hidden'}>
      <Flex height={'100%'} width={'100%'}>
        <Box height={'100%'} width={'100%'}>
          <Main />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;