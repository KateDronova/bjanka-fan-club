import styled from 'styled-components';

const ParallaxHeader = styled.header`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.bg_2} 5%,
    ${(props) => props.theme.bg_1} 8%,
    ${(props) => props.theme.bg_2} 15%,
    ${(props) => props.theme.bg_1} 80%,
    ${(props) => props.theme.bg_2} 100%
  );
  border: 20px solid #fff;
  outline: 25px ridge rgb(255, 122, 122);
  box-shadow: 1px 5px 70px 40px #000;

  padding: 20px 25px;
  margin: auto;
  width: max-content;
`;

export default ParallaxHeader;
