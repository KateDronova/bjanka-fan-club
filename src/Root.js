import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme } from './common/themes';
import Header from './components/header';
import Footer from './components/footer';
import Wrapper from './components/wrapper';

function Root() {
  const { darkThemeIsChosen } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={darkThemeIsChosen ? darkTheme : defaultTheme}>
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
