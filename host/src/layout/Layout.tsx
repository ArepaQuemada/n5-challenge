import AnimatedImage from "../components/AnimatedImages/AnimatedImages";
import Header from "../components/Header/Header";
import harryPotterSvg from "../assets/harry-potter-svgrepo-com.svg";
import mortySvg from "../assets/morty-svgrepo-com.svg";
import ninjaTurtle from "../assets/ninja-emotions-hero-character-svgrepo-com.svg";
import SwitchLang from "../components/SwitchLang/SwitchLang";
import { Main } from "./styled";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header>
        <AnimatedImage images={[harryPotterSvg, mortySvg, ninjaTurtle]} />
        <SwitchLang />
      </Header>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
