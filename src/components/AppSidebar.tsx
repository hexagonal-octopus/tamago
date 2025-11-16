"use client";
import NavMenu from "./NavMenu";
import { Sidebar, SidebarContent, SidebarFooter } from "./ui/sidebar";

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <NavMenu />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
