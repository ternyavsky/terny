// @refresh reload
import { Component, Suspense, onMount } from "solid-js";
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
import "../src/root.css";
import { Router, Route, Routes } from "@solidjs/router";
import Header from "../src/components/Header";
import TitleBlock from "../src/components/TitleBlock";
import MainNav from "../src/components/MainNav";
import Main from "../src/components/Main";
import About from "../src/components/About";
import Footer from "../src/components/Footer";

export default function Index() {

  return (
    <Html lang="en">
      <Head>
        <Title>Ternyavsky</Title>
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
