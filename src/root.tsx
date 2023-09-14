// @refresh reload
import { Component, Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { Router, Route, Routes } from "@solidjs/router";
import Header from "./components/Header";
import TitleBlock from "./components/TitleBlock";
import MainNav from "./components/MainNav";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Site</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Header />
        <TitleBlock />
        <MainNav  />
        <Main />
        <Main />
        <Main />
        <a class="link_project" href="">
          See all projects
        </a>
        <About />
        <Footer />
        <p class="footer_name">
        © 2023 Ilya Ternyavsky
        </p>
        
        
        <Scripts />
      </Body>
    </Html>

  );
}
