import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext"; // ✅ Changed from useUser to useAuth
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  {
    label: "Templates",
    subItems: [
      { label: "Modern", to: "/templates/modern" },
      { label: "Minimal", to: "/templates/minimal" },
      { label: "Choose Template", to: "/templates" },
    ],
  },
  {
    label: "Portfolio",
    to: "/PublicPortfolio",
  },
];

const triggerClass = "text-white hover:bg-blue-700 px-3 text-base";

export default function Navbar() {
  const { user, logout } = useAuth(); // ✅ use user.name and user.email if available

  return (
    <>
      {/* Left Navbar */}
      <nav className="fixed top-0 left-0 right-80 z-50 bg-gradient-to-r from-green-600 to-purple-600 shadow-md rounded-r-[20px]">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="text-white text-2xl font-bold px-4">Portfolio Builder</div>
          <Menubar className="bg-transparent border-none shadow-none text-white">
            {menuItems.map((item, index) => (
              <MenubarMenu key={index}>
                <MenubarTrigger className={triggerClass} asChild>
                  <Link to={item.to || "#"}>{item.label}</Link>
                </MenubarTrigger>

                {item.subItems && (
                  <MenubarContent>
                    {item.subItems.map((sub, idx) => (
                      <MenubarItem key={idx} asChild>
                        <Link to={sub.to || "#"}>{sub.label}</Link>
                      </MenubarItem>
                    ))}
                    <MenubarSeparator />
                    <MenubarItem disabled>Coming Soon</MenubarItem>
                  </MenubarContent>
                )}
              </MenubarMenu>
            ))}
          </Menubar>
        </div>
      </nav>

      {/* Right Profile or Auth Buttons */}
      <div className="fixed top-0 right-0 z-50 flex items-center gap-5 bg-white py-4 px-10 shadow-md rounded-l-[20px] h-[84px]">
        {user ? (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name || user.email}`} />
                  <AvatarFallback>{(user.name || user.email)[0]?.toUpperCase()}</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent align="end">
                <MenubarItem disabled className="flex flex-col items-start">
                  <span className="font-xl">{user.name}</span>
                  <span className="text-sm text-brown-900 font-bold">{user.email}</span>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <>
            <Link to="/login">
              <Button className="bg-green-600 hover:bg-green-700">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blue-700 hover:bg-blue-800">Register</Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
