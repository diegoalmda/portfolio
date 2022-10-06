import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";
import { useGlobalContext } from "../../contexts/GlobalApplicationContext";
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  const { changeSideMenuState } = useGlobalContext()

  function handleScreenClick() {
    changeSideMenuState()
  }

  return (
    <LayoutContainer>
      <SideMenu />
      <main onClick={handleScreenClick}>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}