"use client";

import "./styles.scss";
import { BiCookie } from "react-icons/bi";
import { Button } from "../Button";
import { useEffect, useState } from "react";

export function CookieConsent() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("cookies.consent");

    if (!data) {
      setActive(true);
    }
  }, []);

  function acceptCookies(accepted: boolean) {
    localStorage.setItem("cookies.consent", accepted.toString());

    setTimeout(() => {
      setActive(false);
    }, 200);
  }

  return (
    <>
      <div className={`consent${active ? " active" : ""}`}>
        <i>
          <BiCookie />
        </i>
        <p>
          Nós usamos cookies terceirizados para personalizar a sua experiência
          em nosso site.
        </p>
        <div className="buttons">
          <Button
            onClick={() => acceptCookies(true)}
            label="Aceitar"
            small
            hoverEffect={["fill"]}
            style={["rounded", "outline"]}
          />
          <Button
            onClick={() => acceptCookies(false)}
            label="Recusar"
            small
            hoverEffect={["fill"]}
            style={["rounded", "outline"]}
          />
        </div>
      </div>
    </>
  );
}
