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
import "../src/root.css";
import { Router, Route, Routes } from "@solidjs/router";
import Header from "../src/components/Header";
import Log from "~/components/Log";


export default function Login() {
  return (
    <Html lang="en">
      <Head>
        <Title>Login</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
      <Log />
        
    
        
        <Scripts />
      </Body>
    </Html>

  );
}
