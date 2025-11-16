"use client";
import Link from "next/link";
import React from "react";
import { data } from "@/data/sidebar.data";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

function NavMenu() {
  return (
    <React.Fragment>
      {data.navigation.map((section) => (
        <SidebarGroup key={section.title}>
          <SidebarGroupLabel>{section.title?.toUpperCase()}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </React.Fragment>
  );
}

export default NavMenu;
