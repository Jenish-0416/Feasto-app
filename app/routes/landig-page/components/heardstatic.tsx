import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "~/components/ui/menubar"

export default function HeardStatic(){
    return (
      <Menubar className="flex items-center justify-between bg-[#FC8A06]">
        <MenubarMenu>
            <div>🌟 Get 5% Off your first order, Promo: ORDER5</div>
            <div className="flex items-center gap-40">
              <h1 className="gap-20">
                📍Regent Street, A4, A4201, London, United Kingdom
              </h1>
              <div className="cursor-pointer font-bold underline">
                Change Location
              </div>
            </div>
          <MenubarTrigger>ADD CHART</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Item 1 <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Item 2</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Item 3</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Item 4</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
}