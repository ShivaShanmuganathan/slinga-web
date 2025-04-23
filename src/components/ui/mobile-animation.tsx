"use client";

import { useLottie } from "lottie-react";
import React from "react";

export function MobileAnimation() {
  const options = {
    animationData: {
      v: "5.7.4",
      fr: 30,
      ip: 0,
      op: 60,
      w: 500,
      h: 500,
      nm: "Security Animation",
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Shield",
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: {
              a: 1,
              k: [
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  t: 0,
                  s: [0],
                },
                {
                  t: 60,
                  s: [360],
                },
              ],
            },
            p: { a: 0, k: [250, 250, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "sh",
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-50, -100],
                        [50, -100],
                        [100, 0],
                        [-100, 0],
                      ],
                      c: true,
                    },
                  },
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.47, 0.47, 0.78, 1] },
                  o: { a: 0, k: 100 },
                },
              ],
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "sh",
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-100, 0],
                        [100, 0],
                        [50, 100],
                        [-50, 100],
                      ],
                      c: true,
                    },
                  },
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.47, 0.47, 0.78, 1] },
                  o: { a: 0, k: 100 },
                },
              ],
            },
          ],
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Check",
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [250, 250, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  t: 0,
                  s: [0, 0, 100],
                },
                {
                  t: 30,
                  s: [100, 100, 100],
                },
              ],
            },
          },
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "sh",
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-50, 0],
                        [0, 50],
                        [50, -50],
                      ],
                      c: false,
                    },
                  },
                },
                {
                  ty: "st",
                  c: { a: 0, k: [1, 1, 1, 1] },
                  o: { a: 0, k: 100 },
                  w: { a: 0, k: 20 },
                  lc: 2,
                  lj: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, {
    height: 300,
  });

  return View;
} 