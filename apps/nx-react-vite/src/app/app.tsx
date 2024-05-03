import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { ReactComponents } from '@myorg/react-components-lib';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ReactComponents />
      <NxWelcome title="nx-react-vite" />
    </StyledApp>
  );
}

export default App;
