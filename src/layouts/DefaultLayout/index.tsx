import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <SideMenu />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}