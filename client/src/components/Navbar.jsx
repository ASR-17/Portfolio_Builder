import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
} from "@/components/ui/menubar";

const menuItems = [
  { label: "Home" },
  { label: "Dashboard" },
  {
    label: "Templates",
    subItems: ["Modern", "Minimal", "Creative"],
  },
  {
    label: "Portfolio",
    account: true,
  },
];

const triggerClass = "text-white hover:bg-blue-700 px-3 text-base";

export default function Navbar() {
  return (
    <>
      {/* Left Navbar */}
      <nav className="fixed top-0 left-0 right-80 z-50 bg-gradient-to-r from-green-600 to-purple-600 shadow-md rounded-r-[20px]">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="text-white text-2xl font-bold px-4">Portfolio Builder</div>
          <Menubar className="bg-transparent border-none shadow-none text-white">
            {menuItems.map((item, index) => (
              <MenubarMenu key={index}>
                <MenubarTrigger className={triggerClass}>
                  {item.label}
                </MenubarTrigger>
                {item.subItems && (
                  <MenubarContent>
                    {item.subItems.map((sub, idx) => (
                      <MenubarItem key={idx}>{sub}</MenubarItem>
                    ))}
                    <MenubarSeparator />
                    <MenubarItem disabled>Coming Soon</MenubarItem>
                  </MenubarContent>
                )}
                {item.account && (
                  <MenubarContent>
                    <MenubarLabel>Account</MenubarLabel>
                    <MenubarItem>Settings</MenubarItem>
                    <MenubarItem>Logout</MenubarItem>
                  </MenubarContent>
                )}
              </MenubarMenu>
            ))}
          </Menubar>
        </div>
      </nav>

      {/* Right Buttons */}
      <div className="fixed top-0 right-0 z-50 flex items-center gap-5 bg-white py-4 px-10 shadow-md rounded-l-[20px] h-[84px]">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Register
        </button>
      </div>
    </>
  );
}
