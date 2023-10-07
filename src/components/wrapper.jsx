import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.bg_1} 0%,
    ${(props) => props.theme.bg_2} 50%,
    ${(props) => props.theme.bg_1} 100%
  );
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 100vh;
  color: ${(props) => props.theme.font_color};
`;

export default Wrapper;
