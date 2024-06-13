import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/tailwind.css";
import "@/styles/index.css";

import { Provider } from "@/pages/providers";

import { Routes } from "@generouted/react-router";

import { Toaster } from "@/components/Toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Routes />
      <Toaster />
    </Provider>
  </React.StrictMode>,
);
