import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, SVGProps, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UsersIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon,
  ClipboardCheckIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

type Navigation = {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  current: boolean;
};

const navigation = [
  { name: "About", href: "/about", icon: HomeIcon, current: true },
  { name: "Article", href: "/articles", icon: PencilIcon, current: false },
  { name: "Company", href: "/company", icon: UsersIcon, current: false },
  { name: "Why", href: "/why", icon: QuestionMarkCircleIcon, current: false },
  { name: "How", href: "/how", icon: LightBulbIcon, current: false },
  { name: "What", href: "/what", icon: ClipboardCheckIcon, current: false },
  { name: "Like", href: "/like", icon: HeartIcon, current: false },
  { name: "Can", href: "/can", icon: SparklesIcon, current: false },
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
  navName?: string;
  description?: string;
};

// それを型指定として使う
export default function Layout({ title, navName }: Props) {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState({});

  const changeCurrentTab = ({ name }: Navigation) => {
    const targetTab = navigation.find((item) => item.name === name);
    console.log(targetTab?.name);
    console.log(targetTab?.name === name);
    setCurrentTab(targetTab!);
  };

  return (
    <div>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  {/* <a onClick={() => changeCurrentTab(item)}> */}
                  <a>
                    <div
                      className={classNames(
                        // item === currentTab
                        router.pathname.startsWith(item.href)
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
    </div>
  );
}
