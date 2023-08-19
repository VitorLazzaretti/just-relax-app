import {
  useState,
  useContext,
  createContext
} from "react";

type Props = {
  children: React.ReactNode;
}

type MenuContextType = {
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  isSideMenuOpen: boolean;
}

const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export const useMenuNavigation = () => {
  return useContext(MenuContext);
}

export const MenuProvider = ({ children }: Props) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSideMenuOpen(() => !isSideMenuOpen);
  }

  const openMenu = () => {
    setIsSideMenuOpen(true);
  }

  const closeMenu = () => {
    setIsSideMenuOpen(false);
  }

  return (
    <MenuContext.Provider value={{
      openMenu: openMenu,
      closeMenu: closeMenu,
      toggleMenu: toggleMenu,
      isSideMenuOpen: isSideMenuOpen
    }}>
      {children}
    </MenuContext.Provider>
  );
}