import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustifyIcon } from "lucide-react";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  return (
    <nav className=" p-2 flex items-center justify-between">
      <div className=" flex gap-x-20 items-center">
        <Image
          src={"/images/logo-primary.svg"}
          width={120}
          height={40}
          alt="Logo"
        />
        <div className="hidden lg:flex gap-4 items-center">
          <Link
            className="p-2 font-semibold text-foreground/70 hover:text-foreground"
            href="/"
          >
            Home
          </Link>
          <Link
            className="p-2 font-semibold text-foreground/70 hover:text-foreground"
            href="/"
          >
            Features
          </Link>
          <Link
            className="p-2 font-semibold text-foreground/70 hover:text-foreground"
            href="/"
          >
            Pricing
          </Link>
          <Link
            className="p-2 font-semibold text-foreground/70 hover:text-foreground"
            href="/"
          >
            FAQ
          </Link>
          <Link
            className="p-2 font-semibold text-foreground/70 hover:text-foreground"
            href="/"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className=" flex gap-2 items-center">
        <div className="hidden md:flex items-center gap-2 ">
          <Button variant={"outline"}>Sign in</Button>
          <Button>Start for free</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className=" px-3 lg:hidden">
              <AlignJustifyIcon className=" w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className=" sr-only">Edit profile</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 pt-6">
              <Link
                className="p-2 font-semibold text-foreground/70 hover:text-foreground"
                href="/"
              >
                Home
              </Link>
              <Link
                className="p-2 font-semibold text-foreground/70 hover:text-foreground"
                href="/"
              >
                Features
              </Link>
              <Link
                className="p-2 font-semibold text-foreground/70 hover:text-foreground"
                href="/"
              >
                Pricing
              </Link>
              <Link
                className="p-2 font-semibold text-foreground/70 hover:text-foreground"
                href="/"
              >
                FAQ
              </Link>
              <Link
                className="p-2 font-semibold text-foreground/70 hover:text-foreground"
                href="/"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 mt-8">
              <Button variant={"outline"} className="w-full">
                Sign in
              </Button>
              <Button className=" w-full">Start for free</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
