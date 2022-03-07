import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "About", href: "/about", icon: HomeIcon, current: true },
  { name: "Dashboard", href: "/dash-board", icon: HomeIcon, current: false },
  { name: "Company", href: "/company", icon: UsersIcon, current: false },
  { name: "Why", href: "/why", icon: FolderIcon, current: false },
  { name: "How", href: "/how", icon: CalendarIcon, current: false },
  { name: "What", href: "/what", icon: InboxIcon, current: false },
  { name: "Like", href: "/like", icon: ChartBarIcon, current: false },
  { name: "Can", href: "/can", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// 最初にインターフェース定義して
type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

// それを型指定として使う
export default function Layout({ title }: Props) {
  return (
    <div>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <a>
                    <div
                      className={classNames(
                        item.current
                          ? "bg-indigo-800 text-white"
                          : "text-indigo-100 hover:bg-indigo-600",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </div>
  );
}
