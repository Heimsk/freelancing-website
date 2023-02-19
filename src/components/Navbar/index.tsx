"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Picture from "../../../public/profile.webp";
import "./styles.scss";
import { FiBell, FiSun } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineInbox,
} from "react-icons/ai";
import { BsMoon } from "react-icons/bs";

export function Navbar() {
  const [mode, setMode] = useState("light");
  const [active, setActive] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const el = document.getElementById("navbar");

      if (el) {
        if (scroll >= 5) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }
    });

    const _mode = localStorage.getItem("mode");
    setMode(_mode || "light");
    changeMode(_mode || "light");
  }, []);

  function changeMode(selected?: string) {
    const el = document.documentElement.style;
    if (selected == "dark") {
      el.setProperty("--bg", "#151521");
      el.setProperty("--text", "white");
      el.setProperty("--darktext", "darkgray");
      el.setProperty("--bg2", "#1E1E2D");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      el.setProperty("--bg", "transparent");
      el.setProperty("--text", "black");
      el.setProperty("--darktext", "#616161");
      el.setProperty("--bg2", "white");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }

  return (
    <>
      <nav id="navbar">
        <div className="container">
          <div className="brand">
            <Link href="/">MoreFreelas.</Link>
          </div>
          <ul className="menu">
            <li id="home">
              <Link href="/">
                <i>
                  <AiOutlineHome />
                </i>
                <span>Home</span>
              </Link>
            </li>
            <li id="dashboard">
              <Link href="/dashboard">
                <i>
                  <AiOutlineDashboard />
                </i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li id="orders">
              <Link href="/orders">
                <i>
                  <AiOutlineInbox />
                </i>
                <span>Pedidos</span>
              </Link>
            </li>
          </ul>
          <div className="others">
            <div onClick={() => changeMode(mode == "dark" ? "light" : "dark")}>
              {mode == "light" ? <FiSun /> : <BsMoon />}
            </div>
            <div className="notifications active">
              <FiBell />
            </div>
            <div className="account">
              <Image
                alt="profile_picture"
                src={Picture}
                width={45}
                height={45}
              ></Image>
              <i>
                <FaAngleDown />
              </i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
