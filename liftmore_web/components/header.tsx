"use client";
// components/Header.tsx
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import {useMediaQuery} from "@/hooks/use-media-query";
import ProfileMain from "@/app/(ui)/profile/profile";
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import {Button} from "@/components/ui/button";

const sharedValues = {
  "bg-color": " bg-slate-500",
}

const menuItems = [
  {
    "name": "Exercises",
    "url": "/exercises"
  },
  {
    "name": "Routines",
    "url": "/routines"
  },
  {
    "name": "Sessions",
    "url": "/sessions"
  },
  {
    "name": "Progress",
    "url": "/progress"
  },
  {
    "name": "Profile",
    "url": "/profile"
  }
]

function getMenuItems(desktop: boolean) {
  if (desktop)
  {
    return menuItems.filter(item => item.url !== "/profile");
  }

  else return menuItems;
}

const DesktopMenu = () => {
  return (
    <header className={"w-full shadow-lg mt-6 rounded-lg" + sharedValues["bg-color"]}>
      <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center py-4 relative">
        <div className="flex mr-auto">
          <Link href="/"><h1 className="text-accent text-2xl">LiftMore</h1></Link>
        </div>
        <div className="absolute ml-auto mr-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {getMenuItems(true).map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.url} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
       <div className="ml-auto">
         <Sheet>
          <SheetTrigger asChild>
            <div className="flex items-center">
              <HiMenu color="white" size="1.2em"/>
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className="mx-auto h-full max-w-sm">
              <SheetHeader>
                <SheetTitle>Profile Settings</SheetTitle>
              </SheetHeader>
              <ProfileMain username="Antor" initials="ap"/>
            </div>
          </SheetContent>
        </Sheet>
       </div>
      </div>
    </header>
  );
}

const MobileMenu = () => {
  return (
      <header className={"w-full mt-2 rounded-lg mb-2 p-2" + sharedValues["bg-color"]}>
        <div className={"flex container mx-auto px-4"}>
          <div className={"flex mr-auto"}>
            <Link href="/"><h1 className={"text-accent text-2xl"}>LiftMore</h1></Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <div className={"flex items-center"}>
                <HiMenu color={"white"} size={"1.2em"}/>
              </div>
            </SheetTrigger>
            <SheetContent>
              <div className="mx-auto h-full max-w-sm">
                <ul className="space-y-4">
                  {getMenuItems(false).map((item, index) => (
                      <li key="index">
                        <Link href={item.url}>
                          <SheetClose asChild>
                            <Button variant="ghost" className="py-2 px-4">{item.name}</Button>
                          </SheetClose>
                        </Link>
                        <hr className="mt-2"/>
                      </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
  );
}

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopMenu/> : <MobileMenu/>;
};

export default Header;
