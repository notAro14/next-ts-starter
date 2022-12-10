const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  },
}

const config = createJestConfig(customJestConfig)

module.exports = config
