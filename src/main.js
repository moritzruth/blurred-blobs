import * as blobLib from "blobs/v2"

const canvas = document.querySelector("#canvas")
const downloadLink = document.querySelector("#download")

const context = canvas.getContext("2d")

const dpr = window.devicePixelRatio || 1
// Get the size of the canvas in CSS pixels.
const rect = canvas.getBoundingClientRect()
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
context.scale(dpr, dpr);

const COLORS = ["rgba(101,119,252,A)", "rgba(235,52,207,A)", "rgba(101,119,252,A)", "rgba(235,52,207,A)"]

context.filter = `blur(${dpr * 30}px)`

for (const color of COLORS) {
  const path = blobLib.canvasPath({
    seed: Math.random(),
    extraPoints: 6,
    size: 300,
    randomness: 30,
  }, {
    offsetX: 50,
    offsetY: 50
  })

  context.fillStyle = color.replace("A", String(0.2 + (Math.random() * 0.4)))
  context.fill(path)
}

downloadLink.href = canvas.toDataURL();
