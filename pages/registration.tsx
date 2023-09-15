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
import Reg from "~/components/Reg";


export default function Registration() {
  return (
    <Html lang="en">
      <Head>
        <Title>Registration</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
      <Reg />
        
    
        
        <Scripts />
      </Body>
    </Html>

  );
}